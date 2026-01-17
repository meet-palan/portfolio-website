"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, MessageSquare } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Contact() {
  const { personal } = profileData
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus(null)
    try {
      const response = await fetch('https://formspree.io/f/mldnzjqd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus({ ok: true, message: "Message sent! I'll get back to you within 24 hours." })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ ok: false, message: 'There was a problem sending your message. Please try again.' })
      }
    } catch (err) {
      setStatus({ ok: false, message: 'There was a problem sending your message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding pb-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2 sm:px-0">
            Ready to discuss opportunities or collaborate on projects? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-effect rounded-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-text text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:meetpalan73@gmail.com"
                      className="text-accent hover:text-primary transition-colors text-xs sm:text-sm break-all"
                    >
                      meetpalan73@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-effect rounded-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-text text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:7383597783"
                      className="text-accent hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      7383597783
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 glass-effect rounded-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-text text-sm sm:text-base">Location</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rajkot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      Rajkot, Gujarat
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-text mb-3 sm:mb-4">Connect With Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary hover:shadow-lg transition-colors transition-shadow"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary hover:shadow-lg transition-colors transition-shadow"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-primary hover:shadow-lg transition-colors transition-shadow"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect p-4 sm:p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center space-x-2 sm:space-x-3">
                <MessageSquare className="text-accent" size={24} />
                <span>Send a Message</span>
              </h3>

              <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="_gotcha" style={{ display: 'none' }} readOnly />
                <div className="grid sm:grid-cols-2 gap-3">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-text font-medium text-sm sm:text-base">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect text-sm sm:text-base"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-text font-medium text-sm sm:text-base">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect text-sm sm:text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-text font-medium text-sm sm:text-base">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect text-sm sm:text-base"
                    placeholder="Subject"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-text font-medium text-sm sm:text-base">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none glass-effect text-sm sm:text-base"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </motion.div>

                {status && (
                  <div className={`text-xs sm:text-sm rounded-md px-3 py-2 ${status.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow disabled:opacity-60 text-sm sm:text-base"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-8 pt-3 border-t border-secondary/30"
        >
          <p className="text-text/60">
            © 2025 Meet Palan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}