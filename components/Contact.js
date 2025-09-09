"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, User, MessageSquare } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Contact() {
  const { personal, references } = profileData
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-text/70 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on projects? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Email</h4>
                    <a 
                      href="mailto:meetpalan73@gmail.com"
                      className="text-accent hover:text-primary transition-colors"
                    >
                      meetpalan73@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Phone</h4>
                    <a 
                      href="tel:7383597783"
                      className="text-accent hover:text-primary transition-colors"
                    >
                      7383597783
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text">Location</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rajkot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors"
                    >
                      Rajkot, Gujarat
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-text mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
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

            {/* References 
            <div>
              <h4 className="text-lg font-bold text-text mb-4">Professional References</h4>
              <div className="space-y-3">
                {references.map((ref, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="glass-effect p-4 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                        <User className="text-white" size={16} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-text">{ref.name}</h5>
                        <p className="text-accent text-sm">{ref.position}</p>
                        <p className="text-text/60 text-sm">{ref.phone}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center space-x-3">
                <MessageSquare className="text-accent" size={28} />
                <span>Send a Message</span>
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" name="_gotcha" style={{ display: 'none' }} readOnly />
                <div className="grid md:grid-cols-2 gap-3">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-text font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-text font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-text font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors glass-effect"
                    placeholder="Subject"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-text font-medium">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none glass-effect"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </motion.div>

                {status && (
                  <div className={`text-sm rounded-md px-3 py-2 ${status.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-2.5 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow disabled:opacity-60"
                >
                  <Send size={18} />
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
          viewport={{ once: true }}
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