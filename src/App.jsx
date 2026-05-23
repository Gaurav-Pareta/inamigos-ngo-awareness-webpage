import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Projects from './components/Projects'
import Impact from './components/Impact'
import Campaigns from './components/Campaigns'
import Highlights from './components/Highlights'
import HashtagCloud from './components/HashtagCloud'
import JoinCTA from './components/JoinCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Projects />
        <Impact />
        <Campaigns />
        <Highlights />
        <HashtagCloud />
        <JoinCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
