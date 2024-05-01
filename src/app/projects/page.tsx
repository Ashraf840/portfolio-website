import React from 'react'
import { projectsData } from '@/lib/data'

export default function Projects() {
    return (
        <section
            className='flex flex-col items-center px-4 min-h-screen'>
            <div>My Projects</div>
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

function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return (
        <section>
            <h1>{title}</h1>

        </section>
    )
}
