import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, Landmark } from 'lucide-react';
import { academicsData } from '../data';

export default function Academics() {
  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="academics" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-teal tracking-widest uppercase bg-brand-teal/10 px-3 py-1 rounded-full">
            Education
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-navy mt-4 tracking-tight">
            Academic Qualifications
          </h2>
          <div className="h-1 w-16 bg-brand-accent mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Excellent academic record showcasing consistent performance and quantitative capability.
          </p>
        </div>

        {/* Qualifications Table for Desktop */}
        <div className="hidden md:block overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Degree / Qualification
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Institution
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {academicsData.map((qual, index) => (
                <motion.tr
                  id={`academics-row-${index}`}
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={tableRowVariants}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="whitespace-nowrap px-6 py-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 p-2 bg-brand-navy/5 text-brand-navy rounded-lg">
                        <GraduationCap size={18} />
                      </div>
                      <div className="ml-4">
                        <div className="font-serif text-sm font-bold text-brand-navy">{qual.degree}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Landmark size={14} className="text-slate-400 flex-shrink-0" />
                      <div className="font-sans text-xs sm:text-sm text-slate-600 max-w-xs lg:max-w-md">
                        {qual.institution}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-5 text-right">
                    <span className="inline-flex items-center rounded-md bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-navy font-sans border border-brand-accent/20">
                      {qual.score}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-xs text-slate-500">
                    <div className="flex items-center justify-end gap-1.5">
                      <Calendar size={12} />
                      {qual.year}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Card Timeline Layout) */}
        <div className="md:hidden space-y-4">
          {academicsData.map((qual, index) => (
            <div
              id={`academics-card-mobile-${index}`}
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden"
            >
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />

              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Calendar size={10} /> {qual.year}
                </span>
                <span className="rounded-full bg-brand-accent/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-navy font-sans border border-brand-accent/20">
                  {qual.score.split(': ')[1] || qual.score}
                </span>
              </div>

              <h3 className="font-serif text-base font-bold text-brand-navy flex items-center gap-2">
                <GraduationCap size={16} className="text-brand-teal" /> {qual.degree}
              </h3>
              
              <p className="font-sans text-xs text-slate-600 mt-2 flex items-start gap-1.5 leading-relaxed">
                <Landmark size={12} className="text-slate-400 mt-0.5 shrink-0" />
                {qual.institution}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Recognition Callout */}
        <div className="mt-10 p-5 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shadow-sm">
          <div className="p-3 bg-brand-accent/15 text-brand-navy rounded-full">
            <Award size={24} className="text-brand-accent" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-sans text-sm font-bold text-brand-navy">Highly Ranked Foundations</h4>
            <p className="font-sans text-xs text-slate-500">
              Ranked in the top tier during B.Tech CSE (CGPA 9.03/10) and currently maintaining a strong academic performance of 3.43/4.00 at Great Lakes, Gurgaon.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
