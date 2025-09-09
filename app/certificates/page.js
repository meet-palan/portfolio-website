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
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
              All <span className="text-gradient">Certificates</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id || cert.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="glass-effect p-6 rounded-xl text-center card-hover relative"
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
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-text mb-2">{cert.name}</h4>
                <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                <p className="text-text/60 text-sm mb-4">{cert.date}</p>
                <p className="text-text/80 text-sm text-justify">{cert.description}</p>
                <div className="flex flex-wrap justify-center gap-1 mt-4">
                  {(cert.skills || []).slice(0, 4).map((skill, skillIndex) => (
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







