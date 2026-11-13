import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-[#C8792C]" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-[#C8792C]" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-[#C8792C]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#C8792C]" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-[#C8792C]" />;
      case 'Additional Interests':
        return <Sparkles className="w-5 h-5 text-[#C8792C]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#C8792C]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            Practical knowledge and tools cultivated through coursework, self-learning, and project development.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-[#F4D9A0]/70 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#5B4632]/10">
                  <div className="p-2.5 rounded-xl bg-[#F4D9A0]/25 group-hover:bg-[#C8792C]/15 transition-colors">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <h3 className="text-lg font-bold text-[#5B4632] tracking-tight">
                    {categoryGroup.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] text-[#5B4632] border border-[#F4D9A0]/40 text-xs sm:text-sm font-medium hover:border-[#C8792C] hover:bg-[#F4D9A0]/20 hover:text-[#5B4632] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-[#5B4632]/5 flex items-center justify-between text-[11px] text-[#5B4632]/60">
                <span>{categoryGroup.skills.length} competencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8792C]/40 group-hover:bg-[#C8792C] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
