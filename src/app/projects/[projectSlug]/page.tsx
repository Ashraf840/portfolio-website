import React from 'react'

export default function ProjectSlug({ params }: {
    params: { projectSlug: string }
}) {
    return (
        <section
            className='flex flex-col items-center px-4 min-h-screen scroll-mt-28'>
            <div>Project Detail: {params?.projectSlug}</div>
        </section>
    )
}