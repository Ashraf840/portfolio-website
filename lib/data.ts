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

type ProjectFeaturesDetail = {
    [key: string]: {
        name: string;
        description: string;
        image: string[];
        video: string;
    };
};

export const projectsData = [
    {
        title: "iBAS++ Chat Operating System",
        slug: "ibas-chat-operating-system",
        projectBrief:
            "I worked as a full-stack developer on this research based project for over a year. User can chat with Help Desk Officers for queries.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        thumbnailImageUrl: ibasThumbnailImg,
        projectSnaps: [ibasChatroomImg, ibasDapImg],
        projectFeaturesDetail: {
            feature1: {
                name: "Authentication & Authorization (Login Page)",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ad sequi nesciunt facere natus reprehenderit ipsum labore alias, excepturi, rerum ut fugiat! Tempora voluptates aliquid magnam quibusdam voluptatem vel exercitationem explicabo illo et, dolorem possimus facilis molestias id inventore ex sed harum maiores earum ut nostrum porro soluta numquam. Minima, illum quisquam beatae blanditiis eveniet pariatur tempora quas porro, maxime accusantium possimus. Hic exercitationem, eligendi cumque possimus est ab, repudiandae alias minus voluptates minima provident, quasi nemo labore dolor natus nam dolores corporis molestiae! Iusto illo alias assumenda laudantium, tempora, hic exercitationem repellendus ipsam, commodi sapiente facere odit dicta quis.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature2: {
                name: "Authentication & Authorization (From Chatbot)",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3", "img4"],
                video: "vid1",
            },
            feature3: {
                name: "Build & Integrate TA/DA Module in Chatbot UI",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3", "img4", "img5"],
                video: "vid1",
            },
            feature4: {
                name: "Real Time Message Requests Routing to HDO (Location based)",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2"],
                video: "vid1",
            },
            feature5: {
                name: "1-to-1 Messaging Platform for User & HDO",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1"],
                video: "vid1",
            },
            feature6: {
                name: "Fetch Previous Messaging Between User & HDO in the Chatroom",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3", "img4", "img5", "img6"],
                video: "vid1",
            },
            feature7: {
                name: "4 Types of Reply Modes in HDO end inside Chatroom",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3", "img4"],
                video: "vid1",
            },
            feature8: {
                name: "Collect Feedbacks from User on HDO's Reply",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2"],
                video: "vid1",
            },
            feature9: {
                name: "Build Backend CRUD APIs & Angular Frontend For Data Analytics Panel",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2"],
                video: "vid1",
            },
            feature10: {
                name: "Show Real Time Data Clustering Loading Process in DAP",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2"],
                video: "vid1",
            },
            feature11: {
                name: "Show Real Time Model Training Progress Bar in DAP",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2"],
                video: "vid1",
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "TechForing Website",
        slug: "techforing-website",
        projectBrief:
            "Build the CI/CD pipeline using Jenkins. Established continuous deployment into AWS EC2.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        thumbnailImageUrl: techforingThumnailImg,
        projectSnaps: [techforingSnapImg1, techforingSnapImg2],
        projectFeaturesDetail: {
            feature1: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature2: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature3: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "Multi Vendor Food Ordering System",
        slug: "multi-vendor-food-ordering-system",
        projectBrief:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        thumbnailImageUrl: onlineFoodOrderingSystem,
        projectSnaps: [onlineFoodOrderingSystem],
        projectFeaturesDetail: {
            feature1: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature2: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature3: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature4: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
            feature5: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "vid1",
            },
        } as ProjectFeaturesDetail,
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