export default function Footer() {
  return (
    <footer className="bg-ref text-chalk border-t-4 border-bug pt-12 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-display text-6xl md:text-8xl text-bug leading-none broadcast-outline">
              $FUMBLED
            </div>
            <div className="font-marker text-espn text-xl md:text-2xl mt-2">scoop the rock.</div>
          </div>
          <div className="flex gap-3 font-display text-sm uppercase tracking-widest">
            <a className="bg-bug text-ref border-2 border-chalk px-3 py-2 hover:scale-[1.04] transition" href="#">
              X / twitter
            </a>
            <a className="bg-espn text-chalk border-2 border-chalk px-3 py-2 hover:scale-[1.04] transition" href="#">
              telegram
            </a>
            <a className="bg-chalk text-ref border-2 border-chalk px-3 py-2 hover:scale-[1.04] transition" href="#">
              pump.fun
            </a>
          </div>
        </div>

        <div className="bg-bug text-ref border-4 border-chalk p-5 font-body text-sm md:text-base">
          <div className="font-display text-2xl uppercase mb-2">Disclaimer</div>
          <p className="leading-snug">
            $FUMBLED is a memecoin. it has no utility. it will not pay your rent. it will not
            cure your back pain. brett and kevin are not financial advisors, certified gamblers,
            or accountants of any kind. the only thing they are certified in is{' '}
            <span className="font-display">losing</span>. by purchasing $FUMBLED you acknowledge that
            you are buying a ticket to watch two morons mishandle money in real time. there is a non-zero
            but extremely small chance they accidentally win. do not count on it. do not invest more
            than you can afford to never see again. there is no roadmap. there will not be a roadmap.
            we hope you have a good day.
          </p>
        </div>

        <div className="mt-10 text-center font-marker text-chalk/50 text-base">
          © {new Date().getFullYear()} fumblers united · made with butter hands
        </div>
      </div>
    </footer>
  )
}
