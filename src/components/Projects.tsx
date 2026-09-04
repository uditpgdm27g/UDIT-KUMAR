import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, TrendingUp, Cpu, BarChart3, ShieldAlert, Plus, Calendar, CheckSquare } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    { label: 'All Domains', id: 'All', icon: <Layers size={14} /> },
    { label: 'Finance', id: 'Finance', icon: <TrendingUp size={14} className="text-amber-600" /> },
    { label: 'Analytics', id: 'Analytics', icon: <BarChart3 size={14} className="text-teal-600" /> },
    { label: 'AI & ML', id: 'AI-ML', icon: <Cpu size={14} className="text-sky-500" /> },
    { label: 'Fintech (Placeholder)', id: 'Fintech', icon: <Plus size={14} className="text-indigo-500" /> },
    { label: 'Operations (Placeholder)', id: 'Operations', icon: <Plus size={14} className="text-teal-500" /> },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.domain === activeFilter);

  const getDomainBadgeColor = (domain: string) => {
    switch (domain) {
      case 'Finance':
        return 'bg-amber-50 text-amber-800 border-amber-200/60';
      case 'Analytics':
        return 'bg-teal-50 text-teal-800 border-teal-200/60';
      case 'AI-ML':
        return 'bg-sky-50 text-sky-800 border-sky-200/60';
      case 'Fintech':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/60';
      case 'Operations':
        return 'bg-teal-50 text-teal-800 border-teal-200/60';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/60';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full shadow-sm">
            Academics
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Curated Academic Projects
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Strategic projects blending mathematical rigor, predictive ML models, and financial ratio frameworks.
          </p>
        </div>

        {/* Filter Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              id={`filter-btn-${filter.id.toLowerCase()}`}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-teal-700'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                id={`project-card-${project.id}`}
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-8 border h-full transition-all duration-300 ${
                  project.isPlaceholder
                    ? 'border-dashed border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                    : 'border-slate-200 bg-slate-50/20 hover:bg-white hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border ${getDomainBadgeColor(project.domain)}`}>
                      {project.domain}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Details Bullet Points */}
                  {!project.isPlaceholder ? (
                    <ul className="space-y-3 mb-6">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckSquare size={14} className="text-teal-600 mt-0.5 shrink-0" />
                          <span className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="border border-dashed border-slate-200 bg-white rounded-xl p-4 mb-6 text-center">
                      <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Reserved Space
                      </p>
                      <p className="font-sans text-[11px] text-slate-500 font-light">
                        Placeholder slot for Udit to easily paste upcoming coursework or finance/operations models.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tech Stack Row */}
                {project.techStack && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mr-2">
                      Tools used:
                    </span>
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded font-mono text-[10px] uppercase font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
