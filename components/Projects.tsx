import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Projects = () => {
  let [categories] = useState({
    All: [
      {
        id: 1,
        img: '/project-2.jpg',
        title: 'Modern UI/UX website using React.js & Tailwind CSS',
        date: 'concept',
        link: 'https://bankproject-sigma.vercel.app/',
      },
      {
        id: 2,
        img: '/project-1.jpg',
        title: "Modern website using React.js, APIs ",
        date: 'concept',
        link: 'https://match-realtor.vercel.app/',
      },
      {
        id: 3,
        img: '/project-3.jpg',
        title: "Next JS Sanity Ecommerce ",
        date: 'concept',
        link: 'https://sanity-stripev1.vercel.app/',
      },
      {
        id: 4,
        img: '/project-4.jpg',
        title: "Manding Page Template",
        date: 'concept',
        link: 'https://landing-page-temp.vercel.app/',
      },
      {
        id: 1,
        img: '/ui1.jpg',
      },
      {
        id: 2,
        img: '/ui2.jpg',
      },
      {
        id: 3,
        img: '/ui3.jpg',
      },
      {
        id: 4,
        img: '/ui4.jpg',
      },
      {
        id: 5,
        img: '/smm.jpg',
      },
      {
        id: 6,
        img: '/Bar_of_Chocolate_v01.jpg',
      },
      {
        id: 7,
        img: '/Bar_of_Chocolate_v02.jpg',
      },
      {
        id: 8,
        img: '/apparel.jpg',
      },
      {
        id: 9,
        img: '/laptop_ui.jpg',
      },
    ],
    Website : [
      {
        id: 1,
        img: '/project-2.jpg',
        title: 'Modern React.js & Tailwind CSS',
        link: 'https://bankproject-sigma.vercel.app/',
      },
      {
        id: 2,
        img: '/project-1.jpg',
        title: "Modern website using React.js, APIs ",
        link: 'https://match-realtor.vercel.app/',
      },
    ],
    Branding: [
      {
        id: 1,
        img: '/ui1.jpg',
      },
      {
        id: 2,
        img: '/ui2.jpg',
      },
      {
        id: 3,
        img: '/ui3.jpg',
      },
      {
        id: 4,
        img: '/ui4.jpg',
      },
      {
        id: 5,
        img: '/smm.jpg',
      },
      {
        id: 6,
        img: '/Bar_of_Chocolate_v01.jpg',
      },
      {
        id: 7,
        img: '/Bar_of_Chocolate_v02.jpg',
      },
      {
        id: 8,
        img: '/apparel.jpg',
      },
      {
        id: 9,
        img: '/laptop_ui.jpg',
      },
    ],
  })

  return (
    <section id="project"> 
     <div className="container">
     <h2 className="text-4xl font-semibold tracking-tight text-gray-800 py-5 dark:text-white">
      Projects
      </h2>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="container">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md p-3 "
                  >
                    <img className="object-cover w-full rounded-lg h-96"
                    src={post.img}
                    alt="projets"/>
                    <h2 className="mt-4 text-xl font-semibold text-gray-100 capitalize ">
                    {post.title}</h2>
                    <a
                      href={post.link} 
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </section>
   
  )
}

export default Projects
