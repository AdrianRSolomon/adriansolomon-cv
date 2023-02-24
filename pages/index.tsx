import type { NextPage } from 'next'
import Head from 'next/head'
import {Hero, About, Projects, Skills, Experience, Contact,} from "../components";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.50.1/dist/full.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
        <meta name="theme-color"  />
      </Head>


      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
      <Hero />
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
