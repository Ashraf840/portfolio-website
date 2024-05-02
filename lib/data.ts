import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ibasThumbnailImg from "@/public/ibas-thumbnail-image.png";
import ibasChatroomImg from "@/public/ibas-chatroom.png";
import ibasDapImg from "@/public/ibas-dap.png";
import techforingThumnailImg from "@/public/techforing-thumnail-image.png";
import techforingSnapImg1 from "@/public/techforing-img-1.png";
import techforingSnapImg2 from "@/public/techforing-img-2.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import onlineFoodOrderingSystem from '@/public/online-food-ordering-system.jpg';

export const links = [
    {
        name: "Home",
        hash: "#home",
        url: "/#home",
    },
    {
        name: "About",
        hash: "#about",
        url: "/#about",
    },
    {
        name: "Projects",
        hash: "#projects",
        url: "/#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
        url: "/#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
        url: "/#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
        url: "/#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "iBAS++ Chat Operating System",
        slug: "ibas-chat-operating-system",
        projectBrief:
            "I worked as a full-stack developer on this research based project for over a year. User can chat with Help Desk Officers for queries.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        thumbnailImageUrl: ibasThumbnailImg,
        projectSnaps: [ibasChatroomImg, ibasDapImg],
    },
    {
        title: "TechForing Website",
        slug: "techforing-website",
        projectBrief:
            "Build the CI/CD pipeline using Jenkins. Established continuous deployment into AWS EC2.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        thumbnailImageUrl: techforingThumnailImg,
        projectSnaps: [techforingSnapImg1, techforingSnapImg2],
    },
    {
        title: "Multi Vendor Food Ordering System",
        slug: "multi-vendor-food-ordering-system",
        projectBrief:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        thumbnailImageUrl: onlineFoodOrderingSystem,
        projectSnaps: [onlineFoodOrderingSystem],
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;