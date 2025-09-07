"use client"
import { motion } from 'framer-motion'
import { Calendar, User, Target, Lightbulb, CheckCircle } from 'lucide-react'
import { profileData } from '../../data/profile'

export default function AllProjectsPage() {
  const { projects } = profileData

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
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

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-xl overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-text/60">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User size={16} />
                            <span>{project.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-text/80 mb-6 leading-relaxed text-justify">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Target className="text-red-500 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <h4 className="font-semibold text-text mb-1">Problem</h4>
                            <p className="text-text/70 text-sm text-justify">{project.problem}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Lightbulb className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <h4 className="font-semibold text-text mb-1">Approach</h4>
                            <p className="text-text/70 text-sm text-justify">{project.approach}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <h4 className="font-semibold text-text mb-1">Solution</h4>
                            <p className="text-text/70 text-sm text-justify">{project.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm rounded-full font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}







