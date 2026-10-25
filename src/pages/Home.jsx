import React from 'react'
import Hero from '../components/Hero'
import LegalSupport from '../components/LegalSupport'
import Marquee from '../components/Marquee'
import CaseStudies from '../components/CaseStudies'
import ProfessionalLawyer from '../components/ProfessionalLawyer'
import TeamSection from '../components/TeamSection'

function Home() {
    return (
        <div className="Home">
            <Hero />
            <LegalSupport />
            <Marquee />
            <CaseStudies />
            <ProfessionalLawyer />
            <TeamSection />
        </div>
    )
}

export default Home

