import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'NOUVELLES', href: '#news' },
    { name: 'MÉDIAS', href: '#media' },
    { name: 'DÉVELOPPEURS', href: '#developers' },
    { name: 'COMMUNAUTÉ', href: '#community' },
    { name: 'SUPPORT', href: '#support' },
  ]

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=60&fit=crop&crop=center"
              alt="Dead by Daylight"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black">
              JOUER MAINTENANT
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              TÉLÉCHARGER
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-amber-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black">
                JOUER MAINTENANT
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                TÉLÉCHARGER
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar