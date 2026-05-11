import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] astroturf scanlines overflow-hidden flex flex-col items-center justify-center px-4 py-20">
      {/* yard line markers vertical */}
      <div className="absolute inset-x-0 top-20 h-1 bg-white/40" />
      <div className="absolute inset-x-0 bottom-20 h-1 bg-white/40" />
      <div className="absolute left-6 top-24 bottom-24 w-px bg-white/20" />
      <div className="absolute right-6 top-24 bottom-24 w-px bg-white/20" />

      {/* yard numbers in corners */}
      <span className="absolute top-24 left-12 font-display text-9xl text-white/15 leading-none rotate-[-90deg] origin-top-left">
        50
      </span>
      <span className="absolute bottom-24 right-12 font-display text-9xl text-white/15 leading-none rotate-90 origin-bottom-right">
        50
      </span>

      {/* "broadcast intro" small label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 flex items-center gap-3 font-ticker text-bug text-lg"
      >
        <span className="bg-espn text-chalk px-2 py-0.5 text-[11px] tracking-widest uppercase font-display">
          Live • Sunday Night Special
        </span>
        <span className="text-chalk/70">presents</span>
      </motion.div>

      {/* main wordmark */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-display text-chalk text-[20vw] md:text-[15vw] leading-[0.85] tracking-tight broadcast-outline-yellow text-center"
      >
        FUMBLED
      </motion.h1>

      {/* subtitle stripes — STAMPED */}
      <motion.div
        initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -4, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 90 }}
        className="mt-2 mb-6 inline-block bg-espn px-6 py-2 border-4 border-chalk font-display text-2xl md:text-4xl tracking-wider text-chalk uppercase"
        style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.8))' }}
      >
        the ball is loose. scoop it.
      </motion.div>

      {/* dropped football */}
      <motion.div
        initial={{ y: -200, rotate: 0, opacity: 0 }}
        animate={{
          y: [-200, -100, 0, 0, 0],
          rotate: [0, 540, 720, 720, 720],
          opacity: [0, 1, 1, 1, 1],
        }}
        transition={{ duration: 1.6, times: [0, 0.4, 0.55, 0.8, 1] }}
        className="mt-2"
      >
        <svg viewBox="0 0 200 130" className="w-44 md:w-56 drop-shadow-[6px_8px_0_rgba(0,0,0,0.6)]">
          <ellipse cx="100" cy="65" rx="92" ry="48" fill="#7a3a1c" stroke="#2a1208" strokeWidth="4" />
          <path
            d="M30 65 L170 65 M55 50 L55 80 M85 45 L85 85 M115 45 L115 85 M145 50 L145 80"
            stroke="#f5f1e3"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="70" cy="48" rx="22" ry="6" fill="rgba(255,255,255,0.28)" />
        </svg>
      </motion.div>

      {/* pitch line */}
      <p className="mt-8 text-center font-body text-chalk/90 text-base md:text-xl max-w-2xl leading-relaxed">
        two guys. one roulette account. zero plan.
        <br />
        every spin we drop the rock. every drop is your chance to recover it.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#scoop"
          className="bevel-deep bg-espn font-display text-3xl md:text-4xl text-chalk px-8 py-4 uppercase tracking-wider hover:scale-[1.02] active:translate-y-1 transition border-4 border-chalk"
        >
          🏈 Recover the Fumble
        </a>
        <a
          href="#playbook"
          className="bevel bg-bug font-display text-xl md:text-2xl text-ref px-6 py-3 uppercase tracking-wider hover:scale-[1.02] active:translate-y-1 transition border-4 border-ref"
        >
          See the Playbook
        </a>
      </div>

      {/* contract address bar */}
      <div className="mt-10 w-full max-w-2xl">
        <div className="bg-ref border-2 border-bug px-3 py-2 font-ticker text-bug text-base flex items-center justify-between gap-3 overflow-hidden">
          <span className="text-chalk/60 text-xs uppercase tracking-widest font-display">CA</span>
          <span className="truncate">PASTE_YOUR_PUMPFUN_CA_HERE_xxxxxxxxxxxxxxxxxxxxxx</span>
          <button className="bg-bug text-ref px-2 py-0.5 text-xs font-display uppercase">copy</button>
        </div>
      </div>
    </section>
  )
}
