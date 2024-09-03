import React from 'react'
import Titile from '../Home/Titile'
import AboutMe from './AboutMe'
import MyService from './MyService'
import FunFact from './FunFact'


const About = () => {
  return (
    <section id="about" className='w-full'>
        <Titile title="About" subTitle="Me" />
        <AboutMe />
        <Titile title="My" subTitle="Services" />
        <MyService />
        <Titile title="Fun" subTitle="Fact" />
        <FunFact />
    </section>
  )
}

export default About
