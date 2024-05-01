import React from 'react'
import { projectsData } from '@/lib/data'
import Link from 'next/link'
import SectionHeading from '@/src/components/section-heading'


export default function Projects() {
    return (
        <section
            className='flex flex-col items-center px-4 min-h-screen scroll-mt-28'>
            <SectionHeading>
                <div>My Projects</div>
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

type ProjectProps = (typeof projectsData)[number]

function Project({ title, slug, description, tags, imageUrl }: ProjectProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <section className='flex justify-between gap-4'>
                <h1>{title}</h1>
                <p>{slug}</p>
            </section>
        </Link>
    )
}
