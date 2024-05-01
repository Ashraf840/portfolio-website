import Link from 'next/link'
import { projectsData } from '@/lib/data'


type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, slug, description, tags, imageUrl }: ProjectProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <section className='flex justify-between gap-4'>
                <h1>{title}</h1>
                <p>{slug}</p>
            </section>
        </Link>
    )
}
