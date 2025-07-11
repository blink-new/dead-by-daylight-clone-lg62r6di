import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "NOUVEAU CHAPITRE: Outils de Torture",
      description: "Découvrez le nouveau tueur, La Malle, et le survivant Thalita Lyra dans ce chapitre terrifiant.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
      date: "15 Mars 2024",
      category: "CHAPITRE"
    },
    {
      id: 2,
      title: "Mise à jour 7.6.0 maintenant disponible",
      description: "Nouvelles améliorations de gameplay, équilibrage des personnages et corrections de bugs.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop&crop=center",
      date: "12 Mars 2024",
      category: "MISE À JOUR"
    },
    {
      id: 3,
      title: "Événement Tome 16: ÉCLAT",
      description: "Débloquez de nouveaux cosmétiques exclusifs et plongez dans les souvenirs des personnages.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center",
      date: "10 Mars 2024",
      category: "ÉVÉNEMENT"
    }
  ]

  return (
    <section id="news" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">DERNIÈRES NOUVELLES</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Restez informé des dernières mises à jour, nouveaux chapitres et événements spéciaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="bg-gray-900 border-gray-700 hover:border-red-500/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <CardTitle className="text-white group-hover:text-red-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400 mb-4">
                  {article.description}
                </p>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-950/30 p-0">
                  Lire la suite
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
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
          >
            VOIR TOUTES LES NOUVELLES
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection