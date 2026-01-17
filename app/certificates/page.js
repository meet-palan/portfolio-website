"use client"
import { motion } from 'framer-motion'
import { Award, Link as LinkIcon } from 'lucide-react'
import { profileData } from '../../data/profile'

export default function CertificatesPage() {
  const { certifications } = profileData

  return (
    <main className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4">
              All <span className="text-gradient">Certificates</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id || cert.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="glass-effect p-4 sm:p-6 rounded-xl text-center card-hover relative"
              >
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary"
                    aria-label="Open certificate website"
                  >
                    <LinkIcon size={14} />
                  </a>
                )}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="text-white" size={20} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-text mb-2 break-words">{cert.name}</h4>
                <p className="text-accent font-semibold mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-text/60 text-xs sm:text-sm mb-3 sm:mb-4">{cert.date}</p>
                <p className="text-text/80 text-xs sm:text-sm text-justify">{cert.description}</p>
                <div className="flex flex-wrap justify-center gap-1 mt-3 sm:mt-4">
                  {(cert.skills || []).slice(0, 10).map((skill, skillIndex) => (
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
        </div>
      </section>
    </main>
  )
}


