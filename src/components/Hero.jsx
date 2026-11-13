import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Code2, 
  GraduationCap, 
  Terminal,
  FileCode,
  Github,
  Linkedin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-warm-bg bg-grid-pattern"
    >
      {/* Decorative Champagne Gold & Burnt Amber Background Glows */}
      <div 
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#F4D9A0]/25 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#C8792C]/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8792C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8792C]"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5B4632] tracking-tight leading-[1.15] mb-3">
              Hello, I'm{' '}
              <span className="text-[#C8792C] relative inline-block">
                {personalInfo.name}
                <svg
                  className="absolute left-0 -bottom-1 w-full text-[#F4D9A0]/80 h-2.5 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Professional Title */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-0.5 w-8 bg-[#C8792C]"></span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#5B4632]/90 tracking-wide">
                {personalInfo.title}
              </h2>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-[#5B4632]/85 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C8792C] text-white font-semibold text-base shadow-warm-md hover:bg-[#BA6E24] hover:shadow-amber-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border-2 border-[#5B4632] text-[#5B4632] font-semibold text-base hover:bg-[#5B4632] hover:text-[#F4D9A0] shadow-warm-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Contact Micro Info */}
            <div className="pt-6 border-t border-[#5B4632]/10 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5B4632]/80 hover:text-[#C8792C] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <div className="p-2 rounded-lg bg-[#F4D9A0]/25 text-[#5B4632]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5B4632]/80 hover:text-[#C8792C] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <div className="p-2 rounded-lg bg-[#F4D9A0]/25 text-[#5B4632]">
                    <Github className="w-4 h-4" />
                  </div>
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5B4632]/70">
                <MapPin className="w-4 h-4 text-[#C8792C]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Champagne Gold & Burnt Amber Rings */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-[#F4D9A0] via-transparent to-[#C8792C]/30 opacity-70 blur-lg animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-white border-2 border-[#F4D9A0] p-4 sm:p-5 shadow-warm-lg overflow-hidden">
                
                {/* Background Geometric Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4D9A0]/20 rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C8792C]/10 rounded-tr-full pointer-events-none" />
                
                {/* Portrait Photo Frame - Aspect 3:4 displays face and formal dress cleanly */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#F4D9A0]/80 shadow-md bg-[#FAF7F2] group">
                  <img
                    src={personalInfo.profileImage || "/profile.jpg"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F4D9A0] text-xs font-semibold text-[#5B4632] shadow-sm">
                    <Code2 className="w-3.5 h-3.5 text-[#C8792C]" />
                    <span>Developer</span>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#5B4632]/95 backdrop-blur-md text-[#F4D9A0] text-xs font-bold tracking-wider shadow-sm border border-[#F4D9A0]/40">
                    <span>Batch '28</span>
                  </div>

                  {/* Bottom Vignette Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#5B4632]/80 via-[#5B4632]/25 to-transparent pointer-events-none" />

                  {/* Micro Info inside portrait */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-1">
                    <span className="font-medium drop-shadow-sm flex items-center gap-1.5 text-[#FAF7F2]">
                      <GraduationCap className="w-4 h-4 text-[#F4D9A0]" />
                      B.Tech IT (CGPA: 7.99)
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#C8792C] text-[10px] font-bold text-white shadow-sm">
                      Sri Shakthi
                    </span>
                  </div>
                </div>

                {/* Profile Details Underneath */}
                <div className="mt-4 pt-1 text-center">
                  <h3 className="text-xl font-bold text-[#5B4632] tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C8792C] uppercase tracking-wider mt-0.5">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-[#5B4632]/75 mt-1">
                    Sri Shakthi Institute of Engineering and Technology
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
