import React from 'react'


const About = () => {
    return (
<section id="about">
  <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
    <div className="flex justify-center xl:w-1/2">
      <img
        className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full border-8 border-[#38BDF8]"
        src="/propic.png"
        alt=""
        style={{ "--value": "90", "--size": "14rem", "--thickness": "1rem" }}
      />
    </div>
    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
      <h2 className="text-4xl text font-semibold tracking-tight text-gray-800  dark:text-white">
      About Me
      </h2>
      <p className="block max-w-2xl text-lg text-start mt-4 text-gray-500 dark:text-gray-300">
        As a web developer, I bring a strong technical skillset and a passion for creating engaging and user-friendly websites. 
        I have a deep understanding of web standards and programming languages, including HTML, CSS, JavaScript, and others, and 
        use this knowledge to build and maintain high-quality websites. I am also knowledgeable in accessibility guidelines and SEO principles, 
        ensuring that all my projects meet the highest standards for functionality and searchability.
      </p>
      <div className="mt-6 sm:-mx-2">

      </div>
    </div>
  </div>
</section>



    )
}

export default About
