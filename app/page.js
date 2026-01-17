import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}