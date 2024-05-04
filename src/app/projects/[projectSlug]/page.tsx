'use client'

import React from 'react'
import Image from 'next/image'
import { projectsData } from "@/lib/data";
import YouTube from 'react-youtube';

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
                                <h1 className='text-5xl text-center'>
                                    {project.title}
                                </h1>
                                <Image
                                    src={project.thumbnailImageUrl}
                                    alt='Project Snapshot'
                                    quality={95}
                                    className='w-[44rem] h-[24rem] rounded-lg shadow-2xl mt-10 mx-auto' />
                            </div>
                            {(project?.projectBrief) ? (
                                <div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                    <LeftAlignedLine />
                                    <div style={{ flex: 1 }}>
                                        <h1 className='text-3xl'>Project Brief</h1>
                                        <p>{project?.projectBrief}</p>
                                    </div>
                                </div>
                            ) : null}
                            {(project?.keyFeatures.length > 0) ? (
                                <div className='w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
                                </div>
                            ) : null}
                            {(project?.benefits) ? (
                                <div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                    <LeftAlignedLine />
                                    <div style={{ flex: 1 }}>
                                        <h1 className='text-3xl'>Benefits</h1>
                                        <p>{project?.benefits}</p>
                                    </div>
                                </div>
                            ) : null}

                            <div>

                            </div>

                            <div className='w-[60%] mt-20'>
                                <h1 className='text-3xl text-center'>Features I&apos;ve Built</h1>
                                {Object.keys(project.projectFeaturesDetail).map((ftKey) => {
                                    const vidIdObject = { vidId: project.projectFeaturesDetail[ftKey].video };
                                    return (
                                        <div className='mt-20' key={ftKey}>
                                            <h1 className='text-xl font-semibold'>{project.projectFeaturesDetail[ftKey].name}</h1>
                                            <p>{project.projectFeaturesDetail[ftKey].description}</p>
                                            {(vidIdObject?.vidId.length > 0) ? (
                                                <div className='flex justify-center mt-6'>
                                                    <YouTubePlayer vidId={vidIdObject} />
                                                </div>
                                            ) : null}
                                        </div>
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