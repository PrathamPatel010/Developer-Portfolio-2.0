const about = `Hey, I'm Pratham, a software engineer with a passion for crafting scalable systems that solve real-world problems. I'm all about building innovative products that make a difference. Let's connect and build something impactful together!`;

const projects = [
    {
        id: 1,
        title: 'TaskEasy',
        details: 'A Secured Todo App for tracking all your day-to-day tasks',
        imageUrl: 'mk1.png',
        href: 'http://github.com/PrathamPatel010/TaskEasy',
    },
    {
        id: 2,
        title: 'QuickShare',
        details:
            'A Quick and Password-protected way to share files with anyone',
        imageUrl: 'mk2.png',
        href: 'https://github.com/PrathamPatel010/File-Sharing-App',
    },
    {
        id: 3,
        title: 'SpendWise',
        details:
            'Efficient tool to keep track of all your expenses built using MERN Stack, Google OAuth 2.0',
        imageUrl: 'mk3.png',
        href: 'https://github.com/PrathamPatel010/Money-Tracking-App',
    },
    {
        id: 4,
        title: 'Citizen Voice',
        details: 'Police-Citizen Feedback management system exclusively for Gujarat Police',
        imageUrl: 'mk4.png',
        href: 'https://github.com/PrathamPatel010/Citizen-Voice',
    },
    {
        id: 5,
        title: 'QuickChat',
        details: 'A Web-based Messaging platform exclusively for college students',
        imageUrl: 'mk5.png',
        href: 'https://github.com/PrathamPatel010/Quick-Chat',
    },
    {
        id: 6,
        title: 'Google Flights',
        details: 'Microservice Architecture based Airline Booking Backend System',
        imageUrl: 'mk6.png',
        href: 'https://github.com/PrathamPatel010/Google-Flights-Microservice-Backend',
    }
]


const contributions = [
    {
        timeline: "May 2024 — Present",
        eventName: "GirlScript Summer of Code",
        role: "Contributor",
        link: "https://gssoc.girlscript.tech/",
        detailedWork: [
            "Developing core backend functionalities for an open-source project aimed at enhancing user experience.",
            "Contributing to the creation of RESTful APIs, enabling seamless data exchange between the client and server.",
            "Implementing user authentication and authorization using JWT to ensure secure access to the platform.",
            "Integrating third-party APIs to extend the project's capabilities and provide additional features.",
            "Collaborating with other contributors to review and optimize code, ensuring high performance and scalability.",
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "Next.js", "Git"]
    },
];


const workExperience = [
    {
        timeline: "May 2024 - June 2024",
        roleName: "Full-Stack Engineer Intern",
        company: "Logic Cube IT Pvt. Ltd.",
        description: [
            "Collaborated with a team of 5 engineers to develop a microservices architecture-based full-stack CMS platform.",
            "Worked on backend API development using Nest.js and TypeScript, ensuring high peformance.",
            "Fixed bugs on front-end that were causing the platforms to crash and security bugs that were leaking the sensitive information.",
        ],
        techStack: ["Nest.js", "Next.js", "TypeScript", "MongoDB", "Prisma","Git", "GitHub"]
    }
];




export {about,projects,contributions,workExperience};