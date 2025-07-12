import { Button } from './ui/button'
import { Twitter, Youtube, Twitch, Instagram, ExternalLink, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-red-500/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-red-400">COSMIC</span>
              <span className="text-orange-400 ml-2">FEAR</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Cosmic Fear est un jeu d'horreur spatial en accès anticipé où vous devez survivre 
              aux terreurs cosmiques dans l'immensité de l'espace profond. Votre santé mentale 
              est votre seule protection contre l'inconnu.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <ExternalLink className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <Twitch className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-gray-800/50">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-red-400">JEU</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Acheter sur Steam</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Configuration requise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Notes de version</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Roadmap développement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Guide de survie</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-orange-400">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Signaler un bug</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Communauté Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Forums officiels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact développeurs</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-red-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2 text-red-400">TRANSMISSIONS COSMIQUES</h3>
              <p className="text-gray-400">Recevez les dernières mises à jour et terreurs directement dans votre boîte de réception</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-900/50 border border-red-500/30 rounded-l-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-500"
              />
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-l-none">
                S'ABONNER
              </Button>
            </div>
          </div>
        </div>

        {/* Early Access Notice */}
        <div className="border-t border-red-500/20 mt-8 pt-8">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-500/30">
            <div className="flex items-center justify-between flex-col md:flex-row">
              <div className="mb-4 md:mb-0">
                <h4 className="text-red-400 font-bold mb-2">⚠️ ACCÈS ANTICIPÉ</h4>
                <p className="text-gray-300 text-sm">
                  Cosmic Fear est actuellement en développement actif. Le contenu et les fonctionnalités 
                  peuvent changer avant la sortie finale.
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">v0.8.2</div>
                <div className="text-gray-400 text-xs">VERSION ACTUELLE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Cosmic Fear Studios. Tous droits réservés. Les terreurs cosmiques ne sont pas garanties.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Conditions d'utilisation</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer