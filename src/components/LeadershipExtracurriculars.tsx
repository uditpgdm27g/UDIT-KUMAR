import { motion } from 'motion/react';
import { ShieldCheck, Users, Trophy, Activity, Calendar, ArrowRight, UserCheck } from 'lucide-react';
import { leadershipData, extracurricularsData } from '../data';

export default function LeadershipExtracurriculars() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="leadership" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full shadow-sm">
            Campus Life
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Leadership & Extracurriculars
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Active campus contributions and competitive athletics showcasing teamwork and administrative competence.
          </p>
        </div>

        {/* Split Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          
          {/* Left Column: Responsibilities & Leadership (7/12 width) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-teal-100 text-teal-800 rounded-lg">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Corporate & Campus Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {leadershipData.map((item, index) => (
                <motion.div
                   id={`leadership-item-${index}`}
                   key={index}
                   variants={itemVariants}
                   className="bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white rounded-xl p-5 hover:shadow transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2 bg-teal-50 text-teal-700 rounded-lg mt-0.5 border border-teal-100">
                    <UserCheck size={18} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                        {item.role}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-400 font-bold flex items-center gap-1">
                        <Calendar size={10} /> {item.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-teal-700 font-semibold">
                      {item.organization}
                    </p>
                    {item.description && (
                      <p className="font-sans text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2 pt-2 border-t border-slate-200/40">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Extracurriculars & Athletics (5/12 width) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                <Trophy size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Athletics & Extracurriculars
              </h3>
            </div>

            <div className="space-y-4">
              {extracurricularsData.map((item, index) => (
                <motion.div
                  id={`extracurricular-item-${index}`}
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-50 border border-slate-200 hover:border-amber-200 hover:bg-white rounded-xl p-5 hover:shadow transition-all duration-300 flex items-start gap-4"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 bg-amber-50 text-amber-700 rounded-lg mt-0.5 border border-amber-100">
                    <Activity size={18} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                        {item.activity}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-400 font-bold whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* A professional visual box representing balanced profile */}
            <div className="border border-teal-100 bg-teal-50/50 rounded-xl p-5 mt-8">
              <p className="font-serif text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                The Well-Rounded Professional
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-slate-600 leading-relaxed font-light">
                Leadership isn't limited to classrooms. Leading university athletic teams and heading major institutional committees reflect resilience, high emotional intelligence (EQ), and the grit needed to deliver under real-world pressure.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
