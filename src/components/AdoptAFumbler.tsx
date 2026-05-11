export default function AdoptAFumbler() {
  return (
    <section className="relative bg-[#1a1a1a] text-chalk py-20 px-4 overflow-hidden">
      {/* sad rainy night vibe overlay */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(125,150,180,0.6) 0%, transparent 60%), repeating-linear-gradient(95deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-marker text-chalk/60 text-sm md:text-base tracking-widest mb-3 uppercase">
          ♫ sad piano plays ♫
        </p>
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-chalk mb-6 leading-none">
          adopt a fumbler.
        </h2>
        <p className="font-body text-lg md:text-2xl text-chalk/80 max-w-2xl mx-auto leading-relaxed mb-10">
          right now, two grown men are sitting in a basement in a city you've never been to,
          staring at a roulette wheel.
          <br />
          <br />
          <span className="text-bug">they have no skills. they have no plan.</span>
          <br />
          for just{' '}
          <span className="font-display text-3xl text-bug">0.1 SOL</span>{' '}
          a day, you can keep brett and kevin in chips, energy drinks, and the dignity of pretending
          to have a job.
        </p>

        {/* split: two sad portraits */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <SadCard
            name="brett"
            quote="without your support, brett may be forced to update his linkedin."
          />
          <SadCard
            name="kevin"
            quote="without your support, kevin will have to call his mom back."
          />
        </div>

        <a
          href="#scoop"
          className="inline-block bg-espn border-4 border-chalk font-display text-2xl md:text-3xl text-chalk px-8 py-4 uppercase tracking-wider bevel hover:scale-[1.02] active:translate-y-1 transition"
        >
          🥹 yes, i will sponsor a fumbler
        </a>
        <p className="mt-4 text-chalk/50 text-xs font-body">
          (this is a joke. you are buying a memecoin. there is no sponsorship. brett and kevin will spend it on roulette.)
        </p>
      </div>
    </section>
  )
}

function SadCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="bg-[#0c0c0c] border-2 border-chalk/20 p-5 text-left">
      <div className="bg-[#222] h-44 mb-4 flex items-center justify-center relative">
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <rect width="200" height="160" fill="#1c1c1c" />
          {/* dim window with rain */}
          <rect x="20" y="20" width="60" height="50" fill="#2a3440" stroke="#444" strokeWidth="1" />
          <line x1="50" y1="20" x2="50" y2="70" stroke="#444" strokeWidth="1" />
          <line x1="20" y1="45" x2="80" y2="45" stroke="#444" strokeWidth="1" />
          {/* rain */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={25 + i * 7}
              y1="22"
              x2={22 + i * 7}
              y2="35"
              stroke="#7ec8e3"
              strokeWidth="0.6"
              opacity="0.6"
            />
          ))}
          {/* slumped figure */}
          <ellipse cx="130" cy="105" rx="32" ry="35" fill="#3a3a3a" />
          {/* head */}
          <circle cx="130" cy="78" r="18" fill="#d8b89a" stroke="#000" strokeWidth="1.5" />
          {/* sad eyes */}
          <line x1="124" y1="78" x2="120" y2="82" stroke="#000" strokeWidth="1.5" />
          <line x1="136" y1="78" x2="140" y2="82" stroke="#000" strokeWidth="1.5" />
          <path d="M122 86 Q130 82 138 86" stroke="#000" strokeWidth="1.5" fill="none" />
          {/* a single tear */}
          <path d="M138 84 Q140 90 138 94 Q136 90 138 84 Z" fill="#7ec8e3" />
        </svg>
        <div className="absolute bottom-2 left-2 font-marker text-bug text-lg lowercase">{name}, age unknown</div>
      </div>
      <p className="font-body text-sm text-chalk/80 italic">"{quote}"</p>
    </div>
  )
}
