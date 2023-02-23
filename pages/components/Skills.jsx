import React from 'react'

const Skills = () => {
    return (
        <section >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-800 py-5 dark:text-white">
            Skills
        </h2>
            <div className="radial-progress m-2 font-semibold text-[#38BDF8]" style={{ "--value": "90", "--size": "14rem", "--thickness": "1rem" }}>90% <br/> UI & UX  Design</div>
            <div className="radial-progress m-2 font-semibold text-[#38BDF8]" style={{ "--value": "60", "--size": "14rem", "--thickness": "1rem" }}>60% <br/>Backend development</div>
            <div className="radial-progress m-2 font-semibold text-[#38BDF8]" style={{ "--value": "80", "--size": "14rem", "--thickness": "1rem" }}>80% <br/>Graphic Design</div>
            <div className="radial-progress m-2 font-semibold text-[#38BDF8]" style={{ "--value": "85", "--size": "14rem", "--thickness": "1rem" }}>85% <br/>Planning & Analytics</div>
        </section>
    )
}

export default Skills
