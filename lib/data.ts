import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: 'Home',
    About: 'About',
    Projects: 'Projects',
    Skills: 'Skills',
    Experiences: 'Experiences',
}

export const experiencesData = [
    {
        title: "MA Digital Media: Critical Studies",
        location: "University College London, UK",
        description:
            "Achieved a Master's degree in Digital Media, acquiring in-depth knowledge in areas such as Social Media Marketing, Mobile Media Studies, and Games. Developed strong capabilities in content creation and promotion, preparing for effective application in Media Industry",
        icon: React.createElement(LuGraduationCap),
        date: "2025 Sep - 2027 Jan",
    },
    {
        title: "Account Executive Intern",
        location: "Dayu Digital Culture Technology Group",
        description:
            "Served as a key client support within the MCN Business Division's Channel Operations team, managing the end-to-end process for brand partnership campaigns; Orchestrated influencer selection and optimization by analyzing partner portfolios and aligning creator strengths with client marketing objectives.",
        icon: React.createElement(FaReact),
        date: "2025 May - 2025 Sep",
    },
    {
        title: "TMT & Auto PR Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "Burson-Marsteller"),
            " Beijing, China"
        ),
        description:
            " Assisted in establishing and maintaining good relationships with target media; followed up on media enquiries and assisted in arranging interview activities; Wrote press releases, media invitations and other public relations materials; participated in the planning and executing of creative of public relations activities; Collected industry trend information and provided customers with market insight reports; monitored public opinion and provided timely feedback to the team on potential crises.",
        icon: React.createElement(FaVuejs),
        date: "2024 Jul - 2024 Oct",
    },
    {
        title: "Video Journalist Intern",
        location: "China Media Group YuYuan TanTian Studio",
        description:
            " Planned and explored short video themes with user needs and commercial potential, participated in the creative execution of original programs, maintained and managed video library and creative library; Assisted the director in writing and executing the script, followed up the shooting process, and participated in the whole process from news material collection to video packaging; Fully responsible for producing short video content for the account on social platforms such as TikTok, Weibo and WeChat.",
        icon: React.createElement(FaReact),
        date: "2024 Jan - 2024 May",
    },
    {
        title: "Social Media Marketing Intern",
        location: "Meituan",
        description:
            " Tracked platform competitive product information, analyzed network traffic data, and continuously optimized operational strategies; Participated in the operation practice of new media platforms such as Weibo and XiaoHongshu, and managed daily online operation activities;",
        icon: React.createElement(FaReact),
        date: "2022 Aug - 2022 Sep",
    },
    {
        title: "Bachelor of Arts in Radio and Television Science",
        location: "Wuhan University, China",
        description:
            "Graduated with a BA in Radio and Television Science, securing a GPA of 3.83/4.0. Gained foundational knowledge in audio and video production.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 Sep - 2025 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "MA Digital Media: Critical Studies",
        "location": "University College London, UK",
        "description": "Achieved a Master's degree in Digital Media, acquiring in-depth knowledge in areas such as Social Media Marketing, Mobile Media Studies, and Games. Developed strong capabilities in content creation and promotion, preparing for effective application in Media Industry",
        icon: React.createElement(LuGraduationCap),
        "date": "2025 Sep - 2027 Jan"
    },
    {
        "title": "Account Executive Intern",
        "location": "Dayu Digital Culture Technology Group",
        "description": "Served as a key client support within the MCN Business Division's Channel Operations team, managing the end-to-end process for brand partnership campaigns; Orchestrated influencer selection and optimization by analyzing partner portfolios and aligning creator strengths with client marketing objectives.",
        "icon": React.createElement(FaReact),
        "date": "2025 May - 2025 Sep"
    },
    {
        "title": "TMT & Auto PR Intern",
        "location": "Burson-Marsteller-Beijing",
        "description": ` Assisted in establishing and maintaining good relationships with target media; followed up on media enquiries and assisted in arranging interview activities; Wrote press releases, media invitations and other public relations materials; participated in the planning and executing of creative of public relations activities; Collected industry trend information and provided customers with market insight reports; monitored public opinion and provided timely feedback to the team on potential crises.`,
        "icon": React.createElement(FaVuejs),
        "date": "2024 Jul - 2024 Oct"
    },
    {
        "title": "Video Journalist Intern",
        "location": "China Media Group YuYuan TanTian Studio",
        "description": "Planned and explored short video themes with user needs and commercial potential, participated in the creative execution of original programs, maintained and managed video library and creative library; Assisted the director in writing and executing the script, followed up the shooting process, and participated in the whole process from news material collection to video packaging; Fully responsible for producing short video content for the account on social platforms such as TikTok, Weibo and WeChat.",
        "icon": React.createElement(FaReact),
        "date": "2024 Jan - 2024 May"
    },
    {
        "title": "Social Media Marketing Intern",
        "location": "Meituan",
        "description": "Tracked platform competitive product information, analyzed network traffic data, and continuously optimized operational strategies; Participated in the operation practice of new media platforms such as Weibo and XiaoHongshu, and managed daily online operation activities.",
        "icon": React.createElement(FaVuejs),
        "date": "2022 Aug - 2022 Sep"
    },
    {
        "title": "Bachelor of Arts in Radio and Television Science",
        "location": "Wuhan University, China",
        "description": "Graduated with a BA in Radio and Television Science, securing a GPA of 3.83/4.0. Gained foundational knowledge in audio and video production.",
        "icon": React.createElement(LuGraduationCap),
        "date": "2021 Sep - 2025 Jun"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Social Media Wrks",
        "title_zh": "China Media Group YuYuan TanTian Studio",
        "description":
            "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
        "desc_zh": "Responsible for the entire process of content production for the social short video category of the account, including news material collection, event library organization, content planning, video packaging, and content quality control.",
        "tags": ["Social Media", "Journalism", "Video production", "Screen Writing"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://x.com/YuyuanTantian",
        "demoUrl": "https://www.canva.cn/design/DAG00O70FQE/GKcPk27J2bjkAJ3RW8Re6A/view?utm_content=DAG00O70FQE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he6459d581a"
    },
    {
        title: "Media",
        title_zh: 'The 40th anniversary video of the School of Journalism and Communication, Wuhan University',
        description:
            "Participated in on-site interviews and shooting to ensure that the shooting content conforms to the planning plan and conveys the core spirit of the project; The work was selected into the list of outstanding works of 2023-2024 by the Chinese Collegial Association for Visual Art.",
        desc_zh: "The work was selected into the list of outstanding works of 2023-2024 by the Chinese Collegial Association for Visual Art.",
        tags: ["Videography", "Execution", "Content Creation"],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://www.bilibili.com/video/BV1Fj411E77a/?spm_id_from=333.337.search-card.all.click&vd_source=a1e8afd816b793fff0e1a9cb0bd82e42',
        demoUrl: 'https://www.canva.cn/design/DAG00GLUzy0/4BOf_aHafq2iuHK4qkfl3Q/view?utm_content=DAG00GLUzy0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2253e157d9',
    },
    {
        title: "Magic Data",
        title_zh: "Magic Data",
        description:
            `A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.
            `,
        desc_zh: "MAGIC DATA is the entrepreneurial project I participated in. The team jointly designed a big data live-streaming e-commerce precision marketing platform. This project participated in the Innovation and Entrepreneurship Competition and won the third prize.",
        tags: ["Business Strategy", "Marketing", "Innovation"],
        imageUrl: breadditImage,
        projectUrl: 'https://www.canva.cn/design/DAG00WPgkjE/URxxHlzA68aLexHiQYLX3g/view?utm_content=DAG00WPgkjE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he61bc552bd',
        demoUrl: 'https://www.canva.cn/design/DAG00d9Yg_U/_yCeEqfYQ-8a8MNmJ_m6Qg/view?utm_content=DAG00d9Yg_U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h01468d3d20',
    },
    {
        title: "Stray Hearts: A Call for Compassion",
        title_zh: 'Stray Hearts: A Call for Compassion',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "Participated in on-site interviews and filming, and directly interacted with stray animals and their carers to collect touching stories;Responsible for video editing and packaging, enhancing the narrative structure and emotional expression of the documentary through careful editing and visual design.",
        tags: ["Vedio Editing", "Creative Writing"],
        imageUrl: visualizationImage,
        demoUrl: 'https://www.canva.cn/design/DAG00d9yCfQ/ir6uHUURcb5SNxHb412dyg/view?utm_content=DAG00d9yCfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc9e74618a2',
    },


]

export const skillsData = [
    "Teamwork",
    "Graphic Design",
    "Videography",
    "Video Editing",
    "Adaptability",
    "Growth Mindset",
    "Multitasking",
    "Creativity",
    "Data Analysis",
    "Leadership",
    "Negotiation",
    "Screenwriting",
    "AI",
    "Podcasting",
    "Creative Writing",
    "Marketing",
    "Photography",
    "Programming",
    "Resilience",
] 
