import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import CharactersSection from '../components/CharactersSection'
import MediaSection from '../components/MediaSection'

const HomePage = () => {
  return (
    <main className="pt-16">
      <Hero />
      <NewsSection />
      <CharactersSection />
      <MediaSection />
    </main>
  )
}

export default HomePage