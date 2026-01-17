"use client"
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Experience() {
  const { experience } = profileData

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, positioned to align with circle centers */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative flex items-start mb-8 sm:mb-12"
              >
                {/* Timeline dot with glow and inner filled circle - hidden on mobile */}
                <div className="hidden sm:block relative flex-shrink-0 w-16 mr-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                      job.current
                        ? 'shadow-[0_0_0_8px_rgba(42,157,143,0.18),0_0_24px_8px_rgba(42,157,143,0.35)]'
                        : 'shadow-[0_0_0_8px_rgba(44,62,80,0.12),0_0_20px_6px_rgba(44,62,80,0.25)]'
                    } bg-white`}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 glass-effect rounded-xl p-4 sm:p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">
                        {job.title}
                      </h3>
                      <h4 className="text-base sm:text-lg font-semibold text-text mb-2">
                        {job.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text/60">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        {job.current && (
                          <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 ">
                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-semibold text-text mb-2 sm:mb-3 flex items-center space-x-2 text-sm sm:text-base">
                        <span>Key Responsibilities</span>
                      </h5>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-100px" }}
                          transition={{ 
                            delay: index * 0.2 + respIndex * 0.1, 
                            duration: 0.5 
                          }}
                          className="flex items-start space-x-2 text-text/80 text-xs sm:text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="flex-1">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}