"use client"

import Link from 'next/link'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';

const fadeInFromLeftAnimationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
    }
};

const fadeInFromRIghtAnimationVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
    }
};

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, slug, projectBrief, imageUrl }: ProjectProps) {
    return (
        <div className='group mt-10 mb-3 sm:mb-28 last:mb-0'>
            <Link href={`/projects/${slug}`}>
                <motion.section
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <div>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                    </div>
                    <div>
                        <h3 className='font-semibold mt-2'>{projectBrief}</h3>
                    </div>
                    <div className='flex justify-between mt-8'>
                        <motion.div
                            variants={fadeInFromLeftAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>
                            <Image
                                src={imageUrl}
                                alt='Project Snapshot'
                                quality={95}
                                className='w-[28.25rem] h-[28.25rem] rounded-lg shadow-xl hover:scale-105 transition' />
                        </motion.div>
                        <motion.div
                            variants={fadeInFromRIghtAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>
                            <Image
                                src={imageUrl}
                                alt='Project Snapshot'
                                quality={95}
                                className='w-[28.25rem] h-[28.25rem] rounded-lg shadow-xl hover:scale-105 transition' />
                        </motion.div>
                    </div>
                    <button className="group bg-white px-7 py-3 mt-7 max-w-48 flex items-center justify-center gap-3 rounded-full outline-none focus:scale-[1.2] hover:scale-[1.2] active:scale-[1.1] transition cursor-pointer borderBlack-2 dark:bg-white/10 dark:hover:bg-white/15 mb-1 sm:mb-0 opacity-80 hover:opacity-90 mx-auto">
                        View Detail
                        <AiFillEye className='mt-[.15rem] opacity-30 group-hover:scale-150 group-hover:opacity-60 transition duration-300' />
                    </button>
                </motion.section>
            </Link>
        </div>
    )
}
