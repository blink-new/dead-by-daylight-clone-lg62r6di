import { Button } from './ui/button'
import { Play, Volume2, Image, Download } from 'lucide-react'

const MediaSection = () => {
  const videos = [
    {
      id: 1,
      title: "Bande-annonce Officielle - Cosmic Fear",
      thumbnail: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=225&fit=crop&crop=center",
      duration: "2:31",
      featured: true
    },
    {
      id: 2,
      title: "Gameplay - Survie dans l'Espace Profond",
      thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=225&fit=crop&crop=center",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Développeurs - Créer l'Horreur Cosmique",
      thumbnail: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=225&fit=crop&crop=center",
      duration: "12:18"
    },
    {
      id: 4,
      title: "Early Access - Premières Terreurs",
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=225&fit=crop&crop=center",
      duration: "6:22"
    }
  ]

  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&crop=center",
      title: "Station Spatiale Abandonnée"
    },
    {
      url: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?w=600&h=400&fit=crop&crop=center", 
      title: "Entité Cosmique"
    },
    {
      url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=400&fit=crop&crop=center",
      title: "Technologie Alien"
    },
    {
      url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&h=400&fit=crop&crop=center",
      title: "Nébuleuse Hostile"
    },
    {
      url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&crop=center",
      title: "Vaisseaux Corrompus"
    },
    {
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop&crop=center",
      title: "L'Abîme Stellaire"
    }
  ]

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="nebula"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-red-400">ARCHIVES</span>
            <span className="text-orange-400 block mt-2">MULTIMÉDIAS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plongez dans l'univers terrifiant de Cosmic Fear à travers nos vidéos 
            exclusives et captures d'écran du développement en accès anticipé.
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Volume2 className="h-6 w-6 text-red-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">TRANSMISSIONS VIDÉO</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Video */}
            <div className="lg:row-span-2">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-black/60 backdrop-blur-sm border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 glow-cosmic">
                      <Play className="h-12 w-12 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm font-semibold">
                    {videos[0].duration}
                  </div>
                  <div className="absolute bottom-4 left-4 right-16">
                    <h4 className="text-white font-bold text-lg">
                      {videos[0].title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Videos */}
            <div className="space-y-6">
              {videos.slice(1).map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="flex bg-black/40 backdrop-blur-sm border border-red-500/30 hover:border-red-500/50 transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="relative w-1/3 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-4 w-4 text-white fill-current" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                      <h4 className="text-white font-semibold group-hover:text-red-400 transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Image className="h-6 w-6 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">CAPTURES D'ÉCRAN</h3>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              <Download className="h-4 w-4 mr-2" />
              PACK MÉDIAS
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold">{screenshot.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-red-400">KIT PRESSE</span> & MÉDIAS
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Accédez à tous nos assets, logos, captures haute résolution et vidéos 
              pour couvrir Cosmic Fear dans vos contenus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Download className="h-4 w-4 mr-2" />
                TÉLÉCHARGER LE KIT PRESSE
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
                DEMANDE ACCÈS MÉDIA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaSection