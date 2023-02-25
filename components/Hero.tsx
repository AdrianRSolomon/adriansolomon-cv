import React from 'react'


const Hero = () => {
    return (
        <section>
  <div className="max-w-screen-xl mx-auto mt-20">
    <h1 className="mb-4 text-4xl font-bold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      I'm Adrian Solomon
    </h1>
    <p className="mb-8 text-lg text-center mx-2 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        I am dedicated to crafting intuitive and seamless user experiences for websites and applications. 
        I have a deep understanding of user behavior and design principles, and use this knowledge to create interfaces that are easy to use and aesthetically pleasing.
    </p>
   
           <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 ">
           <a
             href="/ADRIANSresume.pdf"
             className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#38BDF8] hover:bg-[#B4C6EF] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
           >
             Resume
             <svg
               className="ml-2 -mr-1 w-5 h-5"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fillRule="evenodd"
                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                 clipRule="evenodd"
               />
             </svg>
           </a>
           <a
             href="#contact"
             className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
           >
             <svg
               className="mr-2 -ml-1 w-5 h-5"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
             </svg>
             Get in touch
           </a>
         </div>
      
    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500">
      <img className="object-cover w-24 rounded-lg "
        src='/js.png'
        alt="javascript"/>
         <img className="object-cover w-24 rounded-lg m-3"
        src='/typescript.png'
        alt="typescript"/>
        <img className="object-cover w-24 rounded-lg m-3"
        src='/photoshop.png'
        alt="photoshop"/>
        <img className="object-cover w-24 rounded-lg m-3"
        src='/illustrator.png'
        alt="illustrator"/>
        <img className="object-cover w-24 rounded-lg m-3"
        src='/node-js.png'
        alt="nodejs"/>
        <img className="object-cover w-24 rounded-lg m-3"
        src='/stripe.png'
        alt="stripe"/>
      </div>
    </div>
  </div>

 
</section>

    )
}

export default Hero
