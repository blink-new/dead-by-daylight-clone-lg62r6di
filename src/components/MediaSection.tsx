import { Button } from './ui/button'
import { Play, Volume2, Image } from 'lucide-react'

const MediaSection = () => {
  const videos = [
    {
      id: 1,
      title: "Bande-annonce officielle - Chapitre Outils de Torture",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop&crop=center",
      duration: "2:14"
    },
    {
      id: 2,
      title: "Gameplay - The Skull Merchant",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop&crop=center",
      duration: "5:32"
    },
    {
      id: 3,
      title: "Behind the Scenes - Création des personnages",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop&crop=center",
      duration: "8:45"
    }
  ]

  const screenshots = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=300&fit=crop&crop=center"
  ]

  return (
    <section id="media" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MÉDIAS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez les dernières vidéos, captures d'écran et contenus multimédias
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Volume2 className="h-6 w-6 text-red-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">VIDÉOS</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-white font-semibold mt-4 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div>
          <div className="flex items-center mb-8">
            <Image className="h-6 w-6 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">CAPTURES D'ÉCRAN</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            VOIR PLUS DE MÉDIAS
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MediaSection