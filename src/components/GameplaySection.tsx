import { Card, CardContent } from './ui/card'
import { Skull, Eye, Zap, Users, Clock, Gamepad2 } from 'lucide-react'

const GameplaySection = () => {
  const features = [
    {
      icon: <Skull className="h-8 w-8" />,
      title: "Horreur Spatiale",
      description: "Affrontez des terreurs cosmiques dans l'immensité de l'espace profond"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Survie Intense",
      description: "Chaque décision compte pour votre survie dans cet environnement hostile"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Action Rapide",
      description: "Gameplay dynamique mêlant exploration et moments d'action intense"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multijoueur",
      description: "Survivez ensemble ou affrontez vos peurs en solo"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Accès Anticipé",
      description: "Participez au développement avec des mises à jour régulières"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Mécaniques Uniques",
      description: "Systèmes de jeu innovants pour une expérience immersive"
    }
  ]

  return (
    <section id="gameplay" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="nebula"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-red-400">SURVIVEZ</span>
            <span className="text-orange-400 block mt-2">À L'INCONNU</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cosmic Fear redéfinit l'horreur spatiale avec un gameplay immersif 
            qui vous plonge dans un cauchemar cosmique sans précédent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-black/40 border border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 hover:glow-cosmic group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-red-400 mb-4 flex justify-center group-hover:text-orange-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Early Access Info */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-500/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-red-400">ACCÈS ANTICIPÉ</span> DISPONIBLE MAINTENANT
              </h3>
              <p className="text-gray-300">
                Rejoignez la communauté de joueurs qui façonnent l'avenir de Cosmic Fear. 
                Votre feedback guide notre développement vers la version finale.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                  Mises à jour régulières
                </span>
                <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full">
                  Communauté active
                </span>
                <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full">
                  Contenu en expansion
                </span>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">v0.8</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Version Actuelle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameplaySection