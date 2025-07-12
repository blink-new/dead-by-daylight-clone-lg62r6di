import { Button } from './ui/button'
import { Facebook, Twitter, Youtube, Twitch, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-blue-400">COSMIC</span>
              <span className="text-purple-400 ml-2">FEAR</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Cosmic Fear est un jeu d'exploration spatiale et d'horreur cosmique où vous découvrez 
              les mystères terrifiants de l'univers infini et affrontez des entités venues d'ailleurs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Twitch className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">EXPLORATION</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Télécharger</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Configuration requise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Expansions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Passe Galactique</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Boutique Cosmique</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">STATION DE CONTRÔLE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Signaler une anomalie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Communauté spatiale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Mission Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Statut des serveurs</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">TRANSMISSIONS SPATIALES</h3>
              <p className="text-gray-400">Recevez les dernières découvertes cosmiques directement dans votre console</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre fréquence de communication"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-l-none">
                SYNCHRONISER
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Cosmic Fear Studios. Tous droits réservés dans cette dimension.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Politique dimensionnelle</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termes galactiques</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accords cosmiques</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer