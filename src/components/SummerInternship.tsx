import { motion } from 'motion/react';
import { Briefcase, AlertTriangle, Hammer, Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { sipData } from '../data';

export default function SummerInternship() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="sip" className="py-24 bg-gradient-to-br from-teal-50/70 via-sky-50/60 to-indigo-50/50 text-slate-800 relative overflow-hidden border-y border-slate-200/60">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles size={12} className="animate-spin text-teal-600" /> Featured Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Summer Internship Project (SIP)
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Consultancy-style organizational diagnostic delivered directly to executive leadership at Indian Hotels Company Limited.
          </p>
        </div>

        {/* SIP Meta Row */}
        <motion.div
          id="sip-meta-card"
          className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 bg-teal-50 border border-teal-100 rounded-2xl text-teal-700 hidden sm:block">
              <Briefcase size={28} />
            </div>
            <div>
              <span className="font-mono text-xs text-teal-700 font-bold uppercase tracking-wider">
                {sipData.type}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                {sipData.company}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {sipData.office}
              </p>
            </div>
          </div>

          {/* Golden Award Tag */}
          <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 px-4 py-3 rounded-xl max-w-xs shrink-0 shadow-sm">
            <div className="p-2 bg-amber-500 text-white rounded-lg">
              <Award size={18} className="animate-bounce" />
            </div>
            <div className="text-left">
              <p className="font-sans text-[10px] text-slate-500 uppercase font-bold tracking-wider">Recognized Excellence</p>
              <p className="font-sans text-xs font-extrabold text-amber-800">{sipData.award}</p>
            </div>
          </div>
        </motion.div>

        {/* Challenge & What I Did Block */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Challenge and Actions Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* The Challenge Card */}
            <motion.div
              id="sip-challenge-card"
              variants={itemVariants}
              className="bg-white/60 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:bg-white shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 text-rose-600 mb-4">
                <AlertTriangle size={20} />
                <h4 className="font-serif text-lg font-bold tracking-wide">The Challenge</h4>
              </div>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                {sipData.challenge}
              </p>
            </motion.div>

            {/* What I Did Card */}
            <motion.div
              id="sip-actions-card"
              variants={itemVariants}
              className="bg-white/60 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:bg-white shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 text-teal-700 mb-6">
                <Hammer size={20} />
                <h4 className="font-serif text-lg font-bold tracking-wide">What I Did (IMPACT Framework)</h4>
              </div>
              <ul className="space-y-4">
                {sipData.whatIDid.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-teal-600 mt-1 shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Impact Stat Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h4 className="font-serif text-lg font-bold tracking-wide text-teal-800 flex items-center gap-2 mb-2">
              <TrendingUp size={20} /> Quantitative Impact Summary
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sipData.impactMetrics.map((metric, index) => (
                <motion.div
                  id={`sip-metric-card-${index}`}
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-teal-100 rounded-xl p-5 hover:border-teal-300 shadow-sm transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div>
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-indigo-600 block mb-2">
                      {metric.value}
                    </span>
                    <h5 className="font-sans text-xs font-bold text-slate-700 tracking-wide uppercase mb-2">
                      {metric.label}
                    </h5>
                  </div>
                  <p className="font-sans text-[11px] text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100 font-light">
                    {metric.subtext}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BCG Style Framework Matrix Visualization (Aesthetic Accent) */}
            <div className="bg-teal-50/50 border border-teal-100/60 rounded-xl p-5 space-y-3 shadow-sm">
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest text-center">
                Visualizing "IMPACT" 3x3 Diagnostic Matrix
              </p>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="bg-white border border-slate-200/50 rounded p-2">
                  <p className="text-amber-700 font-bold">Strategic Thinking</p>
                  <p className="text-slate-400 text-[9px] mt-1">Entry | Mid | Lead</p>
                </div>
                <div className="bg-white border border-slate-200/50 rounded p-2">
                  <p className="text-teal-700 font-bold">Cultural Ethos</p>
                  <p className="text-slate-400 text-[9px] mt-1">Entry | Mid | Lead</p>
                </div>
                <div className="bg-white border border-slate-200/50 rounded p-2">
                  <p className="text-indigo-700 font-bold">Behavioral Excellence</p>
                  <p className="text-slate-400 text-[9px] mt-1">Entry | Mid | Lead</p>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
