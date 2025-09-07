"use client"
import { motion } from 'framer-motion'
import { profileData } from '../data/profile'

export default function About() {
  const { about } = profileData

  const stats = [
    { label: 'CGPA', value: about.stats.cgpa },
    { label: 'Projects', value: about.stats.projects, suffix: '+' },
    { label: 'Certifications', value: about.stats.certifications, suffix: '+' },
    { label: 'Internships', value: about.stats.internships, suffix: '' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Career Objective
            </h3>
            <p className="text-lg text-accent font-medium mb-6">
              {about.objective}
            </p>

            <div className="space-y-4 text-text/80">
              <p className="text-justify">{about.description}</p>
              <p className="text-justify">{about.passion}</p>
            </div>

            
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-text/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}