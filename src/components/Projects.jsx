import React from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ShoppingBag, 
  FileCheck2, 
  BrainCircuit, 
  Layers,
  Github,
  ExternalLink
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-8 h-8 text-[#C8792C]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-[#C8792C]" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-8 h-8 text-[#C8792C]" />;
      default:
        return <Layers className="w-8 h-8 text-[#C8792C]" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-y border-[#5B4632]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            My Projects
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            Practical initiatives spanning web applications, e-commerce concepts, and generative AI learning tools.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectsData.map((project) => {
            if (project.isFeatured) {
              // Prominently featured AI Flashcards Project spanning full width
              return (
                <div
                  key={project.id}
                  className="lg:col-span-12 group rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#FBF2DD]/60 border-2 border-[#F4D9A0] shadow-warm-lg hover:shadow-gold-glow transition-all duration-300 p-8 sm:p-10 relative overflow-hidden"
                >
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4D9A0]/25 rounded-bl-full pointer-events-none -z-0" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Project Details */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8792C] text-white text-xs font-semibold tracking-wide shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-[#F4D9A0]" />
                            {project.badge}
                          </span>
                          <span className="text-xs font-medium text-[#5B4632]/70 uppercase tracking-wider">
                            {project.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#5B4632] tracking-tight mb-4 group-hover:text-[#C8792C] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#5B4632]/85 leading-relaxed mb-6 max-w-3xl">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="mb-6">
                          <span className="text-xs font-bold text-[#5B4632]/60 uppercase tracking-wider block mb-2.5">
                            Technologies Used
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3.5 py-1.5 rounded-lg bg-white border border-[#F4D9A0] text-xs sm:text-sm font-semibold text-[#5B4632] shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* GitHub Link Only */}
                      <div className="pt-4 border-t border-[#F4D9A0]/60 flex items-center justify-between">
                        <a
                          href={project.githubUrl || personalInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#5B4632] text-[#F4D9A0] hover:bg-[#C8792C] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm group/btn"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Graphical Feature Box */}
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="w-full max-w-xs aspect-square rounded-2xl bg-gradient-to-b from-white to-[#FBF2DD] border-2 border-[#F4D9A0] p-6 flex flex-col items-center justify-center text-center shadow-inner relative">
                        <div className="w-20 h-20 rounded-2xl bg-[#5B4632] flex items-center justify-center text-[#F4D9A0] shadow-warm-md mb-4 border border-[#F4D9A0]/40 group-hover:scale-105 transition-transform">
                          <BrainCircuit className="w-10 h-10 text-[#F4D9A0]" />
                        </div>
                        <h4 className="font-bold text-base text-[#5B4632] mb-1">
                          Gemini AI Engine
                        </h4>
                        <p className="text-xs text-[#5B4632]/70 leading-normal">
                          Automated Flashcard & Quiz Synthesis Architecture
                        </p>
                        <div className="mt-4 px-3 py-1 rounded-full bg-[#C8792C]/10 text-[#C8792C] text-[11px] font-bold">
                          Full Stack MERN
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            }

            // Other Two Projects (BUYWISE and LEGALEASE)
            return (
              <div
                key={project.id}
                className="lg:col-span-6 group rounded-3xl bg-white border-2 border-[#F4D9A0]/70 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-[#F4D9A0]/30 text-[#C8792C] group-hover:bg-[#C8792C] group-hover:text-white transition-colors">
                      {getProjectIcon(project.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#5B4632] tracking-tight mb-3 group-hover:text-[#C8792C] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B4632]/85 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-[#5B4632]/60 uppercase tracking-wider block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#F4D9A0]/60 text-xs font-semibold text-[#5B4632]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link Only */}
                  <div className="pt-4 border-t border-[#5B4632]/10 flex items-center justify-between">
                    <a
                      href={project.githubUrl || personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#5B4632] text-[#F4D9A0] hover:bg-[#C8792C] hover:text-white text-xs font-semibold transition-all duration-200 shadow-sm group/btn"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
