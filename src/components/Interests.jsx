import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Terminal, 
  Palette, 
  Figma, 
  Cpu, 
  Bot 
} from 'lucide-react';
import { areasOfInterest } from '../data/portfolioData';

export default function Interests() {
  const getInterestIcon = (icon) => {
    switch (icon) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C8792C]" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-[#C8792C]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#C8792C]" />;
      case 'Figma':
        return <Figma className="w-6 h-6 text-[#C8792C]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#C8792C]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#C8792C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C8792C]" />;
    }
  };

  return (
    <section id="interests" className="py-20 lg:py-28 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Future Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            Areas of Interest
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            Technical domains that inspire my work and shape my continuous learning path.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Grid of Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasOfInterest.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-[#F4D9A0]/70 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4D9A0]/25 group-hover:bg-[#C8792C] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                  {getInterestIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#5B4632] group-hover:text-[#C8792C] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5B4632]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#5B4632]/5 flex items-center justify-between text-[11px] text-[#5B4632]/60">
                <span>Active Curiosity</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8792C]/40 group-hover:bg-[#C8792C] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
