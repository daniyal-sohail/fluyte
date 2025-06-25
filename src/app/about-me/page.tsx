
import AboutExperience from '@/components/AboutComponents/AboutExperience'
import AboutHero from '@/components/AboutComponents/AboutHero'
import Certificates from '@/components/AboutComponents/Certificates'
import { TeachStack } from '@/components/AboutComponents/TeachStack'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <AboutHero />
            <AboutExperience />
            <TeachStack />
            <Certificates />
            <Footer />
        </div>
    )
}

export default page