"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/src/context/active-section-context';


export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext();

    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-16 sm:mt-0'>
            <div className="flex items-center justify-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt='Sample portrait'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />

                    </motion.div>

                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Kh Tanjim Ashraf.</span> I&apos;m a <span className="font-bold">software engineer</span> with <span className="font-bold">4 years</span> of experience. I engineer web apps with <span className="italic">real-world significance.</span>
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mb-2 sm:mb-0'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here
                    <BsArrowRight
                        className='opacity-70 group-hover:translate-x-1 transition'
                    />{" "}
                </Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/15 mb-1 sm:mb-0" href='/CV.pdf' download>
                    Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <div className='flex flex-row items-center justify-center gap-4 sm:gap-2'>
                    <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15 dark:hover:text-white/70' href='https://www.linkedin.com/' target='_blank'>
                        <BsLinkedin />
                    </a>
                    <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15 dark:hover:text-white/70' href='https://github.com/' target='_blank'>
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
