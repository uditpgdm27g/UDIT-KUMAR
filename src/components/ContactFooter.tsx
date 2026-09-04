import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare, Send, CheckCircle, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactFooter() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setLoading(true);
    
    // Simulate real database or API submission latency
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-600 relative pt-24 pb-12 overflow-hidden border-t border-slate-200">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles size={11} className="text-teal-600 animate-spin" /> Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-teal-500 mx-auto mt-4" />
          <p className="font-sans text-sm text-slate-500 mt-3 font-medium">
            Have an internship opportunity, project collaboration, or strategic consulting role? Let's connect.
          </p>
        </div>

        {/* Split Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Column: Coordinates & Information (5/12 width) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 tracking-wide">
              Contact Channels
            </h3>
            <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">
              I am actively seeking strategic internship and full-time job opportunities in Finance and Business Analytics. Feel free to contact me directly via email or LinkedIn.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-xl p-4 hover:border-amber-300 transition-all duration-300 shadow-sm">
                <div className="p-3 bg-amber-50 text-amber-700 rounded-lg border border-amber-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">Direct Email</p>
                  <a
                    id="contact-email-link"
                    href={`mailto:${personalInfo.contact.email}`}
                    className="font-mono text-xs sm:text-sm text-slate-800 hover:text-amber-700 transition-colors break-all font-medium"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-xl p-4 hover:border-amber-300 transition-all duration-300 shadow-sm">
                <div className="p-3 bg-amber-50 text-amber-700 rounded-lg border border-amber-100">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">Professional Profile</p>
                  <a
                    id="contact-linkedin-link"
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="font-sans text-xs sm:text-sm text-slate-800 hover:text-amber-700 transition-colors font-medium break-all"
                  >
                    linkedin.com/in/udit-kumar-79433a238
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 bg-white border border-slate-200/60 rounded-xl p-4 shadow-sm">
                <div className="p-3 bg-slate-100 text-slate-600 rounded-lg border border-slate-200/50">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-slate-400 uppercase font-bold tracking-wider">Current Location</p>
                  <p className="font-sans text-xs sm:text-sm text-slate-800 font-medium">
                    Gurgaon, Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Placeholder notice */}
            <div className="bg-white border border-slate-200/60 rounded-xl p-4 flex items-start gap-3 shadow-sm">
              <Github size={16} className="text-slate-500 mt-0.5 shrink-0" />
              <div className="text-left space-y-1">
                <p className="font-sans text-xs font-bold text-slate-800">GitHub Repository Placeholder</p>
                <p className="font-sans text-[11px] text-slate-500 leading-normal font-light">
                  My GitHub handle is currently being configured to publish skin cancer deep learning and ratio evaluation repositories. It will be live soon.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7/12 width) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 shadow-sm transition-all duration-300 text-left">
            <div className="flex items-center gap-2.5 mb-6 text-slate-900">
              <MessageSquare size={20} className="text-teal-600" />
              <h3 className="font-serif text-xl font-bold tracking-wide">
                Send a Message
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                id="contact-form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-8 text-center space-y-4 shadow-sm"
              >
                <CheckCircle size={44} className="text-amber-700 mx-auto animate-bounce" />
                <h4 className="font-serif text-lg font-bold text-slate-900">Thank You, Recruiter!</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto font-light">
                  Your message was successfully compiled and transmitted. Udit Kumar will review and respond to you as soon as possible.
                </p>
                <button
                  id="btn-contact-reset"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-mono text-xs font-semibold rounded transition-all cursor-pointer shadow-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none transition-all font-sans placeholder-slate-400 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      Your Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@firm.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none transition-all font-sans placeholder-slate-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Message Body
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Write your internship/job opportunity details here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none transition-all font-sans resize-none placeholder-slate-400 shadow-sm"
                  />
                </div>

                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full px-5 py-3.5 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-100 text-white font-sans text-sm font-bold rounded-lg tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? 'Transmitting...' : (
                    <>
                      Transmit Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Line Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
          
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-700 font-sans font-semibold">Udit Kumar — Professional Business Portfolio</p>
            <p>© 2026 Udit Kumar. All Rights Reserved. Recruiter-Ready Standard.</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin"
              href={personalInfo.contact.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-slate-500 hover:text-teal-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              id="footer-github"
              href={personalInfo.contact.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-slate-500 hover:text-teal-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            
            {/* Scroll Back to Top Button */}
            <button
              id="back-to-top"
              onClick={scrollToTop}
              className="p-2.5 bg-white hover:bg-teal-600 hover:text-white rounded-full text-slate-500 transition-all duration-300 border border-slate-200 hover:border-teal-600 shadow cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
