"use client"
import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Hero() {
  const { personal } = profileData

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-24 pb-24">
      {/* Bottom wavy shape */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px]">
          <defs>
            <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(44,62,80,0.12)" />
              <stop offset="100%" stopColor="rgba(42,157,143,0.12)" />
            </linearGradient>
          </defs>
          <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,90 L1440,120 L0,120 Z" fill="url(#heroWave)"></path>
        </svg>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-text leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">{personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-secondary font-medium"
            >
              {personal.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-text/80 max-w-xl"
            >
              {personal.tagline}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-3"
            >
              
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center space-x-2">
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="profile-glass w-80 h-80 flex items-center justify-center animate-float">
                <img 
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
              {/* Placeholder for profile image */}
                  {/* <div className="w-72 h-72 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center text-6xl font-bold text-primary/70">
                  MP
                </div>*/}
                
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 glass-effect p-3 rounded-full"
              >
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-full"
              >
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full glass-effect text-accent hover:text-primary hover:shadow-lg"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  )
}