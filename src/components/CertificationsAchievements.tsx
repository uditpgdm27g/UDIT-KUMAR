import { motion } from 'motion/react';
import { Award, CheckCircle, Calendar, GraduationCap, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { certificationsData, achievementsData } from '../data';

export default function CertificationsAchievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full shadow-sm">
            Credentials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Awards & Professional Certifications
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Validating technical skill, industry competencies, and excellence in corporate settings.
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
          
          {/* Left Column: Awards & Achievements (6/12 width) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                <Award size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Key Awards & Landmark Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievementsData.map((item, idx) => (
                <motion.div
                  id={`achievement-card-${idx}`}
                  key={idx}
                  variants={cardVariants}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  {/* Accent visual border marker */}
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-amber-400" />
                  
                  <div className="flex items-start gap-4 pl-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg mt-0.5 border border-amber-100">
                      <Sparkles size={18} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Distinguished Honor
                        </span>
                        <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                          {item.year}
                        </span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Micro aesthetic checkmark card */}
            <div className="bg-amber-50/70 text-slate-800 rounded-xl p-5 border border-amber-200/60 shadow-sm">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <CheckCircle size={16} className="text-amber-700" />
                <span className="font-serif text-xs font-bold uppercase tracking-wider">Research Publication Checked</span>
              </div>
              <p className="font-sans text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed">
                Udit Kumar's research on multiple skin cancer detection is fully index-ready. Underpinned by explainable artificial intelligence (SHAP), this represents high clinical validation standards.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Certifications (6/12 width) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-teal-100 text-teal-800 rounded-lg">
                <BookOpen size={20} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  id={`certification-card-${index}`}
                  key={index}
                  variants={cardVariants}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -3 }}
                >
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest block">
                      Credential Certificate
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="font-sans text-[11px] text-teal-700 font-semibold flex items-center gap-1">
                      <GraduationCap size={12} /> {cert.issuer}
                    </p>
                    {cert.duration && (
                      <span className="inline-block bg-slate-100 text-slate-500 rounded px-1.5 py-0.5 font-mono text-[9px]">
                        Duration: {cert.duration}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Calendar size={10} /> {cert.year}
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 flex items-center gap-0.5 font-semibold">
                      VERIFIED <ExternalLink size={8} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
