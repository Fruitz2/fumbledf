export default function Playbook() {
  return (
    <section id="playbook" className="chalkboard text-chalk py-20 px-4 relative">
      {/* wood frame look */}
      <div className="absolute inset-0 border-[12px] border-[#5a3a1c] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-3">
          <span className="font-marker text-bug text-3xl">coach sez:</span>
        </div>
        <h2 className="font-marker text-5xl md:text-7xl text-chalk text-center mb-2 leading-tight">
          THE PLAYBOOK
        </h2>
        <p className="font-marker text-lg md:text-2xl text-chalk/70 text-center mb-12">
          (this replaces our tokenomics, our roadmap, and our whitepaper)
        </p>

        {/* the play diagram */}
        <div className="relative bg-[#0e1c17] border-2 border-chalk/30 p-6 md:p-10 mx-auto max-w-3xl mb-10 marker-box">
          <svg viewBox="0 0 600 320" className="w-full h-auto">
            {/* line of scrimmage */}
            <line x1="0" y1="160" x2="600" y2="160" stroke="#f5f1e3" strokeWidth="2" strokeDasharray="6 4" />
            <text x="10" y="155" fontFamily="Permanent Marker" fontSize="14" fill="#f5f1e3">
              line of scrimmage
            </text>

            {/* O's = devs (offense) */}
            <g fontFamily="Permanent Marker" fontSize="36" fill="#ffd400">
              <circle cx="200" cy="200" r="22" stroke="#ffd400" strokeWidth="3" fill="none" />
              <text x="200" y="212" textAnchor="middle" fill="#ffd400">O</text>
              <text x="200" y="252" textAnchor="middle" fontSize="14" fill="#ffd400">brett</text>

              <circle cx="280" cy="220" r="22" stroke="#ffd400" strokeWidth="3" fill="none" />
              <text x="280" y="232" textAnchor="middle" fill="#ffd400">O</text>
              <text x="280" y="272" textAnchor="middle" fontSize="14" fill="#ffd400">kevin</text>
            </g>

            {/* X's = the house (defense) */}
            <g fontFamily="Permanent Marker" fontSize="32" fill="#cc0000">
              <text x="180" y="120" textAnchor="middle">X</text>
              <text x="240" y="100" textAnchor="middle">X</text>
              <text x="300" y="120" textAnchor="middle">X</text>
              <text x="360" y="100" textAnchor="middle">X</text>
              <text x="420" y="120" textAnchor="middle">X</text>
              <text x="300" y="60" textAnchor="middle" fontSize="16">the house</text>
            </g>

            {/* fumble — the football */}
            <ellipse cx="240" cy="180" rx="14" ry="8" fill="#7a3a1c" stroke="#000" strokeWidth="1.5" />
            <text x="240" y="155" textAnchor="middle" fontFamily="Permanent Marker" fontSize="14" fill="#ff8c8c">
              ↓ rock ↓
            </text>

            {/* arrow: dev → fumble */}
            <path d="M210 195 Q230 188 235 182" stroke="#ffd400" strokeWidth="3" fill="none" markerEnd="url(#arrowYellow)" strokeDasharray="5 4" />

            {/* arrow: fumble → holder */}
            <path d="M250 180 Q380 240 500 280" stroke="#7ec8e3" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)" />
            <text x="380" y="220" fontFamily="Permanent Marker" fontSize="18" fill="#7ec8e3">
              YOU SCOOP IT →
            </text>

            {/* endzone */}
            <rect x="500" y="240" width="100" height="80" stroke="#ffd400" strokeWidth="3" fill="none" strokeDasharray="6 3" />
            <text x="550" y="288" textAnchor="middle" fontFamily="Permanent Marker" fontSize="22" fill="#ffd400">
              END
            </text>
            <text x="550" y="308" textAnchor="middle" fontFamily="Permanent Marker" fontSize="22" fill="#ffd400">
              ZONE
            </text>

            {/* arrow markers */}
            <defs>
              <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#ffd400" />
              </marker>
              <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#7ec8e3" />
              </marker>
            </defs>
          </svg>

          <p className="font-marker text-center text-bug text-2xl mt-4">
            "we mess it up. you take it home."
          </p>
        </div>

        {/* play call cards */}
        <div className="grid md:grid-cols-3 gap-6 font-marker text-xl">
          <PlayCard
            title="1ST DOWN"
            body="holders donate. we are contractually obligated to lose it on stream."
          />
          <PlayCard
            title="2ND DOWN"
            body="we promise to lose every cent. we mean it. probably."
          />
          <PlayCard
            title="3RD DOWN"
            body="if we accidentally win — we panic, double everything, lose it again."
          />
        </div>

        <div className="mt-8 text-center font-marker text-3xl md:text-4xl text-bug">
          4TH DOWN: <span className="text-espn">HAIL MARY 🙏</span>
        </div>
      </div>
    </section>
  )
}

function PlayCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#0a1612] border-2 border-dashed border-bug/60 p-5 marker-box">
      <div className="font-display text-bug text-2xl uppercase mb-2 tracking-wider">{title}</div>
      <p className="text-chalk leading-snug">{body}</p>
    </div>
  )
}
