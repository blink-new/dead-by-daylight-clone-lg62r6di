import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const CharactersSection = () => {
  const entities = [
    {
      name: "Le Dévoreur de Mondes",
      title: "Entité Cosmique Primordiale",
      description: "Une entité ancienne qui consume des galaxies entières, défiant toute compréhension humaine.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop&crop=center",
      power: "Singularité Noire"
    },
    {
      name: "L'Architecte du Vide",
      title: "Maître des Dimensions",
      description: "Capable de plier l'espace-temps et de créer des portails vers des réalités parallèles.",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=300&h=400&fit=crop&crop=center",
      power: "Manipulation Dimensionnelle"
    },
    {
      name: "La Reine des Étoiles",
      title: "Souveraine Galactique",
      description: "Entité stellaire qui contrôle les forces gravitationnelles et magnétiques de l'univers.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop&crop=center",
      power: "Contrôle Stellaire"
    }
  ]

  const explorers = [
    {
      name: "Captain Nova",
      title: "Navigatrice Quantique",
      description: "Pilote experte capable de naviguer à travers les anomalies spatiales les plus dangereuses.",
      image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=300&h=400&fit=crop&crop=center",
      abilities: ["Navigation Quantique", "Bouclier Psychique", "Téléportation"]
    },
    {
      name: "Dr. Void",
      title: "Scientifique du Chaos",
      description: "Chercheur spécialisé dans l'étude des phénomènes cosmiques et des entités inconnues.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=center",
      abilities: ["Analyse Cosmique", "Résistance Mentale", "Technologie Alien"]
    },
    {
      name: "Echo",
      title: "Éclaireur Astral",
      description: "Être hybride humain-alien capable de survivre dans les environnements les plus hostiles.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=center",
      abilities: ["Adaptation Alien", "Camouflage Astral", "Communication Télépathique"]
    }
  ]

  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 cosmic-glow">ENTITÉS & EXPLORATEURS</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choisissez votre destin : incarnez une entité cosmique terrifiante ou un explorateur courageux
          </p>
        </div>

        <Tabs defaultValue="entities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800/50 backdrop-blur-sm">
            <TabsTrigger value="entities" className="text-purple-400 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              ENTITÉS COSMIQUES
            </TabsTrigger>
            <TabsTrigger value="explorers" className="text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              EXPLORATEURS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="entities">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {entities.map((entity) => (
                <Card 
                  key={entity.name} 
                  className="bg-gray-800/80 backdrop-blur-sm border-purple-700/50 hover:border-purple-400 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={entity.image}
                      alt={entity.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{entity.name}</h3>
                      <p className="text-purple-400 text-sm font-medium">{entity.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">{entity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">Pouvoir: {entity.power}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="explorers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {explorers.map((explorer) => (
                <Card 
                  key={explorer.name} 
                  className="bg-gray-800/80 backdrop-blur-sm border-blue-700/50 hover:border-blue-400 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={explorer.image}
                      alt={explorer.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{explorer.name}</h3>
                      <p className="text-blue-400 text-sm font-medium">{explorer.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">{explorer.description}</p>
                    <div>
                      <span className="text-blue-400 font-semibold mb-2 block">Capacités:</span>
                      <div className="flex flex-wrap gap-2">
                        {explorer.abilities.map((ability) => (
                          <span key={ability} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs border border-blue-500/30">
                            {ability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4"
          >
            EXPLORER TOUS LES PERSONNAGES
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CharactersSection