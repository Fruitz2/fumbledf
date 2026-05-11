export default function ScoopSteps() {
  const steps = [
    {
      n: '01',
      title: 'Get a Solana wallet',
      body: 'Phantom, Solflare, Backpack — pick one. Fund it with some SOL.',
    },
    {
      n: '02',
      title: 'Open pump.fun',
      body: 'Connect your wallet. Find $FUMBLED. Use the contract address up top to be sure.',
    },
    {
      n: '03',
      title: 'Hit BUY',
      body: "Pick how much SOL you can afford to never see again. Confirm in your wallet.",
    },
    {
      n: '04',
      title: 'Watch us fumble it live',
      body: 'Tune into the stream. Heckle in chat. Tell us to stop. We will not.',
    },
  ]

  return (
    <section id="scoop" className="bg-bug text-ref py-20 px-4 relative">
      {/* striped border like a referee shirt */}
      <div
        className="absolute top-0 inset-x-0 h-3"
        style={{
          background:
            'repeating-linear-gradient(90deg, #0a0a0a 0 16px, #f5f1e3 16px 32px)',
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-3"
        style={{
          background:
            'repeating-linear-gradient(90deg, #0a0a0a 0 16px, #f5f1e3 16px 32px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-marker text-espn text-2xl">step by step</span>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-ref leading-none mt-2">
            how to scoop the rock
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-chalk border-4 border-ref p-6 marker-box flex gap-5 items-start"
            >
              <div className="font-display text-7xl text-espn leading-none">{s.n}</div>
              <div>
                <div className="font-display text-2xl uppercase mb-2">{s.title}</div>
                <p className="font-body text-base leading-snug">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* big buy button */}
        <div className="mt-12 text-center">
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-espn border-4 border-ref font-display text-3xl md:text-5xl text-chalk px-10 py-5 uppercase tracking-wider bevel-deep hover:scale-[1.02] active:translate-y-1 transition"
          >
            🏈 Take the field on pump.fun
          </a>
          <p className="mt-4 font-marker text-ref text-xl">
            (replace this link with your actual pump.fun coin url before launch)
          </p>
        </div>
      </div>
    </section>
  )
}
