import { WeCollaborate } from '@/components/Common/WeCollaborate'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { AllServices } from '@/components/ServicesComponents/AllServices'
import { MyWorkFlow } from '@/components/ServicesComponents/MyWorkFlow'
import ServicesHero from '@/components/ServicesComponents/ServicesHero'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <ServicesHero />
            <AllServices />
            <MyWorkFlow />
            <WeCollaborate />
            <Footer />
        </div>
    )
}

export default page