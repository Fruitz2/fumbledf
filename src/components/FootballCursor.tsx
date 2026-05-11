import { useEffect, useRef } from 'react'

export default function FootballCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rotation = useRef(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMove)

    let raf = 0
    const tick = () => {
      const dx = target.current.x - current.current.x
      const dy = target.current.y - current.current.y
      current.current.x += dx * 0.18
      current.current.y += dy * 0.18
      const speed = Math.hypot(dx, dy)
      if (speed > 1) rotation.current += speed * 0.6
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x - 22}px, ${current.current.y - 14}px, 0) rotate(${rotation.current}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ width: 44, height: 28 }}
    >
      <svg viewBox="0 0 64 40" className="h-full w-full drop-shadow-[2px_3px_0_rgba(0,0,0,0.6)]">
        <ellipse cx="32" cy="20" rx="28" ry="14" fill="#7a3a1c" stroke="#2a1208" strokeWidth="2.5" />
        <path
          d="M14 20 L50 20 M22 15 L22 25 M30 13.5 L30 26.5 M38 13.5 L38 26.5 M46 15 L46 25"
          stroke="#f5f1e3"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="22" cy="14" rx="8" ry="2.5" fill="rgba(255,255,255,0.3)" />
      </svg>
    </div>
  )
}
