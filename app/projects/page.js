"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, ExternalLink, AlertTriangle, Lightbulb, CheckCircle, Target } from 'lucide-react'
import { profileData } from '../../data/profile'

export default function AllProjectsPage() {
  const { projects } = profileData
  const [activeProject, setActiveProject] = useState(null)
  const isModalOpen = Boolean(activeProject)

  return (
    <section className="section-padding bg-white">
      <motion.div
        className="container-custom"
        animate={{ scale: isModalOpen ? 0.98 : 1, opacity: isModalOpen ? 0.95 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-xl overflow-hidden group shadow-lg"
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="relative z-10 p-6 flex flex-col h-64 justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 text-xs rounded-full bg-white/15 text-white/90 backdrop-blur">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white/15 text-white hover:bg-white/25 transition"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(6px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center px-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0, y: 100, rotateX: -15, rotateY: 5 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: -50, rotateX: 15 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22, duration: 0.45 }}
              className="glass-effect max-w-2xl w-full rounded-xl overflow-hidden border border-accent/50 shadow-2xl relative"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(42, 157, 143, 0.1)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40">
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
                  className="absolute bottom-3 left-4 right-4"
                >
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{activeProject.title}</h3>
                </motion.div>
              </div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6 bg-white"
              >
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-text mb-4 text-justify"
                >
                  {activeProject.description}
                </motion.p>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-4 text-sm"
                >
                  {[
                    { title: 'Problem', content: activeProject.problem, icon: AlertTriangle, textColor: 'text-red-700', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
                    { title: 'Approach', content: activeProject.approach, icon: Lightbulb, textColor: 'text-yellow-700', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
                    { title: 'Solution', content: activeProject.solution, icon: CheckCircle, textColor: 'text-green-700', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
                    { title: 'Impact', content: activeProject.impact, icon: Target, textColor: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' }
                  ].map((s, i) => (
                    <motion.div key={s.title} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }} className={`p-4 rounded-lg border ${s.bgColor} ${s.borderColor}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <s.icon className={`w-5 h-5 ${s.textColor}`} />
                        <h4 className={`font-semibold ${s.textColor}`}>{s.title}</h4>
                      </div>
                      <p className="text-text/90 text-justify text-sm">{s.content}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.4 }} className="flex items-center justify-end gap-3 mt-6">
                  {activeProject.githubUrl && (
                    <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300">
                      <ExternalLink size={16} /> GitHub
                    </motion.a>
                  )}
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveProject(null)} className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition-all duration-300">
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







