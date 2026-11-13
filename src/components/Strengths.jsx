import React from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  Clock, 
  RefreshCw, 
  BookOpen, 
  Zap 
} from 'lucide-react';
import { strengthsData } from '../data/portfolioData';

export default function Strengths() {
  const getStrengthIcon = (icon) => {
    switch (icon) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#C8792C]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#C8792C]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C8792C]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#C8792C]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#C8792C]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#C8792C]" />;
      default:
        return <Zap className="w-5 h-5 text-[#C8792C]" />;
    }
  };

  return (
    <section id="strengths" className="py-20 lg:py-28 bg-white border-y border-[#5B4632]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4D9A0]/30 border border-[#F4D9A0] text-[#5B4632] text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#C8792C]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5B4632] tracking-tight mb-4">
            My Strengths
          </h2>
          <p className="text-base text-[#5B4632]/80 max-w-xl mx-auto">
            Interpersonal and cognitive attributes that empower reliable delivery and cohesive team collaboration.
          </p>
          <div className="h-1 w-20 bg-[#C8792C] mx-auto rounded-full mt-4" />
        </div>

        {/* Visually Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthsData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#F4D9A0]/60 hover:border-[#C8792C] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#F4D9A0]/70 text-[#C8792C] group-hover:bg-[#C8792C] group-hover:text-white transition-colors shrink-0">
                  {getStrengthIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#5B4632] group-hover:text-[#C8792C] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B4632]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
