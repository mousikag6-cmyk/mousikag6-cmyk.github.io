import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#5B4632] text-[#F4D9A0] pt-16 pb-12 border-t-4 border-[#C8792C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F4D9A0]/20">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4D9A0] text-[#5B4632] font-black text-xl flex items-center justify-center shadow-md">
                <span>M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F4D9A0] tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-medium text-[#F4D9A0]/80">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#F4D9A0]/85 max-w-sm leading-relaxed">
              B.Tech Information Technology student at Sri Shakthi Institute of Engineering and Technology. Dedicated to continuous learning and building reliable digital solutions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#FAF7F2]/10 hover:bg-[#C8792C] text-[#F4D9A0] hover:text-white flex items-center justify-center transition-colors border border-[#F4D9A0]/20"
                aria-label="Mousika G on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#FAF7F2]/10 hover:bg-[#C8792C] text-[#F4D9A0] hover:text-white flex items-center justify-center transition-colors border border-[#F4D9A0]/20"
                aria-label="Mousika G on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-[#FAF7F2]/10 hover:bg-[#C8792C] text-[#F4D9A0] hover:text-white flex items-center justify-center transition-colors border border-[#F4D9A0]/20"
                aria-label="Email Mousika G"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4D9A0] border-l-2 border-[#C8792C] pl-2.5">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#F4D9A0]/80 hover:text-white hover:translate-x-1 transition-all py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4D9A0] border-l-2 border-[#C8792C] pl-2.5">
              Direct Contact
            </h4>
            
            <ul className="space-y-3 text-xs sm:text-sm text-[#F4D9A0]/85">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8792C] shrink-0" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white hover:underline transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8792C] shrink-0" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {personalInfo.phoneFormatted}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8792C] shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4D9A0]/75">
          <p>
            © {currentYear} <span className="text-[#F4D9A0] font-semibold">{personalInfo.name}</span>. All rights reserved. Built with React & modern web standards.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2]/10 hover:bg-[#C8792C] hover:text-white text-[#F4D9A0] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
