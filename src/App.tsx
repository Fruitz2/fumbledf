import ScoreBug from './components/ScoreBug'
import TickerTape from './components/TickerTape'
import Hero from './components/Hero'
import DevsSection from './components/DevsSection'
import FumbleMeter from './components/FumbleMeter'
import Playbook from './components/Playbook'
import StreamEmbed from './components/StreamEmbed'
import AdoptAFumbler from './components/AdoptAFumbler'
import ScoopSteps from './components/ScoopSteps'
import Footer from './components/Footer'
import StadiumAudio from './components/StadiumAudio'
import FootballCursor from './components/FootballCursor'

export default function App() {
  return (
    <div className="grain min-h-screen">
      <ScoreBug />

      <main>
        <Hero />
        <DevsSection />
        <FumbleMeter />
        <Playbook />
        <StreamEmbed />
        <AdoptAFumbler />
        <ScoopSteps />
        <Footer />
      </main>

      <TickerTape />
      <StadiumAudio />
      <FootballCursor />
    </div>
  )
}
