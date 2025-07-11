import { Button } from './ui/button'
import { Facebook, Twitter, Youtube, Twitch, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <img
              className="h-12 w-auto mb-6"
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=60&fit=crop&crop=center"
              alt="Dead by Daylight"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Dead by Daylight est un jeu d'horreur multijoueur asymétrique développé par Behaviour Interactive. 
              Incarnez un tueur ou un survivant dans cette expérience terrifiante.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitch className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">JEU</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Télécharger</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Configuration requise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">DLC et Chapitres</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Passe Rift</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Boutique</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Signaler un bug</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Forum communautaire</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Statut des serveurs</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">RESTEZ INFORMÉ</h3>
              <p className="text-gray-400">Recevez les dernières nouvelles et mises à jour directement dans votre boîte e-mail</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white"
              />
              <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">
                S'ABONNER
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Behaviour Interactive Inc. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer