"use client"

import React from 'react'
import SectionHeading from '@/src/components/section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        < motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            ref={ref}
            initial={{ opacity: 0, y: 100 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>
                <p>About Me</p>
            </SectionHeading>
            <p className="mb-3">
                I&apos;m a seasoned software engineer with <span className="font-medium">four years</span> of hands-on experience crafting robust, scalable solutions across diverse domains. My passion for problem-solving propels me to explore and master new technologies continually. Proficient in <span className="italic">Python, JavaScript, Angular, Django, TypeScript, HTML, CSS, and Tailwind</span>, I excel in <span className="font-medium">dynamic, innovative environments</span>. With expertise in back-end technologies like Docker, Git, PostgreSQL, FastAPI, WebSocket, and webRTC, I design and implement efficient <span className="font-medium">RESTful APIs</span> and <span className="font-medium underline">real-time applications</span>, ensuring seamless client-server communication. I deploy and manage applications effortlessly using NGINX, uWSGI, Gunicorn, Daphne, and Redis.

            </p>

            <p>
                Skilled in data analysis with Pandas and Numpy, I derive actionable insights from complex datasets. Experienced in continuous integration and deployment pipelines with <span className="font-medium">Jenkins</span>, I ensure reliable software delivery. My database proficiency extends to MySQL, Oracle, <span className="underline">ClickHouse</span>, and cloud-based solutions like Amazon RDS, with infrastructure management expertise in Amazon EC2, Amazon Route 53, and Apache Airflow. Adept in Linux environments, I streamline communication and project management using tools like <span className="font-medium">Slack</span> and <span className="font-medium">Atlassian Jira</span>, fostering collaboration and efficiency. In essence, I&apos;m a versatile software engineer dedicated to innovation, armed with a diverse skill set to tackle challenges and deliver exceptional results.
            </p>
        </motion.section >
    )
}
