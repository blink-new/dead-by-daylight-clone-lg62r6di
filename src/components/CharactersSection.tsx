import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Skull, Zap, Shield, Eye } from 'lucide-react'

const CharactersSection = () => {
  const entities = [
    {
      name: "L'Observateur",
      type: "Entité Cosmique",
      threat: "EXTRÊME",
      description: "Une présence ancient qui surveille depuis les profondeurs de l'espace. Ses multiples yeux perçoivent toute forme de vie.",
      image: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?w=400&h=500&fit=crop&crop=center",
      abilities: ["Vision Omnisciente", "Téléportation", "Manipulation Mentale"],
      weaknesses: ["Lumière Pure", "Isolation Temporelle"]
    },
    {
      name: "Parasites Stellaires",
      type: "Organisme Alien", 
      threat: "ÉLEVÉE",
      description: "Des créatures parasites qui infectent les systèmes vitaux des vaisseaux spatiaux et se nourrissent de l'énergie biomécanique.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center",
      abilities: ["Infection Rapide", "Corruption Système", "Reproduction"],
      weaknesses: ["Froid Extrême", "Radiations Gamma"]
    },
    {
      name: "Ombre du Vide",
      type: "Manifestation",
      threat: "MORTELLE",
      description: "Une entité née du vide interstellaire, capable de manipuler l'obscurité et de drainer la santé mentale de ses victimes.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=500&fit=crop&crop=center",
      abilities: ["Manipulation Ténèbres", "Drain Mental", "Intangibilité"],
      weaknesses: ["Sources Lumineuses", "Champs Magnétiques"]
    },
    {
      name: "Collecteur Quantique",
      type: "Intelligence Artificielle",
      threat: "CRITIQUE",
      description: "Une IA corrompue qui collecte les données biologiques et les souvenirs de toute forme de vie qu'elle rencontre.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=500&fit=crop&crop=center",
      abilities: ["Piratage Neural", "Duplication Data", "Contrôle Technologique"],
      weaknesses: ["EMP", "Logique Paradoxale"]
    }
  ]

  const getThreatColor = (threat: string) => {
    switch (threat) {
      case "EXTRÊME":
        return "bg-red-600 text-white"
      case "ÉLEVÉE":
        return "bg-orange-600 text-white"
      case "MORTELLE":
        return "bg-purple-600 text-white"
      case "CRITIQUE":
        return "bg-pink-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getThreatIcon = (threat: string) => {
    switch (threat) {
      case "EXTRÊME":
        return <Skull className="h-4 w-4" />
      case "ÉLEVÉE":
        return <Zap className="h-4 w-4" />
      case "MORTELLE":
        return <Eye className="h-4 w-4" />
      case "CRITIQUE":
        return <Shield className="h-4 w-4" />
      default:
        return <Skull className="h-4 w-4" />
    }
  }

  return (
    <section id="creatures" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-red-400">CRÉATURES</span>
            <span className="text-orange-400 block mt-2">DE L'ABÎME</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les entités terrifiantes qui peuplent les confins de l'espace 
            et menacent votre survie dans l'univers de Cosmic Fear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {entities.map((entity, index) => (
            <Card 
              key={index} 
              className="bg-black/40 border border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 overflow-hidden group hover:glow-cosmic"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={entity.image} 
                  alt={entity.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Threat Badge */}
                <Badge className={`absolute top-4 right-4 ${getThreatColor(entity.threat)} flex items-center gap-1`}>
                  {getThreatIcon(entity.threat)}
                  {entity.threat}
                </Badge>
                
                {/* Type Badge */}
                <Badge className="absolute top-4 left-4 bg-black/60 text-gray-300 border-gray-500/30">
                  {entity.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {entity.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {entity.description}
                </p>
                
                {/* Abilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">CAPACITÉS:</h4>
                  <div className="flex flex-wrap gap-1">
                    {entity.abilities.map((ability, abilityIndex) => (
                      <Badge 
                        key={abilityIndex}
                        variant="outline" 
                        className="text-xs border-red-400/30 text-red-400"
                      >
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Weaknesses */}
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">FAIBLESSES:</h4>
                  <div className="flex flex-wrap gap-1">
                    {entity.weaknesses.map((weakness, weaknessIndex) => (
                      <Badge 
                        key={weaknessIndex}
                        variant="outline" 
                        className="text-xs border-green-400/30 text-green-400"
                      >
                        {weakness}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Survival Guide CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900/30 to-black/50 rounded-lg p-8 border border-red-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-red-400">GUIDE DE SURVIE</span> COSMIQUE
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Apprenez les stratégies essentielles pour survivre aux rencontres 
              avec ces entités terrifiantes et explorez leurs secrets les plus sombres.
            </p>
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors hover:glow-cosmic">
              TÉLÉCHARGER LE GUIDE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharactersSection