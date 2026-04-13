import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import MagneticButton from './MagneticButton';
import { socials } from '../data/social';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Using environment variables from Vite
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not found in .env. Faking successful submit.");
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus('success');
        formRef.current.reset();
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setStatus('success');
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          setStatus('error');
        },
      );
  };

  return (
    <section id="contact" className="w-full py-24 min-h-screen flex flex-col justify-center">
      <SectionHeading title="Let's Talk" subtitle="Get in touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 bg-bg-secondary/20 rounded-[3rem] p-8 md:p-16 border border-border-color">
        {/* Left Side: Text and Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6">
              Got a project <br/> in mind?
            </h3>
            <p className="text-xl text-text-secondary leading-relaxed font-body max-w-md mb-12">
              Whether you need a new brand identity, a killer poster, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-text-secondary mb-6">Find me online</h4>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-bg-card font-medium text-text-primary border border-border-color hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="user_name" className="text-sm font-semibold text-text-primary pl-4">Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name"
                required
                placeholder="John Doe"
                className="w-full bg-bg-card/50 border border-border-color rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="user_email" className="text-sm font-semibold text-text-primary pl-4">Email</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email"
                required
                placeholder="john@example.com"
                className="w-full bg-bg-card/50 border border-border-color rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-text-primary pl-4">Message</label>
              <textarea 
                name="message" 
                id="message"
                required
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-bg-card/50 border border-border-color rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
              <MagneticButton>
                <div className="flex items-center gap-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </div>
              </MagneticButton>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium text-sm">Message sent successfully!</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-500">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium text-sm">Something went wrong. Try again.</span>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
