import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
            <p className="text-lg text-gray-50 mx-2 font-semibold">
            Adrian Solomon
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
            © Copyright 2023. All Rights Reserved.
            </p>
            <div className="flex">
            <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
            >
           <img className="object-cover w-6 rounded-lg "
            src='/behance (1).png'
            alt=""/>
            </a>
            <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
            >
           <img className="object-cover w-6 rounded-lg "
            src='/github.png'
            alt=""/>
            </a>
            <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
            >
           <img className="object-cover w-6 rounded-lg "
            src='/facebook (1).png'
            alt=""/>
            </a>
            <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
            >
           <img className="object-cover w-6 rounded-lg "
            src='/instagram (1).png'
            alt=""/>
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer
