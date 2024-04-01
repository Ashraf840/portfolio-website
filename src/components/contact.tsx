"use client"

import React from 'react'
import SectionHeading from '@/src/components/section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEMail } from '@/src/actions/sendEmail'
import SubmitBtn from '@/src/components/submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView('Contact');


    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center'
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
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6'>Please contact me directly at <a href="mailto:example@gmailcom">example@gmail.com</a> or through this form.</p>

            <form className='mt-10 flex flex-col' action={async (formData) => {
                console.log("Running on client");
                const { data, error } = await sendEMail(formData);

                if (error) {
                    toast.error(error)
                    return;
                }

                toast.success("Email sent successfully!")
            }}>
                <input
                    type="email"
                    name='senderEmail'
                    className='h-14 px-4 rounded-lg borderBlack'
                    required
                    maxLength={500}
                    placeholder='Your email'
                />
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4'
                    name='message'
                    required
                    maxLength={5000}
                    placeholder='Your message'
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
