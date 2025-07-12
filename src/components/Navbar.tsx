import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Steam } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'ACTUALITÉS', href: '#news' },
    { name: 'GAMEPLAY', href: '#gameplay' },
    { name: 'GALERIE', href: '#gallery' },
    { name: 'COMMUNAUTÉ', href: '#community' },
    { name: 'SUPPORT', href: '#support' },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-white">
              <span className="text-red-400">COSMIC</span>
              <span className="text-orange-400 ml-2">FEAR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
              WISHLIST
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
              <Steam className="h-4 w-4" />
              STEAM
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/98 backdrop-blur-sm border-t border-red-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                WISHLIST
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2">
                <Steam className="h-4 w-4" />
                STEAM
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar