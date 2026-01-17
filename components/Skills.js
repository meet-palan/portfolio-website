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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const tagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                   Skills & <span className="text-gradient">Expertise</span>
                 </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass-effect p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  variants={tagsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={`${skill}-${index}`}
                      variants={tagVariants}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(42, 157, 143, 0.2)", color: "#2A9D8F" }}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-accent/10 text-text/80 text-xs sm:text-sm rounded-full border border-accent/20 cursor-default transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-bounce"></div>
            <span className="text-text/70 text-xs sm:text-sm md:text-base">Always learning new technologies and AI Tools</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}