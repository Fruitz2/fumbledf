import { useEffect, useState } from 'react'

export default function ScoreBug() {
  const [houseScore, setHouseScore] = useState(1247)
  const [clock] = useState('4:20')
  const [quarter] = useState('Q4')

  useEffect(() => {
    // house score climbs slowly because the house always wins
    const id = setInterval(() => {
      if (Math.random() > 0.6) setHouseScore((s) => s + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="scorebug sticky top-0 z-40 w-full font-display text-[15px] sm:text-[17px] tracking-wide">
      <div className="flex items-stretch h-12 sm:h-14 text-chalk select-none">
        {/* network-bug logo block */}
        <div className="hidden sm:flex items-center justify-center bg-espn px-3 border-r-2 border-bug">
          <span className="text-bug font-display text-xl tracking-tighter">FBL</span>
        </div>

        {/* fumblers */}
        <div className="flex items-center gap-3 px-4 bg-[#101010] border-r border-[#2a2a2a] flex-1 sm:flex-none">
          <div className="h-3 w-3 rounded-sm bg-rust" />
          <span className="uppercase">Fumblers</span>
          <span className="ml-auto sm:ml-3 text-bug text-2xl">0</span>
        </div>

        {/* vs / clock */}
        <div className="flex items-center gap-2 px-4 bg-[#0a0a0a] border-r border-[#2a2a2a]">
          <span className="text-espn text-xs">●</span>
          <span className="text-bug">{quarter}</span>
          <span className="text-chalk/60">{clock}</span>
          <span className="hidden sm:inline text-[10px] text-chalk/40 ml-2">[STUCK]</span>
        </div>

        {/* house */}
        <div className="flex items-center gap-3 px-4 bg-[#101010] flex-1 sm:flex-none">
          <div className="h-3 w-3 rounded-sm bg-bug" />
          <span className="uppercase">The House</span>
          <span className="ml-auto sm:ml-3 text-bug text-2xl">{houseScore.toLocaleString()}</span>
        </div>

        {/* possession arrow */}
        <div className="hidden md:flex items-center px-3 bg-[#0a0a0a] border-l border-[#2a2a2a]">
          <span className="text-chalk/50 text-[11px] mr-2">POSS</span>
          <span className="text-bug">→</span>
          <span className="text-chalk ml-1">HOUSE</span>
        </div>

        {/* live dot */}
        <div className="flex items-center px-3 bg-espn border-l-2 border-bug">
          <span className="animate-flash text-chalk text-[11px] tracking-widest">● LIVE</span>
        </div>
      </div>
    </div>
  )
}
