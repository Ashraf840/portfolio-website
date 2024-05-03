import React from 'react'
import Image from 'next/image'
import ibasThumbnailImg from "@/public/ibas-thumbnail-image.png";
import { projectsData } from "@/lib/data";


function LeftAlignedLine() {
    return (
        <>
            <div className='bg-black dark:bg-white/20' style={{ position: 'absolute', top: -15, left: '-5px', width: '12px', height: '12px', borderRadius: '50%' }}></div>
            <div className='border-l-2 border-black dark:border-white/20' style={{ height: '10rem', marginRight: '1rem' }}></div>
        </>
    )
}

type ProjectFeaturesDetail = {
    [key: string]: {
        description: string;
        image: string[];
        video: string;
    };
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
                            <div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <LeftAlignedLine />
                                <div style={{ flex: 1 }}>
                                    <h1 className='text-3xl'>Project Brief</h1>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus mollitia illum molestiae velit cumque ex impedit explicabo voluptatibus. Sapiente, sequi maiores! Dignissimos architecto qui, eaque sequi facere enim consequuntur aut nostrum voluptatibus vel dolores quo perferendis dolorem laudantium placeat quasi voluptatem maiores. Cupiditate quasi enim atque cum ipsam nostrum? Sit corporis, labore aliquid quae unde quod tenetur maxime nemo optio laboriosam aut ad. Perferendis, exercitationem neque. Distinctio sint doloremque voluptas omnis, et lab
                                    </p>
                                </div>
                            </div>
                            <div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <LeftAlignedLine />
                                <div style={{ flex: 1 }}>
                                    <h1 className='text-3xl'>Key Features</h1>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus mollitia illum molestiae velit cumque ex impedit explicabo voluptatibus. Sapiente, sequi maiores! Dignissimos architecto qui, eaque sequi facere enim consequuntur aut nostrum voluptatibus vel dolores quo perferendis dolorem laudantium placeat quasi voluptatem maiores. Cupiditate quasi enim atque cum ipsam nostrum? Sit corporis, labore aliquid quae unde quod tenetur maxime nemo optio laboriosam aut ad. Perferendis, exercitationem neque. Distinctio sint doloremque voluptas omnis, et lab
                                    </p>
                                </div>
                            </div>
                            <div className='max-w-[60%] mt-20' style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <LeftAlignedLine />
                                <div style={{ flex: 1 }}>
                                    <h1 className='text-3xl'>Benefits</h1>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus mollitia illum molestiae velit cumque ex impedit explicabo voluptatibus. Sapiente, sequi maiores! Dignissimos architecto qui, eaque sequi facere enim consequuntur aut nostrum voluptatibus vel dolores quo perferendis dolorem laudantium placeat quasi voluptatem maiores. Cupiditate quasi enim atque cum ipsam nostrum? Sit corporis, labore aliquid quae unde quod tenetur maxime nemo optio laboriosam aut ad. Perferendis, exercitationem neque. Distinctio sint doloremque voluptas omnis, et lab
                                    </p>
                                </div>
                            </div>

                            <div className='max-w-[60%] mt-20'>
                                <h1 className='text-3xl'>Features I've Built</h1>
                                {Object.keys(project.projectFeaturesDetail).map((ftKey) => (
                                    <div key={ftKey}>
                                        <h1 className='text-xl'>{ftKey}</h1>
                                        <p>{project.projectFeaturesDetail[ftKey].description}</p>
                                        <div>
                                            {project.projectFeaturesDetail[ftKey].image.map((img, index) => (
                                                <img key={index} src={img} alt={`Feature ${ftKey} Image ${index + 1}`} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </React.Fragment>
            ))}
        </section>
    )
}