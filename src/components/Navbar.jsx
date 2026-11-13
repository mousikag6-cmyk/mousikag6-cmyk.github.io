import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'interests', 'strengths', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-warm-md border-b border-[#5B4632]/10 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Mousika G - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5B4632] flex items-center justify-center text-[#F4D9A0] font-bold text-lg shadow-sm border border-[#F4D9A0]/40 transition-transform duration-300 group-hover:scale-105">
              <span>M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#5B4632] group-hover:text-[#C8792C] transition-colors">
                Mousika G
              </span>
              <span className="text-[11px] font-medium text-[#5B4632]/70 -mt-1 tracking-wider uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#C8792C] font-semibold bg-[#F4D9A0]/25'
                      : 'text-[#5B4632] hover:text-[#C8792C] hover:bg-[#F4D9A0]/15'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C8792C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#C8792C] text-white hover:bg-[#BA6E24] shadow-warm-sm transition-all duration-200 hover:shadow-amber-glow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#5B4632] hover:bg-[#F4D9A0]/20 hover:text-[#C8792C] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#5B4632]/10 px-4 pt-3 pb-6 shadow-warm-lg animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F4D9A0]/30 text-[#C8792C] font-semibold'
                      : 'text-[#5B4632] hover:bg-[#F4D9A0]/20 hover:text-[#C8792C]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[#C8792C] text-white hover:bg-[#BA6E24] shadow-warm-sm transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
