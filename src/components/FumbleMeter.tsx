import { useEffect, useState } from 'react'

export default function FumbleMeter() {
  const [fumbled, setFumbled] = useState(48221)
  const [streamHour, setStreamHour] = useState(19)

  useEffect(() => {
    // climb sometimes, big jumps occasionally — the chaos is the bit
    const id = setInterval(() => {
      setFumbled((v) => {
        const r = Math.random()
        if (r < 0.05) return v + Math.floor(Math.random() * 800 + 200) // big L
        if (r < 0.5) return v + Math.floor(Math.random() * 30 + 5)
        return v
      })
    }, 1500)
    const id2 = setInterval(() => setStreamHour((s) => s + 1), 60000)
    return () => {
      clearInterval(id)
      clearInterval(id2)
    }
  }, [])

  return (
    <section className="relative bg-ref text-chalk py-20 px-4 overflow-hidden">
      {/* radiating spotlights */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(255,212,0,0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(204,0,0,0.4) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-display text-bug text-xl tracking-[0.3em] uppercase">
            ━━ The Official ━━
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mt-2 broadcast-outline-yellow">
            Fumble-O-Meter
          </h2>
          <p className="font-marker text-xl md:text-2xl text-espn mt-3">
            (the only metric that matters)
          </p>
        </div>

        {/* the giant LED counter */}
        <div className="led p-6 md:p-10 text-center mx-auto max-w-3xl">
          <div className="font-display text-bug text-sm md:text-base uppercase tracking-[0.4em] mb-3">
            total holder money fumbled
          </div>
          <div className="font-ticker text-7xl md:text-[9rem] leading-none">
            ${fumbled.toLocaleString()}
            <span className="animate-flash">.</span>
          </div>
          <div className="font-display text-chalk/40 text-xs md:text-sm uppercase tracking-widest mt-3">
            number only goes up. like a reverse 401(k).
          </div>
        </div>

        {/* stat strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 font-ticker">
          <StatTile label="Stream Hour" value={String(streamHour)} unit="hrs awake" />
          <StatTile label="Spins Lost" value="143" unit="in a row" />
          <StatTile label="Hail Marys Hit" value="0" unit="career" />
          <StatTile label="Mom Calls" value="4" unit="ignored" />
        </div>

        {/* "the dream" mini block */}
        <div className="mt-12 mx-auto max-w-3xl bg-bug text-ref p-6 border-4 border-chalk">
          <div className="font-display text-2xl md:text-3xl uppercase mb-2">
            ⚠ Generational Wealth Tracker ⚠
          </div>
          <div className="h-6 bg-ref relative overflow-hidden border-2 border-ref">
            <div className="absolute inset-y-0 left-0 bg-espn" style={{ width: '0.04%' }} />
            <div className="absolute inset-0 flex items-center justify-center font-ticker text-bug text-sm">
              0.04% to generational wealth
            </div>
          </div>
          <p className="font-body text-sm mt-3">
            we made it 0.04% of the way last week. then we bet 32 on red. it was black.
            we are once again 0.00% of the way to generational wealth. progress.
          </p>
        </div>
      </div>
    </section>
  )
}

function StatTile({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="bg-[#0a0a0a] border-2 border-bug/40 p-4">
      <div className="font-display text-bug text-[11px] uppercase tracking-widest">{label}</div>
      <div className="text-chalk text-4xl mt-1">{value}</div>
      <div className="text-chalk/50 text-xs">{unit}</div>
    </div>
  )
}
