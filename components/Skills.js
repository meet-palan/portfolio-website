"use client"
import { motion } from 'framer-motion'
import { Code, Users, Wrench } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Skills() {
  const { skills } = profileData

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'from-primary to-accent'
    },
    {
      title: 'Soft Skills', 
      icon: Users,
      skills: skills.soft,
      color: 'from-accent to-primary'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-primary/80 to-accent/80'
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  className="glass-effect p-6 rounded-xl overflow-hidden"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-text">
                      {category.title}
                    </h3>
                  </div>

                  <div className="max-h-[15rem] overflow-y-auto overflow-x-hidden pr-2">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={`${skill}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + index * 0.05, 
                          duration: 0.5 
                        }}
                        className="h-10 w-full flex items-center px-4 rounded-lg border border-accent/30 text-text/80 hover:text-accent hover:bg-accent/10 hover:shadow-sm transition-colors duration-200 cursor-default mb-2 last:mb-0 origin-center"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce"></div>
            <span className="text-text/70">Always learning new technologies and AI Tools</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}