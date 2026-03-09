import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import AcademicResearch from './components/AcademicResearch';
import ResearchSummary from './components/ResearchSummary';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'research') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        <ResearchSummary onBack={() => setCurrentPage('home')} />
        <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} Sajith Ranpa. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Services />
      <Education />
      <Certifications />
      <AcademicResearch onNavigate={() => setCurrentPage('research')} />
      <Contact />

      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Sajith Ranpa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
