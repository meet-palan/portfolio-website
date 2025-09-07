"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Education() {
  const { education, certifications, workshops, achievements } = profileData

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary mb-8 flex items-center space-x-3"
          >
            <GraduationCap className="text-accent" size={32} />
            <span>Education</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full $${
                    edu.status === 'ongoing' 
                      ? 'bg-gradient-to-r from-accent to-primary animate-pulse-glow' 
                      : 'bg-gradient-to-r from-primary to-accent'
                  }`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-primary">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-semibold text-text">
                          {edu.field}
                        </p>
                      </div>
                      {edu.status === 'ongoing' && (
                        <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">
                          Ongoing
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-text/70">
                        <BookOpen size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text/70">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text/70">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-accent">
                        CGPA: {edu.cgpa}
                      </div>
                      <div className="text-sm text-text/60 bg-primary/10 px-2 py-1 rounded">
                        {edu.accreditation}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary mb-8 flex items-center space-x-3"
          >
            <Award className="text-accent" size={32} />
            <span>Certifications</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.slice(0, 3).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="text-white" size={24} />
                </motion.div>

                <h4 className="text-lg font-bold text-text mb-2">
                  {cert.name}
                </h4>
                <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                <p className="text-text/60 text-sm mb-4">{cert.date}</p>
                <p className="text-text/80 text-sm text-justify">{cert.description}</p>

                <div className="flex flex-wrap justify-center gap-1 mt-4">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/certificates">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View More
              </motion.button>
            </a>
          </div>
        </div>

        {/* Workshops & Achievements */}
        
      </div>
    </section>
  )
}