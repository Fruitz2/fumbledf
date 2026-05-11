const STATS = [
  'BRETT HAS NOT WON A HAND OF BLACKJACK SINCE TUESDAY',
  "KEVIN'S MOM STILL BELIEVES HE'S AN ACCOUNTANT",
  'TOTAL HOLDER MONEY FUMBLED THIS WEEK: $48,221',
  'LONGEST DRY STREAK: 47 SPINS',
  'BIGGEST L OF THE WEEK: 32 ON RED, IT WAS BLACK',
  'CONSECUTIVE HOURS WITHOUT SLEEP: 19',
  'MOM HAS CALLED 4 TIMES, ALL DURING STREAM',
  'HAIL MARY ATTEMPTS THIS MONTH: 14 — HITS: 0',
  'BRETT HAS APOLOGIZED 41 TIMES TODAY',
  'KEVIN ATE A FROZEN BURRITO RAW ON STREAM',
  'NEXT STREAM WHENEVER WE FIND THE LAPTOP CHARGER',
  'COFFEE CONSUMED: 11 CUPS — VEGETABLES: 0',
  'CHAT ASKED FOR ROADMAP, WE POSTED A PHOTO OF A ROAD',
]

export default function TickerTape() {
  // duplicate the array so the marquee can loop seamlessly
  const items = [...STATS, ...STATS]

  return (
    <div className="ticker-tape fixed bottom-0 left-0 right-0 z-40 overflow-hidden h-9 flex items-center font-ticker text-bug text-xl">
      <div className="flex items-center gap-10 whitespace-nowrap pl-4 animate-ticker">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-espn">●</span>
            <span>{s}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
