import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import OpenSourceSlider from '@/components/ProjectsComponents/OpenSource'
import { Project } from '@/components/ProjectsComponents/Project'
import ProjectHero from '@/components/ProjectsComponents/ProjectHero'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <ProjectHero />
            <Project />
            <OpenSourceSlider />
            <Footer />
        </div>
    )
}

export default page