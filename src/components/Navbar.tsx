import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Academics', href: '#academics' },
    { label: 'Taj SIP', href: '#sip' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Comps', href: '#case-comps' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-slate-500 tracking-wider">
              FINANCE & ANALYTICS | GLIM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  id={`nav-item-${item.href.slice(1)}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md font-sans text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? 'text-teal-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-500 rounded" />
                  )}
                </a>
              );
            })}
            <a
              id="nav-linkedin-cta"
              href={personalInfo.contact.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="ml-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-sans text-xs font-bold rounded tracking-wider uppercase transition-all duration-300 flex items-center gap-1 shadow-sm hover:shadow"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed inset-0 top-[60px] bg-white/98 backdrop-blur-lg z-40 transition-all duration-300 transform border-t border-slate-200 shadow-xl ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                id={`mobile-nav-item-${item.href.slice(1)}`}
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-teal-700 bg-teal-50/60 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-slate-200 px-4">
            <a
              id="mobile-nav-linkedin-cta"
              href={personalInfo.contact.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full justify-center px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-sans text-sm font-bold rounded tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
            >
              Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
