import React from 'react'
import "../styles/Skill.css"
export const Skills = () => {
  return (
    <div className='skillContainers'>
      <div className='skilltitle'><p>Digital Skills</p></div>
      <div className='skillCards'>

        <div className='skillCard'>
          <div className='subtitle'>Frontend</div>
          <div className='skillLists'>
            <li className='skillList'>Javascript</li>
            <li className='skillList'>React</li>
            <li className='skillList'>Redux Toolkit</li>  
            <li className='skillList'>HTML/CSS</li>
            <li className='skillList'>Material UI</li>
          </div>
        </div>

        <div className='skillCard'>
          <div className='subtitle'>Backend</div>
          <div className='skillLists'>
            <li className='skillList'>NodeJs</li>
            <li className='skillList'>ExpressJs</li>
            <li className='skillList'>MongoDB</li>
            <li className='skillList'>Mongoose</li>
            <li className='skillList'>Data Structure</li>
          </div>
        </div>

        <div className='skillCard'>
          <div className='subtitle'>Others</div>
          <div className='skillLists'>
            <li className='skillList'>C/C++/Python</li>
            <li className='skillList'>Solidity</li>
            <li className='skillList'>Problem Solving</li>
            <li className='skillList'>Algorithm</li>
            <li className='skillList'>English</li>

          </div>
        </div>
      </div>
    </div>
  )
}
