import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import Team from './pages/Team'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CyberCrime from './pages/practice-areas/CyberCrime'
import BankingFinance from './pages/practice-areas/BankingFinance'
import CriminalLaw from './pages/practice-areas/CriminalLaw'
import CivilLawCorporate from './pages/practice-areas/CivilLawCorporate'
import CorporateCommercial from './pages/practice-areas/CorporateCommercial'
import DisputeResolution from './pages/practice-areas/DisputeResolution'
import EmploymentLabour from './pages/practice-areas/EmploymentLabour'
import FamilyEstates from './pages/practice-areas/FamilyEstates'

function App() {
    return (
        <div className="App">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/team" element={<Team />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/practice-areas/cyber-crime" element={<CyberCrime />} />
                <Route path="/practice-areas/banking-finance" element={<BankingFinance />} />
                <Route path="/practice-areas/criminal-law" element={<CriminalLaw />} />
                <Route path="/practice-areas/civil-law-corporate" element={<CivilLawCorporate />} />
                <Route path="/practice-areas/corporate-commercial" element={<CorporateCommercial />} />
                <Route path="/practice-areas/dispute-resolution" element={<DisputeResolution />} />
                <Route path="/practice-areas/employment-labour" element={<EmploymentLabour />} />
                <Route path="/practice-areas/family-estates" element={<FamilyEstates />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
