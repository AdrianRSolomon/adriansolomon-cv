import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const About = dynamic(() => import('../components/About'))
const Projects = dynamic(() => import('../components/Projects'))
const Skills = dynamic(() => import('../components/Skills'))
const Experience = dynamic(() => import('../components/Experience'))
const Contact = dynamic(() => import('../components/Contact'))

const Home: NextPage = () => {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      </main>
 
    </>
  )
}

export default Home
