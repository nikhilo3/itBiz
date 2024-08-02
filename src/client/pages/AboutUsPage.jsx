import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import OurClient from '../components/section/OurClient'
import WoWeAre from '../components/section/WoWeAre'
import TechStack from '../components/section/TechStack'
import Contact_Form from '../components/section/Contact_Form'
import Services from '../components/section/Services'

function AboutUsPage() {
  return (
    <>
        <NavBar aboutPage={true}/>
        <OurClient/>
        <WoWeAre/>
        <TechStack/>
        <Services/>
        <Contact_Form/>
        <Footer/>
    </>
  )
}

export default AboutUsPage