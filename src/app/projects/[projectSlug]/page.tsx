'use client'

import React from 'react'
import Image from 'next/image'
import { projectsData } from "@/lib/data";
import YouTube from 'react-youtube';
import { AiOutlineLink } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Link from 'next/link';
import { delay, motion } from 'framer-motion';

function LeftAlignedLine() {
    return (
        <>
            <div className='bg-black dark:bg-white/20' style={{ position: 'absolute', top: -15, left: '-5px', width: '12px', height: '12px', borderRadius: '50%' }}></div>
            <div className='border-l-2 border-black dark:border-white/20' style={{ height: '10rem', marginRight: '1rem' }}></div>
        </>
    )
}

interface YouTubePlayerProps {
    vidId: {
        vidId: string;
    };
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ vidId }) => {
    const videoId = vidId?.vidId;

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId={videoId} opts={opts} />
    );
};

export default function ProjectSlug({ params }: {
    params: { projectSlug: string }
}) {
    return (
        <section
            className='flex flex-col items-center px-4 min-h-screen scroll-mt-28'>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    {project.slug === params.projectSlug && (
                        <>
                            <div>
                                <motion.h1 className='text-5xl text-center z-0'
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: .5,
                                    }}
                                >
                                    {project.title}
                                </motion.h1>
                                <motion.div className='z-[1]'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: .2
                                    }}
                                >
                                    <Image
                                        src={project.thumbnailImageUrl}
                                        alt='Project Snapshot'
                                        quality={95}
                                        className='w-[44rem] h-[24rem] rounded-lg shadow-2xl mt-10 mx-auto' />
                                </motion.div>
                                <motion.h3 className='text-xl font-bold text-center mt-10'
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    Link
                                    {(project?.hostedLink.length > 0) ? (
                                        <div className='flex justify-center mt-5'>
                                            <Link className='p-2 opacity-70 hover:scale-125 hover:opacity-100 transition delay-[.5]' href={`${project?.hostedLink}`} target='_blank'>
                                                <AiOutlineLink />
                                            </Link>
                                        </div>
                                    ) : null}
                                    {(project?.githubRepoLink.length > 0) ? (
                                        <div className='flex justify-center mt-5'>
                                            <Link className='p-2 opacity-70 hover:scale-125 hover:opacity-100 transition delay-[.5]' href={`${project?.githubRepoLink}`} target='_blank'>
                                                <AiFillGithub />
                                            </Link>
                                        </div>
                                    ) : null}
                                </motion.h3>
                            </div>
                            {(project?.projectBrief) ? (
                                <motion.div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <LeftAlignedLine />
                                    <div style={{ flex: 1 }}>
                                        <h1 className='text-3xl'>Project Brief</h1>
                                        <p>{project?.projectBrief}</p>
                                    </div>
                                </motion.div>
                            ) : null}
                            {(project?.keyFeatures.length > 0) ? (
                                <motion.div className='w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <LeftAlignedLine />
                                    <div style={{ flex: 1 }}>
                                        <h1 className='text-3xl'>Key Features</h1>
                                        <ul>
                                            {project.keyFeatures.map((feature, index) => (
                                                <li className='mt-3' key={index}>
                                                    {index + 1}. {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : null}
                            {(project?.benefits) ? (
                                <motion.div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <LeftAlignedLine />
                                    <div style={{ flex: 1 }}>
                                        <h1 className='text-3xl'>Benefits</h1>
                                        <p>{project?.benefits}</p>
                                    </div>
                                </motion.div>
                            ) : null}

                            <div className='w-[60%] mt-20'>
                                <motion.h1 className='text-3xl text-center'
                                    initial={{
                                        opacity: 0,
                                        x: 100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{
                                        duration: .5
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >Features I&apos;ve Built</motion.h1>
                                {Object.keys(project.projectFeaturesDetail).map((ftKey) => {
                                    const vidIdObject = { vidId: project.projectFeaturesDetail[ftKey].video };
                                    return (
                                        <motion.div className='mt-20 last:mb-20' key={ftKey}
                                            initial={{
                                                opacity: 0,
                                                x: -100
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                duration: .5
                                            }}
                                            viewport={{
                                                once: true
                                            }}
                                        >
                                            <h1 className='text-xl font-semibold'>{project.projectFeaturesDetail[ftKey].name}</h1>
                                            <p>{project.projectFeaturesDetail[ftKey].description}</p>
                                            {(vidIdObject?.vidId.length > 0) ? (
                                                <div className='flex justify-center mt-6'>
                                                    <YouTubePlayer vidId={vidIdObject} />
                                                </div>
                                            ) : null}
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </React.Fragment>
            ))}
        </section>
    )
}