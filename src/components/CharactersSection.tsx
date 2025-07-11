
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const CharactersSection = () => {


  const killers = [
    {
      name: "The Trapper",
      title: "Evan MacMillan",
      description: "Un tueur brutal qui place des pièges mortels pour capturer ses victimes.",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&h=400&fit=crop&crop=center",
      power: "Pièges à mâchoires"
    },
    {
      name: "The Nurse",
      title: "Sally Smithson",
      description: "Une infirmière démente capable de traverser les murs et obstacles.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop&crop=center",
      power: "Clignement de Spencer"
    },
    {
      name: "The Shape",
      title: "Michael Myers",
      description: "Le mal incarné, traque silencieusement ses proies dans l'ombre.",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=300&h=400&fit=crop&crop=center",
      power: "Mal intérieur"
    }
  ]

  const survivors = [
    {
      name: "Meg Thomas",
      title: "Athlète déterminée",
      description: "Une coureuse rapide et déterminée qui ne recule devant rien.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=center",
      perks: ["Sprint Burst", "Quick & Quiet", "Adrenaline"]
    },
    {
      name: "Dwight Fairfield",
      title: "Leader nerveux",
      description: "Un leader naturel qui excelle dans le travail d'équipe.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center",
      perks: ["Bond", "Prove Thyself", "Leader"]
    },
    {
      name: "Claudette Morel",
      title: "Botaniste studieuse",
      description: "Une guérisseuse experte qui connaît les propriétés des plantes.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=center",
      perks: ["Empathy", "Botany Knowledge", "Self-Care"]
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">PERSONNAGES</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choisissez votre rôle: incarnez un tueur impitoyable ou un survivant déterminé
          </p>
        </div>

        <Tabs defaultValue="killers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800">
            <TabsTrigger value="killers" className="text-red-400 data-[state=active]:bg-red-600 data-[state=active]:text-white">
              TUEURS
            </TabsTrigger>
            <TabsTrigger value="survivors" className="text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              SURVIVANTS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="killers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {killers.map((killer) => (
                <Card 
                  key={killer.name} 
                  className="bg-gray-800 border-red-900 hover:border-red-500 transition-all duration-300 group cursor-pointer overflow-hidden"

                >
                  <div className="relative overflow-hidden">
                    <img
                      src={killer.image}
                      alt={killer.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{killer.name}</h3>
                      <p className="text-red-400 text-sm font-medium">{killer.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-400 mb-4">{killer.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-semibold">Pouvoir: {killer.power}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="survivors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {survivors.map((survivor) => (
                <Card 
                  key={survivor.name} 
                  className="bg-gray-800 border-blue-900 hover:border-blue-500 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={survivor.image}
                      alt={survivor.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{survivor.name}</h3>
                      <p className="text-blue-400 text-sm font-medium">{survivor.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-400 mb-4">{survivor.description}</p>
                    <div>
                      <span className="text-blue-400 font-semibold mb-2 block">Atouts:</span>
                      <div className="flex flex-wrap gap-2">
                        {survivor.perks.map((perk) => (
                          <span key={perk} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">
                            {perk}
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
          >
            VOIR TOUS LES PERSONNAGES
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CharactersSection