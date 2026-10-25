import React from 'react'
import Hero from '../components/Hero'
import LegalSupport from '../components/LegalSupport'
import Marquee from '../components/Marquee'
import CaseStudies from '../components/CaseStudies'
import ProfessionalLawyer from '../components/ProfessionalLawyer'
import TeamSection from '../components/TeamSection'
import FAQSection from '../components/FAQSection'
import { HOME_FAQS } from '../seo/faqs'

function Home() {
    return (
        <div className="Home">
            <Hero />
            <LegalSupport />
            <Marquee />
            <CaseStudies />
            <ProfessionalLawyer />
            <TeamSection />
            <div className="bg-[#0f0f0f] py-16 sm:py-20 px-4 sm:px-6 md:px-8">
                <FAQSection faqs={HOME_FAQS} />
            </div>
        </div>
    )
}

export default Home

