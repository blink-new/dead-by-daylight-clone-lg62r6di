import { Button } from './ui/button'
import { Play, Steam } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Space Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop&crop=center"
          alt="Cosmic Fear - Deep Space Horror"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        
        {/* Animated stars overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        
        {/* Horror atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-4">
          <span className="inline-block bg-red-600/80 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            Accès Anticipé Disponible
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight">
          <span className="text-red-400 cosmic-glow">COSMIC</span>
          <span className="text-orange-400 cosmic-glow block mt-2">FEAR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Survivez aux terreurs de l'espace profond. Un jeu d'horreur spatial immersif 
          où chaque ombre cache une menace cosmique indicible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold glow-cosmic flex items-center gap-2"
          >
            <Steam className="h-5 w-5" />
            JOUER MAINTENANT SUR STEAM
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black px-8 py-4 text-lg font-semibold flex items-center gap-2"
          >
            <Play className="h-5 w-5" />
            BANDE-ANNONCE
          </Button>
        </div>

        {/* Early Access Info */}
        <div className="mb-12 p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-red-500/30">
          <h3 className="text-xl font-bold text-red-400 mb-2">ACCÈS ANTICIPÉ</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Plongez dans l'horreur cosmique dès maintenant. Le jeu est en développement actif 
            avec des mises à jour régulières basées sur les retours de la communauté.
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">∞</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Terreurs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">1</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Survivant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">0</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Espoir</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">???</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Mystères</div>
          </div>
        </div>
      </div>

      {/* Cosmic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-red-400/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-bounce glow-cosmic"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero