import type { NextPage } from 'next'
import Head from 'next/head';
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
      <Head>
        <title>
         I'm Adrian Solomon
        </title>
        <meta
          name="description"
          content="CI am dedicated to crafting intuitive and seamless user experiences for websites and applications."
          key="desc"
        />
          <meta
          property="og:image"
          content="ui.jpg"
        />
      </Head>
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
