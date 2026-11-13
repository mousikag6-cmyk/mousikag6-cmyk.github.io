import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Interests from './components/Interests';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg text-[#5B4632] flex flex-col font-poppins selection:bg-[#F4D9A0] selection:text-[#5B4632]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Interests />
        <Strengths />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Back to Top Control */}
      <BackToTop />
    </div>
  );
}

export default App;
