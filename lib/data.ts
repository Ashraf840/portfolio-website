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
        company: "Doer Services PLC",
        title: "Full-Stack Engineer",
        location: "Dhaka, Bangladesh",
        description:
            "I served as a full stack engineer with the responsibility of maintaining application deployment. My stack includes Django, Flask, Angular, Pandas, Numpy, Asynchronous Programming, DRF, PostgreSQL",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2021 - April 2024",
    },
    {
        company: "TechForing Ltd",
        title: "Backend Developer",
        location: "London, United Kingdom",
        description:
            "Build, configure, automate the applications & their deployments using Jenkins and hosted in AWS. I got hands on experience with variaous AWS services including EC2, Route53, RDS, RedShift, ECS.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2022 - Dec 2022",
    },
    {
        company: "Creative IT Institute",
        title: "Jr. Python Developer",
        location: "Dhaka, Bangladesh",
        description:
            "I'ver build various applications for in-house operations including the contribution to an LMS with over 1 million user base. Besides, building software, I have also taught over 300 students about building real world applications using Django framework.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2021 - April 2022",
    },
    {
        company: "Daffodil Software Ltd",
        title: "Odoo Developer Intern",
        location: "Dhaka, Bangladesh",
        description:
            "As an Odoo developer intern, my responsibilities include learning the Odoo moduels & applications. I collaborate with senior developers to analyze requirements, propose solutions, and execute coding tasks. During internship, I also implemented the attendance & performance calculation functionality for both students & teachers is an EMIS project.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2020 - June 2020",
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
        projectThumbnailBrief:
            "I worked as a full-stack engineer on this government project for over a year. User can chat with Help Desk Officers to resolve queries.",
        projectBrief: "iBAS++ Chat Operating System is a cutting-edge solution to mitiagte the pressure from the iBAS++ staff. Integrated Budget and Accounting System (iBAS++) is the Integrated Financial Management Information System (IFMIS) of the Government of Bangladesh (GoB). Government officials from over the country contact iBAS++ for any kind of financial queries. Handling such massive amount of queries become difficult for the internal staffs. Thus the organization decided to circulate a tender for a software which will have an AI powered chatbot to provide relevant answers to those queries and for any unknown queries, the chatbot will redirect the user to an available Help Desk Officer. After joining my last company, I was given the task to build such system & got tagged with a team of ML engineers. Playing a pivotal role building this software, I got an exposure to a deep knowledge of asynchronous programming as part of my research. This is a solution where the ML technology meets the asynchronous programming in the Government sector for the first time. With heavy usage of Django Channels and JavaScript websocket, we built a solution where a Rasa chatbot tries to provide answers to the queries. This is an FAQ based chatbot, built by the ML engineers. I have built the software solution which provides chatting features, asynchronous message requests routing based on Location & Priority based algorithm, Data Analytics Panel for adminstrators. WIth this solution iBAS++ is now able to handle different client queries by using the chatbot & the internal staffs only handle issues with unknown queries thorugh chatting with the users in a chatroom. I have also built another micro-service where the admin can access to the Data Analytics Panel to manually create new queries as well select chatbot's fall back queries, then train the chatbot with those queries. This another service, I've built using the Django Rest Framework to serve the APIs & Angular 16 as the frontend. In this service, beside building the CRUD APIs, I have also integrated real time progress of AI model training or clustering into this service. iBAS++ has decided for a pilot implementation of this solution into their exisiting system. I have also worked for the deployment procedure for the provisioned Linux servers.",
        tags: ["Django", "Angular", "PostgreSQL", "Django Channels", "Websocket", "Rasa Chatbot"],
        keyFeatures: ["Authentication & Authorization from chatbot.", "Travel Allowance and Daily Allowance Module in chatbot.", "Real time messaging platform for users & help desk officers.", "Collect human feedback from user in the chatroom on help desk officers' resolution.", "Four types of reply modes in help desk officer end.", "Data analytics panel of the admins to train chatbot model in real time."],
        benefits: `
        The iBAS++ Chat Operating System has drastically took a lot of burder from both the users & the internal staffs of iBAS++. This solution does not only mitigate the scarcity of query resolution of the users but it also gives the staffs a leaverage to be more organized handling different queries of the government officials. Most of the queries are now handled from the chatbot ends, but if any new issue gets arised, then there will be help desk officers to provide solutions to those issues. The AI model training automation pipeline also decouples the organization from the dependency from the developers, the iBAS++ staff can train the chatbot model & view real time training progress using this system. This is the first solution we have developed where the Government of Bangladesh has experienced the facility of artificial intelligence & asynchronous programming at the same time.`,
        thumbnailImageUrl: ibasThumbnailImg,
        projectSnaps: [ibasChatroomImg, ibasDapImg],
        projectFeaturesDetail: {
            feature1: {
                name: "Authentication & Authorization (Login Page)",
                description: "User & help desk officer (HDO) have different login page. If any HDO accidently wants to login into the system using the user's login page, then he/she will be redirected to the HDO login page witha toast message indicating the issue. This functionality is also defined for the users of the system.",
                image: ["img1", "img2", "img3"],
                video: 'MrwPabW52JQ',
            },
            feature2: {
                name: "Authentication & Authorization (From Chatbot)",
                description: "iBAS++ users can make queries & get answers without logging into the system. A chatbot implemented into the system's user login page serves this functionality. If the chatbot gets any unknown query, then it requests the user to have his/her phone number to check if there is any account associated with that phone number. If an account exist with the phone number then the chatbot will prompt the user to provide correct credentials to authenticate the user to the system. After the successful authentication, the user is immediately redirected to the chatroom creating a new message request to an available HDO's support request panel.",
                image: ["img1", "img2", "img3", "img4"],
                video: 'VKhhXiowIJY',
            },
            feature3: {
                name: "Build & Integrate TA/DA Module in Chatbot UI",
                description: "Users (Goverment officials) can calculate their travel allowance/daily allowance by using the chatbot regardless of being an authenticated/unauthenticated user of the system. Sinces the chatbot is built using the Rasa framework by the AI engineers, I have built the TA/DA module using vanilla JavaScript & integrate into the chatbot UI to avoid complexity overhead of the ML model. When the model detects questions related to TA/DA module, it sends a specific dispatched message to enable the TA/DA module. I defined the TA/DA modules functionality to be enabled & disabled using the dispathed message from the chatbot.",
                image: ["img1", "img2", "img3", "img4", "img5"],
                video: '',
            },
            feature4: {
                name: "Real Time Message Requests Routing to HDO",
                description: "The core purpose of the system is to handle different queries using the chatbot. But the chatbot has it's own limitations since it's an FAQ based chatbot. When the chatbot is unable to anwer a query, it prompts the user to connect to an HDO. This prompt lasts for 10 seconds, within this time the user has to decide whether to connect or not. For connection, the user immediately redirects to a chatroom, on the other hand, a message request appears in an available HDO request panel. In this entire workflow I have heavily used Django channels & JavaScript websocket for its asynchronous functionality.",
                image: ["img1", "img2"],
                video: 'mmMFHU4XnjU',
            },
            feature5: {
                name: "Location & Priority Based Message Request Routing to HDO",
                description: "Any new message request routes to an available HDO's support request panel immediately. This routing follows the location & priority based algorithms which I have developed so that the ssytem can select an appropriate HDO. First the location based algorithm will try to match if there is any available HDO whose organization matches the user's organization. Then the algorithm will search in the broader area gradually (location, then district & lastly division) if there is no available HDO belongs to the same organization. If there is no such HDO whose locations doesn't match with the user's location then the system will try to route the new request to a general HDO's support request panel, otherwise notify the user about no available HDO in the system. In the priority based algorithm, an HDO is allowed to handle five support requests at max at the same time, he/she will not get any new support requets until any existing request gets resolved/dismissed. Meanwhile, the new request will be routed to such HDO who is handling less than five support requests.",
                image: ["img1", "img2"],
                video: '5zvbZcrUtew',
            },
            feature6: {
                name: "1-to-1 Messaging Platform for User & HDO",
                description: `The user of the system gets redirected to a real time messaging platform where the issue is mostly resolved by an HDO. In this platform, the HDO has three options: "Issue Details", "Resolve Issue" & "Dismiss Issue". From them, the HDO can mark the issue as resolved/dismissed, which leads to notify the user about the issue status & automatically redirect him/her to a landing page. On the other side, the user have only two options: "Issue Details" & "Dismiss Chat". The user can cancel the chat by the "Dismiss Chat" option. In this scenario, the HDO won't get redirected to her/his support request panel, instead, she/he will be notified with a chat cancellation message including a "close chat" button. By clicking the close chat button, the HDO will get back to the support request panel followed by closing the chat window.`,
                image: ["img1"],
                video: '',
            },
            feature7: {
                name: "Fetch Previous Messaging Between User & Chatbot in the Chatroom",
                description: "Every message between the chatbot & the user is stored into a DB table. So that when that chatbot is unable to provide an answer to a query, both the user & the HDO can view what conversation happened between the user & the chatbot previously inside the chatroom.",
                image: ["img1", "img2", "img3", "img4", "img5", "img6"],
                video: '',
            },
            feature8: {
                name: "4 Types of Reply Modes in HDO end inside Chatroom",
                description: `I've built the human feedback functionality where the user can give feedback on the HDO's resolution. There are 4 types of reply modes available for an HDO in the chatroom as a part of human feedback collection: "Single Line Reply Mode", "Query Reply Mode", "Multi Line Reply Mode", " Conversational Reply Mode". The feedback collection functionality behaves differently based on which reply mode is selected on the HDO end in the chatroom.`,
                image: ["img1", "img2", "img3", "img4"],
                video: '49N4y_R9aQo',
            },
            feature9: {
                name: "Collect Feedbacks from User on HDO's Reply",
                description: `Except the "Query Mode", the user gets feedback in real time to any kind of reply made by the HDO. The feedback collection will later be used for further data processing to automatically generate more qualified queries in data analytics panel. These queries will later be used to train the chatbot.`,
                image: ["img1", "img2"],
                video: '',
            },
            feature10: {
                name: "Build Backend CRUD APIs & Angular Frontend For Data Analytics Panel",
                description: "I have built a separate service as Data Analytics Panel for admins of the system. The CRUD APIs along with the frontend uses the Django Rest Framework & Angular 16. In this initial version of the system, the admin can create new queries manually or can choose suggestive Q/A. Later the admin can train the currently running Rasa chatbot with those queries.",
                image: ["img1", "img2"],
                video: 'mHKvF5msB9o',
            },
            feature11: {
                name: "Show Real Time Data Clustering Loading Process in DAP",
                description: `All the new queries are stored in excelt sheet as augmented questions. The AI engineers build a clustering model to generate base form of the queries from those excel sheets. There is an execution button in the "Suggestive Q/A" tab, where I have built the real time loading process of the clustering model.`,
                image: ["img1", "img2"],
                video: '',
            },
            feature12: {
                name: "Show Real Time Model Training Progress Bar in DAP",
                description: "The new queries gathered from suggestive Q/A or by manually created by the system admin, all of them will be first stored inside the final dataset Q/A. From there, the admin can train those new queries with answers to the chatbot. The AI engineers have created the training automation pipelien and I have built the real time training progress bar in the final dataset tab. After the training completion, the chatbot gets capable of answering to those queries.",
                image: ["img1", "img2"],
                video: '',
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "TechForing Website",
        slug: "techforing-website",
        projectThumbnailBrief:
            "I've Built the CI/CD pipeline using Jenkins & established continuous deployment into AWS EC2.",
        projectBrief: "",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        keyFeatures: [],
        benefits: "",
        thumbnailImageUrl: techforingThumnailImg,
        projectSnaps: [techforingSnapImg1, techforingSnapImg2],
        projectFeaturesDetail: {
            feature1: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature2: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature3: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
        } as ProjectFeaturesDetail,
    },
    {
        title: "Multi Vendor Food Ordering System",
        slug: "multi-vendor-food-ordering-system",
        projectThumbnailBrief:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        projectBrief: "",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        keyFeatures: [],
        benefits: "",
        thumbnailImageUrl: onlineFoodOrderingSystem,
        projectSnaps: [onlineFoodOrderingSystem],
        projectFeaturesDetail: {
            feature1: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature2: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature3: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature4: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
            feature5: {
                name: "",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                image: ["img1", "img2", "img3"],
                video: "",
            },
        } as ProjectFeaturesDetail,
    },
] as const;

export const skillsData = [
    "Python",
    "JavaScript",
    "Angular",
    "Django",
    "Django Channels",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Docker",
    "Docker Compose",
    "Git",
    "PostgreSQL",
    "FastAPI",
    "WebSocket",
    "webRTC",
    "NGINX",
    "uWSGI",
    "Gunicorn",
    "Daphne",
    "Redis",
    "Pandas",
    "Numpy",
    "Jenkins",
    "MySQL",
    "Oracle",
    "ClickHouse",
    "Amazon EC2",
    "Aamazon RDS",
    "Amazon S3",
    "Aamazon Route 53",
    "AWS Lambda",
    "Apache Airflow",
    "Linux",
    "Rust",
    "Slack",
    "Atlassian Jira",
] as const;