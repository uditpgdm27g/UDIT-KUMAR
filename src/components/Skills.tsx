import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { skillsData } from '../data';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <Icons.TrendingUp className="w-5 h-5 text-brand-accent" />;
      case 'Cpu':
        return <Icons.Cpu className="w-5 h-5 text-brand-teal" />;
      case 'Briefcase':
        return <Icons.Briefcase className="w-5 h-5 text-amber-500" />;
      case 'Wrench':
        return <Icons.Wrench className="w-5 h-5 text-indigo-500" />;
      default:
        return <Icons.Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  const getPastelStyles = (title: string) => {
    if (title.includes('Finance')) {
      return {
        card: "bg-amber-50/40 border-amber-200/50 hover:bg-amber-50 hover:border-amber-300",
        pill: "bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border-slate-200 hover:border-amber-300",
        text: "text-amber-700",
        iconBg: "bg-amber-100/50 text-amber-700 border-amber-200/40"
      };
    }
    if (title.includes('Analytics')) {
      return {
        card: "bg-teal-50/40 border-teal-200/50 hover:bg-teal-50 hover:border-teal-300",
        pill: "bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-900 border-slate-200 hover:border-teal-300",
        text: "text-teal-700",
        iconBg: "bg-teal-100/50 text-teal-700 border-teal-200/40"
      };
    }
    if (title.includes('Machine Learning') || title.includes('Technology')) {
      return {
        card: "bg-sky-50/40 border-sky-200/50 hover:bg-sky-50 hover:border-sky-300",
        pill: "bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-900 border-slate-200 hover:border-sky-300",
        text: "text-sky-700",
        iconBg: "bg-sky-100/50 text-sky-700 border-sky-200/40"
      };
    }
    return {
      card: "bg-indigo-50/40 border-indigo-200/50 hover:bg-indigo-50 hover:border-indigo-300",
      pill: "bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 border-slate-200 hover:border-indigo-300",
      text: "text-indigo-700",
      iconBg: "bg-indigo-100/50 text-indigo-700 border-indigo-200/40"
    };
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/30 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
            Core Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Specialized Skills Portfolio
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Structured skillsets combining analytical quantitative models with engineering precision.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((category) => {
            const styles = getPastelStyles(category.title);
            return (
              <motion.div
                id={`skills-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={category.title}
                variants={cardVariants}
                className={`border rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:bg-white transition-all duration-300 flex flex-col justify-between group ${styles.card}`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 border rounded-xl transition-colors ${styles.iconBg}`}>
                      {renderIcon(category.iconName)}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Pills List */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, index) => (
                      <span
                        id={`skill-pill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        key={index}
                        className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md ${styles.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Aesthetic footer marker representing corporate reports */}
                <div className="mt-8 pt-4 border-t border-slate-200/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>VERIFIED RECRUITER PILL</span>
                  <span className={styles.text}>GLIM Gurgaon Candidate</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Embedded Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-indigo-500/10 border border-teal-200/40 text-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                Looking for a specific capability?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl font-light">
                Udit specializes in translating highly complex machine learning predictions (like SHAP diagnostics) into actionable, high-level corporate slide decks and financial valuations.
              </p>
            </div>
            <a
              id="skills-contact-btn"
              href="#contact"
              className="px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-sans text-xs font-bold rounded tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              Inquire Capabilities <Icons.ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
