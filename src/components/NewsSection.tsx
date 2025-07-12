import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      title: "Mise à jour 0.8 : Nouvelles Terreurs Cosmiques",
      excerpt: "La dernière mise à jour introduit de nouveaux ennemis terrifiants et améliore l'expérience d'horreur spatiale.",
      date: "15 Janvier 2025",
      category: "Mise à jour",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop&crop=center",
      featured: true
    },
    {
      title: "Événement Communautaire : Nuit des Étoiles Mortes",
      excerpt: "Participez à notre événement spécial Halloween avec des récompenses exclusives et des défis terrifiants.",
      date: "31 Octobre 2024",
      category: "Événement",
      image: "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Roadmap 2025 : L'Avenir de Cosmic Fear",
      excerpt: "Découvrez nos plans pour l'année à venir incluant de nouvelles zones, mécaniques et le mode multijoueur coopératif.",
      date: "1 Janvier 2025",
      category: "Roadmap",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: "Retours de la Communauté : Vos Moments les Plus Terrifiants",
      excerpt: "La communauté partage ses moments les plus effrayants et mémorables dans l'univers de Cosmic Fear.",
      date: "20 Décembre 2024",
      category: "Communauté",
      image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=400&h=250&fit=crop&crop=center"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mise à jour":
        return "bg-red-600/20 text-red-400 border-red-400/30"
      case "Événement":
        return "bg-orange-600/20 text-orange-400 border-orange-400/30"
      case "Roadmap":
        return "bg-purple-600/20 text-purple-400 border-purple-400/30"
      case "Communauté":
        return "bg-blue-600/20 text-blue-400 border-blue-400/30"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-400/30"
    }
  }

  return (
    <section id="news" className="py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="plasma"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-red-400">DERNIÈRES</span>
            <span className="text-orange-400 block mt-2">ACTUALITÉS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Restez informé des dernières mises à jour, événements et nouvelles 
            de l'univers terrifiant de Cosmic Fear.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <div className="lg:row-span-2">
            <Card className="bg-black/40 border border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 overflow-hidden group h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(news[0].category)}`}>
                  {news[0].category}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                  FEATURED
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors">
                  {news[0].title}
                </CardTitle>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {news[0].date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{news[0].excerpt}</p>
                <div className="flex items-center text-red-400 group-hover:text-orange-400 transition-colors cursor-pointer">
                  <span className="font-semibold">Lire la suite</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regular Articles */}
          <div className="space-y-6">
            {news.slice(1).map((article, index) => (
              <Card 
                key={index} 
                className="bg-black/40 border border-red-500/30 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center text-red-400 group-hover:text-orange-400 transition-colors cursor-pointer text-sm">
                      <span className="font-semibold">Lire la suite</span>
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Restez au Courant des <span className="text-red-400">Terreurs Cosmiques</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, 
              mises à jour et contenus exclusifs directement dans votre boîte de réception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-black/50 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors">
                S'INSCRIRE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection