import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LegalSupport from './components/LegalSupport'
import Marquee from './components/Marquee'
import CaseStudies from './components/CaseStudies'
import ProfessionalLawyer from './components/ProfessionalLawyer'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <LegalSupport />
            <Marquee />
            <CaseStudies />
            <ProfessionalLawyer />
            <TeamSection />
            <Footer />
        </div>
    )
}

export default App
