import type { NextPage } from 'next'
import {Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer} from "./components";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
