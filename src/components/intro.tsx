"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section>
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
        </section>
    )
}
