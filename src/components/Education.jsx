import React from 'react';
import { GraduationCap, School, Calendar, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white border-y border-[#5B4632]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            Education
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            My academic journey and scholastic milestones in Information Technology and foundational sciences.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-[#F4D9A0] transform -translate-x-1/2 hidden sm:block" 
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Icon (Desktop) */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#F4D9A0] items-center justify-center text-[#C8792C] shadow-sm z-10">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Education Card Content */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-6">
                    <div className="group p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border-2 border-[#F4D9A0]/60 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 relative">
                      
                      {/* Active / Current Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B4632] text-[#F4D9A0] text-xs font-bold">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>

                        <span className="px-3 py-1 rounded-full bg-[#C8792C]/15 text-[#C8792C] font-bold text-xs">
                          {item.score}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#5B4632] group-hover:text-[#C8792C] transition-colors mb-1.5">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-medium text-[#5B4632]/85 flex items-start gap-2 mb-3">
                        <School className="w-4 h-4 text-[#C8792C] shrink-0 mt-0.5" />
                        <span>{item.institution}</span>
                      </p>

                      {/* Category Type */}
                      <div className="pt-3 border-t border-[#5B4632]/10 flex items-center justify-between text-xs text-[#5B4632]/70">
                        <span>{item.type}</span>
                        {item.current && (
                          <span className="text-[#C8792C] font-semibold flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#C8792C] animate-pulse"></span>
                            In Progress
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
