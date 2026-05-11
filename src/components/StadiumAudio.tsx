import { useEffect, useRef, useState } from 'react'

/**
 * Synthesises crowd noise + air horn entirely from the Web Audio API.
 * No external mp3 files needed — keeps the bundle tiny and the deploy clean.
 */
export default function StadiumAudio() {
  const [crowdOn, setCrowdOn] = useState(false)
  const [honks, setHonks] = useState(0)
  const ctxRef = useRef<AudioContext | null>(null)
  const crowdNodesRef = useRef<{
    noise: AudioBufferSourceNode
    gain: GainNode
    filter: BiquadFilterNode
  } | null>(null)

  const ensureCtx = () => {
    if (!ctxRef.current) {
      const Ctor = window.AudioContext || (window as any).webkitAudioContext
      ctxRef.current = new Ctor()
    }
    return ctxRef.current!
  }

  const startCrowd = () => {
    const ctx = ensureCtx()
    if (ctx.state === 'suspended') ctx.resume()

    // generate 4s of pink-ish noise and loop it
    const seconds = 4
    const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    let last = 0
    for (let i = 0; i < data.length; i++) {
      // pink-ish noise: lowpass-ed white noise
      const white = Math.random() * 2 - 1
      last = 0.97 * last + 0.03 * white
      data[i] = last * 1.2
    }
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 800
    filter.Q.value = 0.6

    const gain = ctx.createGain()
    gain.gain.value = 0
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.6)

    src.connect(filter).connect(gain).connect(ctx.destination)
    src.start()
    crowdNodesRef.current = { noise: src, gain, filter }
  }

  const stopCrowd = () => {
    const nodes = crowdNodesRef.current
    if (!nodes || !ctxRef.current) return
    const ctx = ctxRef.current
    nodes.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4)
    setTimeout(() => nodes.noise.stop(), 500)
    crowdNodesRef.current = null
  }

  const toggleCrowd = () => {
    if (crowdOn) stopCrowd()
    else startCrowd()
    setCrowdOn(!crowdOn)
  }

  const blowHorn = () => {
    const ctx = ensureCtx()
    if (ctx.state === 'suspended') ctx.resume()

    const t = ctx.currentTime
    // two stacked sawtooth oscillators — classic air-horn intervals
    const freqs = [220, 277] // A3 + ~C#4
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(f * 0.3, t)
      osc.frequency.exponentialRampToValueAtTime(f, t + 0.05)

      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(0.18 - i * 0.04, t + 0.05)
      gain.gain.linearRampToValueAtTime(0.16, t + 0.5)
      gain.gain.linearRampToValueAtTime(0, t + 0.7)

      osc.connect(gain).connect(ctx.destination)
      osc.start(t)
      osc.stop(t + 0.75)
    })

    setHonks((h) => h + 1)
  }

  // tear down on unmount
  useEffect(() => {
    return () => {
      try {
        crowdNodesRef.current?.noise.stop()
      } catch {}
      ctxRef.current?.close()
    }
  }, [])

  return (
    <div className="fixed bottom-12 right-3 z-50 flex flex-col gap-2 items-end">
      <button
        onClick={toggleCrowd}
        className={`bevel border-2 border-ref font-display text-xs sm:text-sm uppercase tracking-wider px-3 py-2 ${
          crowdOn ? 'bg-espn text-chalk' : 'bg-chalk text-ref'
        }`}
        aria-pressed={crowdOn}
      >
        🏟 stadium {crowdOn ? 'on' : 'off'}
      </button>

      <button
        onClick={blowHorn}
        className="air-horn bevel font-display text-xs sm:text-sm uppercase tracking-wider px-3 py-2 text-ref"
        aria-label="blow the air horn"
      >
        📢 honk
      </button>
      <span className="font-ticker text-bug text-[11px] bg-ref px-2 py-0.5 border border-bug">
        honks today: {(14832 + honks).toLocaleString()}
      </span>
    </div>
  )
}
