'use client'

import React from 'react'
import SectionHeading from '@/src/components/section-heading'
import { projectsData } from '@/lib/data'
import Project from '@/src/components/project'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'

export default function Projects() {
    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>
                <Link href='/projects'>My Projects</Link>
            </SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

