import React from 'react';
import { Award, Layers, Cloud, BrainCircuit, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getCertIcon = (icon) => {
    switch (icon) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-7 h-7 text-[#C8792C]" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-[#C8792C]" />;
      case 'Cloud':
        return <Cloud className="w-7 h-7 text-[#C8792C]" />;
      default:
        return <Award className="w-7 h-7 text-[#C8792C]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Credentials & Courses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            Structured certifications undertaken to build expertise in artificial intelligence, full-stack architecture, and cloud systems.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white border-2 border-[#F4D9A0]/70 hover:border-[#C8792C] p-7 sm:p-8 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4D9A0]/15 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header with Issuer Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-[#F4D9A0]/25 group-hover:bg-[#C8792C] group-hover:text-white transition-colors">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#5B4632] text-[#F4D9A0] text-xs font-bold tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-[#5B4632] tracking-tight mb-1.5 group-hover:text-[#C8792C] transition-colors">
                  {cert.title}
                </h3>

                {/* Subtitle / Focus Domain */}
                <span className="text-xs font-semibold text-[#C8792C] uppercase tracking-wider block mb-3">
                  {cert.badge}
                </span>

                {/* Description */}
                <p className="text-sm text-[#5B4632]/80 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Status */}
              <div className="pt-4 border-t border-[#5B4632]/10 flex items-center justify-between text-xs text-[#5B4632]/75">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#C8792C]" />
                  <span>Verified Coursework</span>
                </div>
                <span className="text-[11px] text-[#5B4632]/60">Platform Certified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
