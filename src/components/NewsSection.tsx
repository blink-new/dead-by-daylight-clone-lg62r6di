import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "NOUVELLE EXPANSION: Les Seigneurs du Vide",
      description: "Découvrez de nouvelles entités cosmiques et explorez les profondeurs de l'espace interdimensionnel.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      date: "15 Mars 2024",
      category: "EXPANSION"
    },
    {
      id: 2,
      title: "Mise à jour 2.8.0: Physique Quantique",
      description: "Nouvelles mécaniques de voyage spatial, amélioration des effets cosmiques et optimisations.",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=250&fit=crop&crop=center",
      date: "12 Mars 2024",
      category: "MISE À JOUR"
    },
    {
      id: 3,
      title: "Événement: Convergence Stellaire",
      description: "Assistez à un événement cosmique rare et débloquez des équipements exclusifs d'origine alien.",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=250&fit=crop&crop=center",
      date: "10 Mars 2024",
      category: "ÉVÉNEMENT"
    }
  ]

  return (
    <section id="news" className="py-20 cosmic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 cosmic-glow">TRANSMISSIONS SPATIALES</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recevez les dernières transmissions depuis les confins de l'espace et les découvertes récentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="bg-gray-900/80 backdrop-blur-sm border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {article.description}
                </p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-950/30 p-0">
                  Lire la transmission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            VOIR TOUTES LES TRANSMISSIONS
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection