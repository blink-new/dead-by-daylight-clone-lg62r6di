import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import GameplaySection from '../components/GameplaySection'
import CharactersSection from '../components/CharactersSection'
import MediaSection from '../components/MediaSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main className="pt-16">
      <Hero />
      <GameplaySection />
      <NewsSection />
      <MediaSection />
      <CharactersSection />
      <Footer />
    </main>
  )
}

export default HomePage