export default function StreamEmbed() {
  return (
    <section className="bg-turfdark astroturf py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="font-marker text-bug text-2xl">live from the basement</span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-chalk leading-none mt-1">
              the broadcast booth
            </h2>
          </div>
          <span className="bg-espn text-chalk font-display text-xs sm:text-sm tracking-widest px-3 py-2 animate-flash uppercase">
            ● live now
          </span>
        </div>

        {/* TV frame */}
        <div className="bg-[#1a1a1a] p-3 sm:p-4 border-4 border-chalk relative bevel">
          {/* tv channel number */}
          <div className="absolute -top-3 left-3 bg-bug text-ref font-display text-xs px-2 py-0.5 uppercase tracking-widest">
            ch · 069
          </div>
          <div className="absolute -top-3 right-3 bg-espn text-chalk font-display text-xs px-2 py-0.5 uppercase tracking-widest">
            ● rec
          </div>

          {/* iframe slot — replace src with your pump.fun coin url */}
          <div className="aspect-video bg-ref relative scanlines overflow-hidden border-2 border-bug/50">
            <iframe
              title="fumbled live stream"
              src="about:blank"
              className="w-full h-full"
            />
            {/* fallback overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <div className="font-display text-bug text-3xl md:text-5xl uppercase mb-2 broadcast-outline-yellow">
                stream goes here
              </div>
              <p className="font-body text-chalk/80 max-w-md px-4">
                replace the iframe src with your pump.fun coin url:
                <br />
                <code className="text-bug">https://pump.fun/coin/&lt;your-ca&gt;</code>
              </p>
            </div>
            {/* corner network bug overlay */}
            <div className="absolute top-3 left-3 bg-ref/80 backdrop-blur px-2 py-1 font-display text-bug text-xs tracking-widest border border-bug/40">
              FBL
            </div>
            <div className="absolute bottom-3 left-3 bg-espn text-chalk font-display text-xs px-2 py-1 tracking-widest">
              ● BRETT IS TILTING
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-marker text-bug text-2xl">
          watch the rock get dropped in real time.
        </p>
      </div>
    </section>
  )
}
