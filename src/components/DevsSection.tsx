export default function DevsSection() {
  return (
    <section className="relative bg-chalk text-ref py-20 px-4 border-y-8 border-ref">
      <div className="max-w-5xl mx-auto">
        {/* "MEET THE STARTING LINEUP" header bar */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-1 flex-1 bg-ref" />
          <h2 className="font-display text-3xl md:text-5xl tracking-tight uppercase">
            Meet the Starting Lineup
          </h2>
          <div className="h-1 flex-1 bg-ref" />
        </div>

        <p className="font-marker text-2xl md:text-3xl text-espn text-center mb-12">
          (we are the lineup. there's two of us. nobody else came.)
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Brett card */}
          <DevCard
            name="BRETT"
            number="00"
            position="QB / Lead Fumbler"
            stats={[
              ['HEIGHT', '5\' 10"'],
              ['WEIGHT', 'tilt-pilled'],
              ['HANDS', 'butter'],
              ['MARRIED', 'unfortunately'],
            ]}
            scouting='"He had it. He just dropped it. He keeps dropping it."'
          />
          <DevCard
            name="KEVIN"
            number="69"
            position="RB / Backup Fumbler"
            stats={[
              ['HEIGHT', '6\' 1"'],
              ['WEIGHT', 'mostly cope'],
              ['HANDS', 'soup'],
              ['JOB', 'allegedly'],
            ]}
            scouting='"What if he just held onto the ball — never mind."'
          />
        </div>

        {/* manifesto strip */}
        <div className="mt-16 bg-ref text-chalk p-8 md:p-10 border-4 border-ref relative">
          <span className="absolute -top-4 left-6 bg-bug text-ref font-display px-3 py-1 uppercase tracking-wider text-sm">
            press release
          </span>
          <div className="font-display text-2xl md:text-4xl uppercase leading-tight space-y-3">
            <p>we had it.</p>
            <p>we fumbled it.</p>
            <p>we'll fumble yours too.</p>
            <p className="text-bug">scoop it before someone else does.</p>
          </div>
          <div className="mt-6 font-body text-chalk/80 text-sm md:text-base max-w-3xl leading-relaxed">
            no roadmap. no team. no audit. no presale. no advisor named David. no medium article.
            no x spaces with a guy named "based aristotle." just two morons, a roulette account, and the hope
            that statistics eventually break in our favor. they will not.
            <br />
            <br />
            <span className="text-bug">probably.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DevCard({
  name,
  number,
  position,
  stats,
  scouting,
}: {
  name: string
  number: string
  position: string
  stats: [string, string][]
  scouting: string
}) {
  return (
    <div className="relative bg-beige border-4 border-ref p-6 marker-box">
      {/* "trading card" header strip */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-display text-5xl text-ref leading-none">{name}</div>
          <div className="font-body text-sm text-ref/70 uppercase mt-1">{position}</div>
        </div>
        <div className="font-display text-7xl text-espn leading-none">#{number}</div>
      </div>

      {/* mugshot box */}
      <div className="bg-ref h-44 mb-4 relative overflow-hidden border-2 border-ref">
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* simple geometric mugshot: oval head, tiny eyes, frown */}
          <rect width="200" height="160" fill="#1a1a1a" />
          {/* height markers like a police lineup */}
          {[20, 50, 80, 110, 140].map((y) => (
            <g key={y}>
              <line x1="0" y1={y} x2="20" y2={y} stroke="#ffd400" strokeWidth="1" />
              <text x="22" y={y + 3} fontFamily="VT323" fontSize="10" fill="#ffd400">
                {6 - y / 30 | 0}'
              </text>
            </g>
          ))}
          {/* head */}
          <ellipse cx="115" cy="80" rx="42" ry="50" fill="#e8c8a0" stroke="#000" strokeWidth="2" />
          {/* hair */}
          <path d="M75 60 Q115 20 155 60 L150 75 Q115 50 80 75 Z" fill="#3a2a1a" />
          {/* eyes — dead */}
          <circle cx="100" cy="80" r="2" fill="#000" />
          <circle cx="130" cy="80" r="2" fill="#000" />
          {/* dark circles under eyes */}
          <path d="M93 87 Q100 92 107 87" stroke="#5a3a3a" strokeWidth="2" fill="none" />
          <path d="M123 87 Q130 92 137 87" stroke="#5a3a3a" strokeWidth="2" fill="none" />
          {/* frown */}
          <path d="M100 110 Q115 102 130 110" stroke="#000" strokeWidth="2" fill="none" />
          {/* bead of sweat */}
          <path d="M148 70 Q151 76 148 80 Q145 76 148 70 Z" fill="#7ec8e3" stroke="#000" strokeWidth="0.5" />
          {/* booking number plate */}
          <rect x="80" y="135" width="80" height="20" fill="#fff" stroke="#000" strokeWidth="1" />
          <text x="120" y="150" textAnchor="middle" fontFamily="VT323" fontSize="14" fill="#000">
            #{number}
          </text>
        </svg>

        <div className="absolute top-2 right-2 bg-espn text-chalk text-[10px] font-display uppercase tracking-wider px-2 py-0.5">
          probable
        </div>
      </div>

      {/* stats grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-ticker text-lg mb-4">
        {stats.map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-dashed border-ref/40">
            <span className="text-ref/60 uppercase text-[11px] font-display tracking-wider">{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>

      {/* scouting report */}
      <div className="font-marker text-base text-espn leading-snug border-t-2 border-dashed border-ref pt-3">
        scouting report:
        <span className="text-ref ml-2">{scouting}</span>
      </div>
    </div>
  )
}
