"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Link as LinkIcon } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Education() {
  const { education, certifications } = profileData

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        {/* Education */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 flex items-center space-x-2 sm:space-x-3"
          >
            <GraduationCap className="text-accent" size={24} />
            <span>Education</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-4 sm:p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ${
                    edu.status === 'ongoing' 
                      ? 'bg-gradient-to-r from-accent to-primary animate-pulse-glow' 
                      : 'bg-gradient-to-r from-primary to-accent'
                  }`}>
                    <GraduationCap className="text-white" size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-primary break-words">
                          {edu.degree}
                        </h4>
                        <p className="text-base sm:text-lg font-semibold text-text break-words">
                          {edu.field}
                        </p>
                      </div>
                      {edu.status === 'ongoing' && (
                        <span className="px-2 py-1 bg-accent text-white text-xs rounded-full flex-shrink-0">
                          Ongoing
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2 text-text/70 text-xs sm:text-sm">
                        <BookOpen size={14} />
                        <span className="break-words">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text/70 text-xs sm:text-sm">
                        <MapPin size={14} />
                        <span className="break-words">{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-text/70 text-xs sm:text-sm">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="text-xl sm:text-2xl font-bold text-accent">
                        CGPA: {edu.cgpa}
                      </div>
                      <div className="text-xs sm:text-sm text-text/60 bg-primary/10 px-2 py-1 rounded">
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
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 flex items-center space-x-2 sm:space-x-3"
          >
            <Award className="text-accent" size={24} />
            <span>Certifications</span>
          </motion.h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {certifications.slice(0, 3).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-4 sm:p-6 rounded-xl text-center card-hover relative"
              >
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary"
                    aria-label="Open certificate website"
                  >
                    <LinkIcon size={16} />
                  </a>
                )}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  <Award className="text-white" size={20} />
                </motion.div>

                <h4 className="text-base sm:text-lg font-bold text-text mb-2 break-words">
                  {cert.name}
                </h4>
                <p className="text-accent font-semibold mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-text/60 text-xs sm:text-sm mb-3 sm:mb-4">{cert.date}</p>
                <p className="text-text/80 text-xs sm:text-sm text-justify">{cert.description}</p>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-3 sm:mt-4">
                    {cert.skills.slice(0, 10).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <a href="/certificates">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                View More
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}