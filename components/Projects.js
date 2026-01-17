"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, AlertTriangle, Lightbulb, CheckCircle, Target } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Projects() {
  const { projects } = profileData
  const [activeProject, setActiveProject] = useState(null)
  const isModalOpen = Boolean(activeProject)

  return (
    <section id="projects" className="section-padding bg-white">
      <motion.div
        className="container-custom"
        animate={{ scale: isModalOpen ? 0.98 : 1, opacity: isModalOpen ? 0.95 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="relative z-10 p-4 sm:p-6 flex flex-col h-48 sm:h-56 md:h-64 justify-end">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white/15 text-white hover:bg-white/25 transition text-sm sm:text-base"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition text-sm sm:text-base"
                  >
                    <Eye size={14} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a href="/projects" className="btn-secondary inline-block text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">View All Projects</a>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(6px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center px-2 sm:px-4 py-4 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ 
                scale: 0.3, 
                opacity: 0, 
                y: 100,
                rotateX: -15,
                rotateY: 5
              }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                rotateY: 0
              }}
              exit={{ 
                scale: 0.5, 
                opacity: 0, 
                y: -50,
                rotateX: 15
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 22, duration: 0.45 }}
              className="glass-effect max-w-2xl w-full rounded-xl overflow-hidden border border-accent/50 shadow-2xl relative my-auto"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 157, 143, 0.1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Subtle glow - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="hidden sm:block absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl pointer-events-none"
              />

              {/* Lightweight particles - hidden on mobile */}
              <div className="hidden sm:block pointer-events-none absolute top-0 left-0 right-0 h-40 overflow-visible">
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{ opacity: [0, 1, 0], y: [-10, -120], scale: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-accent/40 blur-[1px]"
                    style={{ left: `${8 + i * 11}%` }}
                  />
                ))}
              </div>
              
              <div className="relative h-32 sm:h-40">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4"
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg">{activeProject.title}</h3>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-4 sm:p-6 bg-white max-h-[calc(100vh-200px)] overflow-y-auto"
              >
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-text mb-3 sm:mb-4 text-justify text-sm sm:text-base"
                >
                  {activeProject.description}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm"
                >
                  {[
                    { title: 'Problem', content: activeProject.problem, icon: AlertTriangle, color: 'red', bgColor: 'bg-red-50', borderColor: 'border-red-200', textColor: 'text-red-700' },
                    { title: 'Approach', content: activeProject.approach, icon: Lightbulb, color: 'yellow', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', textColor: 'text-yellow-700' },
                    { title: 'Solution', content: activeProject.solution, icon: CheckCircle, color: 'green', bgColor: 'bg-green-50', borderColor: 'border-green-200', textColor: 'text-green-700' },
                    { title: 'Impact', content: activeProject.impact, icon: Target, color: 'blue', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', textColor: 'text-blue-700' }
                  ].map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                      className={`p-3 sm:p-4 rounded-lg border ${section.bgColor} ${section.borderColor}`}
                    >
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <section.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${section.textColor}`} />
                        <h4 className={`font-semibold text-xs sm:text-sm ${section.textColor}`}>{section.title}</h4>
                      </div>
                      <p className="text-text/90 text-justify text-xs sm:text-sm">{section.content}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 mt-4 sm:mt-6"
                >
                  {activeProject.githubUrl && (
                    <motion.a 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={activeProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm sm:text-base"
                    >
                      <ExternalLink size={14} /> GitHub
                    </motion.a>
                  )}
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProject(null)} 
                    className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}