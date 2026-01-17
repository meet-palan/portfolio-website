"use client"
import { useState, useEffect, useMemo } from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { Download, ChevronDown, Linkedin, Github, Mail, ArrowRight } from 'lucide-react'
import { profileData } from '../data/profile'

const ROLES = ["Business Analyst", "Product Manager", "AI Enthusiast"]

export default function Hero() {
  const { personal } = profileData
  const roles = useMemo(() => ROLES, [])
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mountKey, setMountKey] = useState(0)

  // Reset on mount to ensure fresh animations
  useEffect(() => {
    setMountKey(prev => prev + 1)
  }, [])
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  // Typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const delay = isDeleting ? 0 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#2C3E50 1px, transparent 1px), linear-gradient(90deg, #2C3E50 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }} 
      />

      {/* Parallax Shapes - Hidden on mobile for better performance */}
      <div className="hidden md:block">
        <BackgroundShape key={`shape1-${mountKey}`} mouseX={mouseX} mouseY={mouseY} color="bg-accent" size="w-64 h-64" top="10%" left="5%" depth={20} delay={0} />
        <BackgroundShape key={`shape2-${mountKey}`} mouseX={mouseX} mouseY={mouseY} color="bg-primary" size="w-96 h-96" top="40%" left="60%" depth={40} delay={1} />
        <BackgroundShape key={`shape3-${mountKey}`} mouseX={mouseX} mouseY={mouseY} color="bg-secondary" size="w-48 h-48" top="70%" left="20%" depth={10} delay={2} />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-20 lg:pt-0">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 w-full"
          >
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
                Hi, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {personal.name}
                </span>
              </h1>

              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary font-light">
                <span className="mr-2">I am a</span>
                <span className="font-semibold text-primary relative">
                  {displayText}
                  <span className="absolute -right-1 top-0 h-full w-[2px] bg-accent animate-blink"></span>
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-secondary/80 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              {personal.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary border border-gray-200 rounded-xl font-semibold hover:border-primary/20 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 lg:pt-4">
              <SocialLink href={personal.linkedin} icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href={personal.github} icon={<Github />} label="GitHub" />
              <SocialLink href={`mailto:${personal.email || 'meetpalan73@gmail.com'}`} icon={<Mail />} label="Email" />
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full lg:w-auto"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full blur-[100px] opacity-40 animate-pulse-glow" />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-full border-4 border-white/50 shadow-2xl overflow-hidden z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image 
                  src={personal.profileImage} 
                  alt={personal.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/60 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase hidden sm:block">Scroll</span>
        <ChevronDown className="animate-bounce w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
    </section>
  )
}

function BackgroundShape({ mouseX, mouseY, color, size, top, left, depth, delay }) {
  const x = useTransform(mouseX, [-0.5, 0.5], [-depth, depth])
  const y = useTransform(mouseY, [-0.5, 0.5], [-depth, depth])
  
  return (
    <motion.div
      className={`absolute ${color} rounded-full blur-3xl opacity-10`}
      style={{ 
        width: size, 
        height: size, 
        top, 
        left, 
        x, 
        y 
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 20,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="p-3 bg-white rounded-full text-secondary hover:text-primary hover:shadow-lg border border-gray-100 transition-all"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}