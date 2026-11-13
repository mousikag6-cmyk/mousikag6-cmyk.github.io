import React from 'react';
import { GraduationCap, Calendar, Target, Award, BookOpen, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Calendar: Calendar,
    Target: Target
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-[#5B4632]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Discover My Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#F4D9A0]/50 shadow-warm-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#F4D9A0]/20 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-bold text-[#5B4632] mb-4 flex items-center gap-2">
                <span>Passionate about Technology & Impact</span>
              </h3>

              <div className="space-y-4 text-base text-[#5B4632]/85 leading-relaxed">
                {personalInfo.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Institution and Focus Badge */}
              <div className="mt-6 pt-6 border-t border-[#5B4632]/10 flex flex-wrap items-center gap-4 text-xs font-medium text-[#5B4632]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#F4D9A0]">
                  <GraduationCap className="w-4 h-4 text-[#C8792C]" />
                  <span>Sri Shakthi Institute of Engineering and Technology</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#F4D9A0]">
                  <BookOpen className="w-4 h-4 text-[#C8792C]" />
                  <span>Information Technology (2024–2028)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Key Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Card 1: Education */}
            <div className="group p-6 rounded-2xl bg-white border-2 border-[#F4D9A0]/60 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C] group-hover:bg-[#C8792C] group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8792C] uppercase tracking-wider">
                    Education
                  </span>
                  <h4 className="text-lg font-bold text-[#5B4632] mt-0.5">
                    B.Tech Information Technology
                  </h4>
                  <p className="text-xs text-[#5B4632]/75 mt-1">
                    Sri Shakthi Institute of Engineering and Technology
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Graduation */}
            <div className="group p-6 rounded-2xl bg-white border-2 border-[#F4D9A0]/60 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C] group-hover:bg-[#C8792C] group-hover:text-white transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8792C] uppercase tracking-wider">
                    Graduation
                  </span>
                  <h4 className="text-lg font-bold text-[#5B4632] mt-0.5">
                    Class of 2028
                  </h4>
                  <p className="text-xs text-[#5B4632]/75 mt-1">
                    Academic standing with a CGPA of <span className="font-semibold text-[#5B4632]">7.99</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Career Goal */}
            <div className="group p-6 rounded-2xl bg-white border-2 border-[#F4D9A0]/60 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#F4D9A0]/30 text-[#C8792C] group-hover:bg-[#C8792C] group-hover:text-white transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8792C] uppercase tracking-wider">
                    Career Goal
                  </span>
                  <h4 className="text-lg font-bold text-[#5B4632] mt-0.5">
                    Software Developer
                  </h4>
                  <p className="text-xs text-[#5B4632]/75 mt-1">
                    Contributing to robust, scalable, and impactful software systems
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
