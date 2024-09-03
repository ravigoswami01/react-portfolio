import React from 'react'
import Titile from '../Home/Titile'
import Eduection from './Eduection'
import Skills from './Skills'

const Resume = () => {
  return (
     <section id="resume">
        <Titile title="My" subTitle="Resume" />
        <Eduection />
        <Titile title="My" subTitle="Skills"></Titile>
        <Skills />
    </section>
  )
}

export default Resume
