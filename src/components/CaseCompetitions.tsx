import { motion } from 'motion/react';
import { Award, Lightbulb, TrendingUp, HelpCircle, AlertCircle, Users, Trophy } from 'lucide-react';
import { caseCompetitionsData } from '../data';

export default function CaseCompetitions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="case-comps" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full shadow-sm">
            Competitions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            National Case Competitions
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Representing GLIM Gurgaon on national-level strategic forums and business challenges.
          </p>
        </div>

        {/* Case Cards Grid */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {caseCompetitionsData.map((comp, idx) => (
            <motion.div
              id={`case-comp-card-${idx}`}
              key={idx}
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Highlight ribbon at top edge */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-500/80" />

              <div>
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {comp.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mt-1 font-medium">
                      {comp.organizer}
                    </p>
                  </div>
                  
                  {/* National Rank Badge */}
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center shadow-sm">
                    <Trophy size={14} className="text-amber-600 animate-pulse" />
                    <span className="font-mono text-xs font-extrabold text-amber-900 whitespace-nowrap">
                      {comp.rank}
                    </span>
                  </div>
                </div>

                {/* Team Label */}
                <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-6 pb-3 border-b border-slate-100">
                  <Users size={12} className="text-teal-600" />
                  <span>Team: <strong className="text-slate-700">{comp.team}</strong></span>
                </div>

                {/* Case Study Structure Blocks */}
                <div className="space-y-6">
                  {/* Problem Block */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-rose-600 font-serif text-sm font-bold">
                      <HelpCircle size={16} />
                      <span>The Problem</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {comp.problem}
                    </p>
                  </div>

                  {/* Solution Block */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-teal-700 font-serif text-sm font-bold">
                      <Lightbulb size={16} />
                      <span>The Strategic Solution</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {comp.solution}
                    </p>
                  </div>

                  {/* Outcome Block */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-serif text-sm font-bold">
                      <TrendingUp size={16} />
                      <span>Expected Outcome & Value Unlock</span>
                    </div>
                    <ul className="space-y-2 pl-1">
                      {comp.expectedOutcome.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold mt-0.5 shrink-0 select-none">•</span>
                          <span className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quant Metrics Grid */}
              {comp.metrics && (
                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 rounded-xl p-4">
                  {comp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <span className="font-mono text-sm sm:text-base font-extrabold text-slate-800 block">
                        {m.value}
                      </span>
                      <span className="font-sans text-[9px] text-slate-400 uppercase tracking-wide font-semibold block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
