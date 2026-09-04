import { motion } from 'motion/react';
import { Target, TrendingUp, Cpu, Award, Milestone } from 'lucide-react';
import { profileSummary, whyFinanceAnalytics } from '../data';

export default function ProfileSummary() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-teal tracking-widest uppercase bg-brand-teal/10 px-3 py-1 rounded-full">
            Executive Summary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">
            Professional Profile & Majors Rationale
          </h2>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Bridging advanced computer science theory with real-world financial strategy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (8/12 grid span on desktop) - Profile Summary */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Visual accent background blur */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-lg">
                  <Target size={22} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy">
                  Executive Brief
                </h3>
              </div>
              
              <p className="font-sans text-base text-slate-600 leading-relaxed font-normal">
                {profileSummary}
              </p>

              {/* Stat highlight row */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wide">B.Tech Academics</p>
                  <p className="font-sans text-lg font-bold text-brand-navy">9.03 / 10 CGPA</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wide">PGDM Academics</p>
                  <p className="font-sans text-lg font-bold text-brand-teal">3.43 / 4.00 CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5/12 grid span on desktop) - Why Finance & Analytics */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between bg-amber-50/70 text-slate-800 border border-amber-200/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Visual accent background glow */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-100/80 text-amber-800 rounded-lg border border-amber-200/40">
                  <TrendingUp size={22} className="text-amber-700" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Why Finance & Analytics?
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                {whyFinanceAnalytics}
              </p>
            </div>

            {/* Quick Core Pillars */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-amber-200/40 text-center relative z-10">
              <div className="flex flex-col items-center">
                <Cpu size={16} className="text-amber-600 mb-1" />
                <span className="font-mono text-[10px] text-slate-500 uppercase">ML precision</span>
              </div>
              <div className="flex flex-col items-center border-x border-amber-200/40">
                <TrendingUp size={16} className="text-amber-600 mb-1" />
                <span className="font-mono text-[10px] text-slate-500 uppercase">valuation</span>
              </div>
              <div className="flex flex-col items-center">
                <Milestone size={16} className="text-amber-600 mb-1" />
                <span className="font-mono text-[10px] text-slate-500 uppercase">strategy</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic professional milestone track */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-6">
            The Strategic Transition Journey
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-mono text-xs text-slate-600 font-bold border border-slate-200">
                01
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-brand-navy uppercase">Engineering Foundation</h5>
                <p className="font-sans text-xs text-slate-500 mt-1">B.Tech in Computer Science Engineering (CGPA 9.03/10, 2024)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-mono text-xs text-slate-600 font-bold border border-slate-200">
                02
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-brand-navy uppercase">AI/ML Research</h5>
                <p className="font-sans text-xs text-slate-500 mt-1">Published cancer diagnostic framework using Explainable AI (ICANEHA-2024)</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-mono text-xs text-slate-600 font-bold border border-slate-200">
                03
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-brand-navy uppercase">Management Strategy</h5>
                <p className="font-sans text-xs text-slate-500 mt-1">Pursuing PGDM at GLIM Gurgaon, focusing on Corporate Valuation & analytics</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center font-mono text-xs text-brand-accent font-bold border border-brand-accent/30 animate-pulse">
                04
              </div>
              <div>
                <h5 className="font-sans text-xs font-bold text-brand-navy uppercase">Corporate Execution</h5>
                <p className="font-sans text-xs text-slate-500 mt-1">SIP diagnostic at IHCL Taj Mahal Hotel New Delhi (Trainee of the Quarter)</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
