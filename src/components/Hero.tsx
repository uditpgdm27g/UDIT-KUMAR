import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { FileText, Linkedin, Github, Mail, User, Video, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [mediaTab, setMediaTab] = useState<'photo' | 'video'>('photo');
  const [photoError, setPhotoError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const handleContactScroll = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 bg-gradient-to-br from-indigo-50/70 via-rose-50/60 to-emerald-50/70 text-slate-800 flex items-center justify-center overflow-hidden border-b border-slate-200/50"
    >
      {/* Decorative corporate grid background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Decorative ambient soft glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag/Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 border border-amber-200/60 rounded-full font-sans text-xs text-amber-800 uppercase font-bold tracking-wider shadow-sm">
                <Sparkles size={12} /> McKinsey/BCG Competitor Standard Portfolio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600">{personalInfo.name}</span>
            </motion.h1>

            {/* Subtitle / Candidate Information */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="font-sans text-lg sm:text-xl font-semibold text-slate-800">
                {personalInfo.title}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-500 font-medium">
                {personalInfo.institution}
              </p>
            </motion.div>

            {/* Short punchy one-liner */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed border-l-2 border-teal-500 pl-4 max-w-2xl font-light"
            >
              An engineer-turned-strategist bridging advanced machine learning precision with financial analytics to drive corporate value, operational efficiency, and scalable business strategy.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary Contact CTA */}
              <button
                id="hero-cta-contact"
                onClick={handleContactScroll}
                className="px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-sans text-sm font-bold rounded tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                Contact Me <ArrowRight size={16} />
              </button>

              {/* Email ID Link */}
              <a
                id="hero-cta-email"
                href={`mailto:${personalInfo.contact.email}`}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 font-sans text-sm font-semibold rounded tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Mail size={16} className="text-teal-600" /> {personalInfo.contact.email}
              </a>

              {/* LinkedIn Link */}
              <a
                id="hero-cta-linkedin"
                href={personalInfo.contact.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-3.5 bg-sky-50 hover:bg-sky-100 border border-sky-100 text-sky-800 font-sans text-sm font-semibold rounded tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Linkedin size={16} className="text-sky-600" /> View LinkedIn
              </a>

              {/* GitHub Link Placeholder */}
              <a
                id="hero-cta-github"
                href={personalInfo.contact.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 font-sans text-sm font-semibold rounded tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Github size={16} className="text-slate-400" /> View GitHub <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-sans font-medium tracking-wide">Placeholder</span>
              </a>
            </motion.div>

            {/* Small email anchor details */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-xs font-sans text-slate-500 pt-2 tracking-wide font-medium"
            >
              <div className="flex items-center gap-1.5">
                <Mail size={12} className="text-teal-600" />
                <span>{personalInfo.contact.email}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Media Center (Photo/Video Swap Container) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl overflow-hidden shadow-xl">
              {/* Media Header Toggles */}
              <div className="flex border-b border-slate-200/50 bg-slate-50/80 p-2">
                <button
                  id="tab-media-photo"
                  onClick={() => setMediaTab('photo')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    mediaTab === 'photo'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                  }`}
                >
                  <User size={14} /> Profile Photo
                </button>
                <button
                  id="tab-media-video"
                  onClick={() => setMediaTab('video')}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    mediaTab === 'video'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                  }`}
                >
                  <Video size={14} /> Intro Video
                </button>
              </div>

              {/* Media Content Display Area */}
              <div className="relative aspect-square p-6 flex flex-col items-center justify-center bg-slate-50/30">
                {mediaTab === 'photo' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {!photoError ? (
                      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                        <img
                          src="/photo.jpg"
                          alt="Udit Kumar"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={() => setPhotoError(true)}
                        />
                      </div>
                    ) : (
                      /* Circle Placeholder */
                      <div className="w-56 h-56 rounded-full bg-white border-4 border-slate-100 shadow-inner flex flex-col items-center justify-center text-center p-4 relative group overflow-hidden">
                        <User size={48} className="text-slate-400 mb-2 group-hover:scale-105 transition-transform duration-300" />
                        <span className="font-sans text-xs text-teal-600 font-semibold">photo.jpg</span>
                        <span className="font-sans text-[10px] text-slate-500 mt-1">Ready to Swap</span>
                        
                        {/* Technical Mock Ring */}
                        <div className="absolute inset-0 border-2 border-teal-500/20 rounded-full animate-pulse pointer-events-none" />
                      </div>
                    )}
                    <div className="mt-4 text-center">
                      <p className="font-serif text-lg font-bold text-slate-800">Udit Kumar</p>
                      <p className="font-sans text-xs text-teal-600 tracking-wide font-semibold">Great Lakes Candidate 2027</p>
                    </div>
                    
                    {/* Developer tip */}
                    <span className="absolute bottom-0 text-[10px] font-sans text-slate-400 text-center font-light">
                      Tip: Place your portrait as public/photo.jpg to display it.
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {!videoError ? (
                      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-md">
                        <video
                          src="/video1.mp4"
                          controls
                          className="w-full h-full object-contain"
                          onError={() => setVideoError(true)}
                        />
                      </div>
                    ) : (
                      /* Video Player Frame Placeholder */
                      <div className="w-full aspect-video rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-4 relative group">
                        <Video size={40} className="text-slate-400 mb-2 group-hover:scale-105 transition-transform duration-300" />
                        <span className="font-sans text-xs text-teal-600 font-semibold">video1.mp4</span>
                        <span className="font-sans text-[11px] text-slate-500 mt-1">Corporate Presentation Pitch</span>
                        <span className="font-sans text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mt-3 tracking-wide uppercase font-semibold">Ready to Embed</span>
                      </div>
                    )}
                    <div className="mt-6 text-center max-w-xs">
                      <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                        "Welcome to my corporate portfolio! Here I summarize how I blend technology and business strategy."
                      </p>
                    </div>
                    
                    {/* Developer tip */}
                    <span className="absolute bottom-0 text-[10px] font-sans text-slate-400 text-center font-light">
                      Tip: Place your video as public/video1.mp4 to embed it.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
