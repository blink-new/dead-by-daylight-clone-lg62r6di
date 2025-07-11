import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center"
          alt="Dead by Daylight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          DEAD BY 
          <span className="text-red-500 block">DAYLIGHT</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Un jeu d'horreur multijoueur asymétrique où un joueur incarne un tueur impitoyable 
          et quatre autres tentent de survivre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
          >
            JOUER GRATUITEMENT
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
          >
            <Play className="mr-2 h-5 w-5" />
            REGARDER LA BANDE-ANNONCE
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">50M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Joueurs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">30+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Tueurs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">35+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Survivants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">40+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Cartes</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero