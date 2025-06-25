
import { ContentHero } from '@/components/ContentComponents/ContentHero'
import { TechFundamentals } from '@/components/ContentComponents/TechFundamentals'
import { ReactComponent } from '@/components/ContentComponents/ReactComponent'
import { JavaScriptComponent } from '@/components/ContentComponents/JavaScriptComponent'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <ContentHero />
            <TechFundamentals />
            <ReactComponent />
            <JavaScriptComponent />
            <Footer />
        </div>
    )
}

export default page