/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import Academics from './components/Academics';
import SummerInternship from './components/SummerInternship';
import Projects from './components/Projects';
import CaseCompetitions from './components/CaseCompetitions';
import LeadershipExtracurriculars from './components/LeadershipExtracurriculars';
import CertificationsAchievements from './components/CertificationsAchievements';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'academics',
      'sip',
      'projects',
      'case-comps',
      'leadership',
      'achievements',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for tracking boundary

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative font-sans antialiased bg-slate-50 text-slate-900 min-h-screen selection:bg-brand-accent/30 selection:text-brand-navy">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <ProfileSummary />
        <Skills />
        <Academics />
        <SummerInternship />
        <Projects />
        <CaseCompetitions />
        <LeadershipExtracurriculars />
        <CertificationsAchievements />
        <ContactFooter />
      </main>
    </div>
  );
}
