import { User } from "../types/types";

// User Information
export const userData: User = {
    name: "Harshil Motta",
    email: "harshilmotta26@gmail.com",
    socials: [
        {
            link: "https://www.linkedin.com/in/harshilmotta4364/",
            icon: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
            name: "LinkedIn",
        },
        {
            link: "https://github.com/Harshil43641",
            icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
            name: "GitHub",
        },
        {
            link: "https://www.instagram.com/_harshil_4364",
            icon: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
            name: "Instagram",
        },
    ],
};

// Navbar Details
export const navbar_details = {
    logo: "https://static.vecteezy.com/system/resources/previews/006/816/978/non_2x/code-icon-coding-symbol-coding-programming-sign-free-vector.jpg",
    name: userData.name,
};

// Navigation Links
export const navlinks = [
    {
        name: "PROJECTS",
        link: "LatestProjects",
        elementId: "LatestProjects",
    },
    {
        name: "CONTACT",
        link: "ContactSection",
        elementId: "ContactSection",
    },
];

// Hero Section Data
export const heroData = {
    name: userData.name,
    profession: "BCA Student Aspiring AI/ML Developer",
    biography: `Motivated BCA student with a strong foundation in programming and a deep interest in Machine Learning and AI. Passionate about data analysis, software development, and AI-driven solutions.`,
    contact: {
        city: "Kolkata, India",
        email: userData.email,
        phone: "+91 9038434364",
    },
    stats: [
        { title: "Certifiactions", stat: "4" },
        { title: "PROJECTS DONE", stat: "5" },
    ],
    profileImage: "/profile.png",
    waveImage: "/shape-waves.svg",
    circleImage: "/shape-circle.svg",
};

// My Advantage Section Data (Skills)
export const technicalSkills = [
    {
        name: "Python",
        proficiency: "",
        image: "/images/MyAdvantageLogos/python.png",
    },
    {
        name: "C++",
        proficiency: "",
        image: "/images/MyAdvantageLogos/c++.png",
    },
    {
        name: "C",
        proficiency: "",
        image: "/images/MyAdvantageLogos/c.png",
    },
    {
        name: "HTML5/CSS",
        proficiency: "",
        image: "/images/MyAdvantageLogos/html.png",
    },
    {
        name: "Javascript",
        proficiency: "",
        image: "/images/MyAdvantageLogos/javascript.png",
    },
];

  // Non-technical skills: Based on project management and problem solving from your resume.
  export const nonTechnicalSkills = [
    { 
        name: "Project Management", 
        proficiency: "", 
        image: "/images/MyAdvantageLogos/management.png" },
    { 
        name: "Problem Solving", 
        proficiency: "", 
        image: "/images/MyAdvantageLogos/solving.png" },
  ];
  

// Education Section Data
export const education = [
    {
        year: "2023 - Present",
        title: "Bachelor of Computer Applications (BCA)",
        institution: "Kalinga Institute of Industrial Technology (KIIT)",
    },
];

// Experience Section Data
export const experience = [
    {
        period: "2023 - Present",
        items: [
            { title: "Marketing & Data Analysis Intern", institution: "Kraya & Kuber Marketing Team" },
        ],
    },
];

// Latest Projects Section Data
export const latestProjects = [
    {
        href: "#",
        imgSrc: "images/LatestProjectCarousel/carousel-ai-handwritten.png",
        imgAlt: "AI Handwritten Math Solver",
        overlayText: "An AI app that solves handwritten math problems.",
        description: "AI-Powered Handwritten Math Solver (2025)",
    },
    {
        href: "#",
        imgSrc: "images/LatestProjectCarousel/carousel-portfolio.png",
        imgAlt: "Web Portfolio",
        overlayText: "A personal portfolio website showcasing projects and skills.",
        description: "Web Portfolio (2025)",
    },
    {
        href: "#",
        imgSrc: "images/LatestProjectCarousel/carousel-ai-text2image.png",
        imgAlt: "AI Text-to-Image Generator",
        overlayText: "Generate images from text using AI models.",
        description: "AI Text-to-Image Generator (2024)",
    },
    {
        href: "#",
        imgSrc: "images/LatestProjectCarousel/carousel-player-management.png",
        imgAlt: "Player & Team Management System",
        overlayText: "Manage players and teams with a Python-based system.",
        description: "Player & Team Management System (2022)",
    },
];

export const Certification = [
    {
        href: "#",
        imgSrc: "images/Certification/innovance.jpg",
        imgAlt: "Innovance 3.0 (IOT LAB)",
        overlayText: "Machine Learning Workshop",
        description: "Innovance 3.0",
    },
    {
        href: "#",
        imgSrc: "images/Certification/AISOC.jpg",
        imgAlt: "Artificial Intelligence Student Operated Council",
        overlayText: "Generative AI and Machine Learning Workshop",
        description: "Symposium 2.0",
    },
    {
        href: "#",
        imgSrc: "images/Certification/K&K.jpg",
        imgAlt: "Kraya & Kuber",
        overlayText: "Internship with Kraya & Kuber",
        description: "Internship",
    },
    {
        href: "#",
        imgSrc: "images/Certification/CST.jpg",
        imgAlt: "Cyber Security Internship Training",
        overlayText: "Machine Learning Workshop",
        description: "Cyber Security Internship Training",
    },
];

// Footer Section Data
export const footer = {
    copyRightText: "all rights reserved",
    email: userData.email,
};
