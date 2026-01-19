import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import millionLogo from '@/assets/million-logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: '#inicio',
    label: 'Início'
  }, {
    href: '#comparativo',
    label: 'Comparativo'
  }, {
    href: '#depoimentos',
    label: 'Depoimentos'
  }, {
    href: '#sobre',
    label: 'Sobre Nós'
  }, {
    href: '#clientes',
    label: 'Clientes'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="h-20 flex-row flex items-center justify-between my-0">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img alt="Million Assessoria" className="h-10 w-auto border-0 shadow-none object-fill rounded-none" src="/lovable-uploads/e880a692-0ba0-40eb-8301-4600888613f1.png" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <a href="#contato" className="hidden md:inline-flex btn-outline text-sm">
            Contrate
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
                  {link.label}
                </a>)}
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="btn-outline text-sm text-center mt-2">
                Contrate
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;