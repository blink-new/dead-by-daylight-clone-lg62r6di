import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Space Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
          alt="Cosmic Fear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Animated stars overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
          <span className="text-blue-400 cosmic-glow">COSMIC</span>
          <span className="text-purple-400 cosmic-glow block mt-2">FEAR</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explorez l'immensité terrifiante de l'espace où les lois de la physique 
          se brisent et où des entités cosmiques antiques rôdent dans l'ombre des étoiles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold glow-cosmic"
          >
            COMMENCER L'EXPLORATION
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold"
          >
            <Play className="mr-2 h-5 w-5" />
            VOIR LA BANDE-ANNONCE
          </Button>
        </div>

        {/* Cosmic Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">∞</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Galaxies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">13</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Entités Anciennes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">42</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Planètes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400">7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Dimensions</div>
          </div>
        </div>
      </div>

      {/* Cosmic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-blue-400/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce glow-cosmic"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero