const about = `I'm a Software Engineer with hands-on experience building and maintaining enterprise applications. Currently working at Adrta Technologies, I've taken ownership of core modules used in pharma compliant systems, handling everything from database design to backend logic and frontend implementation. I enjoy solving real-world problems, improving existing systems, and building features that are actually used in production. My focus is on writing clean, practical code and continuously improving as an engineer.`;

const workExperience = [
  {
    timeline: "Sept 2025 - Present",
    roleName: "Jr. Software Engineer",
    company: "Adrta Technologies Pvt. Ltd.",
    description: [
      "Owned end-to-end development of Pharma Column Management and Standard Management modules, covering database design, backend logic, and frontend implementation.",
      "Designed relational schemas and implemented complete data flows for pharma manufacturing use-cases with strong validation and data consistency.",
      "Developed a centralized error logging system, later adopted across multiple products within the organization.",
      "Resolved edge-case issues in SSO flows, improving authentication reliability and access control.",
    ],
    techStack: [
      "Angular",
      "ASP.NET Web API",
      "SQL Server",
      "Entity Framework",
      "Git",
    ],
  },
  {
    timeline: "Jan 2025 - June 2025",
    roleName: "Software Engineer Intern",
    company: "System Level Solutions India Pvt. Ltd.",
    description: [
      "Developed reusable Angular components integrated with ASP.NET Core APIs for dynamic workflows.",
      "Designed database schemas and backend flows for device and supplier onboarding.",
      "Built authentication and configuration APIs and integrated a chatbot system for complaint handling.",
    ],
    techStack: [
      "Angular",
      "ASP.NET Core",
      "PostgreSQL",
      "Rasa",
      "Redis",
      "Git",
      "GitHub",
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "TaskEasy",
    details: "A Secured Todo App for tracking all your day-to-day tasks",
    imageUrl: "mk1.webp",
    href: "http://github.com/PrathamPatel010/TaskEasy",
  },
  {
    id: 2,
    title: "QuickShare",
    details: "A Quick and Password-protected way to share files with anyone",
    imageUrl: "mk2.webp",
    href: "https://github.com/PrathamPatel010/File-Sharing-App",
  },
  {
    id: 3,
    title: "SpendWise",
    details:
      "Efficient tool to keep track of all your expenses built using MERN Stack, Google OAuth 2.0",
    imageUrl: "mk3.webp",
    href: "https://github.com/PrathamPatel010/Money-Tracking-App",
  },
  {
    id: 4,
    title: "Citizen Voice",
    details:
      "Police-Citizen Feedback management system exclusively for Gujarat Police",
    imageUrl: "mk4.webp",
    href: "https://github.com/PrathamPatel010/Citizen-Voice",
  },
  {
    id: 5,
    title: "College Connect",
    details: "A Web-based Messaging platform exclusively for college students",
    imageUrl: "mk5.webp",
    href: "https://github.com/PrathamPatel010/College-Connect",
  },
  {
    id: 6,
    title: "Google Flights",
    details: "Microservice Architecture based Airline Booking Backend System",
    imageUrl: "mk6.webp",
    href: "https://github.com/PrathamPatel010/Google-Flights-Microservice-Backend",
  },
  {
    id: 7,
    title: "Ski-Mart",
    details:
      "Full-Stack E-Commerce Platform with Secure Checkout and Admin Dashboard",
    imageUrl: "mk7.png",
    href: "https://drive.google.com/file/d/1UYtIeV7ioqyuo1ZXL4BRxUa2LuuY8baV/view?usp=sharing",
  },
  {
    id: 8,
    title: "PMS",
    details:
      "Multi-Tenant Project & Task Management System with RBAC and Real-Time Sync",
    imageUrl: "mk8.svg",
    href: "https://drive.google.com/file/d/1kZsS6bDZUs_5vTZl1zNlGXyK4Loun5bE/view?usp=sharing",
  },
];

const htmlTemplate = (bodyContent) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f7fa;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 500px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #4f91f2;
      padding: 20px;
      text-align: center;
      color: #fff;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 20px;
      text-align: center;
      color: #333;
      font-size: 16px;
      line-height: 1.5;
    }
    .footer {
      background-color: #f0f3f7;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Heyy there!</h1>
    </div>
    <div class="content">
      <p>It seems you tried reaching out to me.<br>I'll get back to you within 24 hours!</p>
      <p><strong>Here's what was received:</strong><br>${bodyContent}</p>
    </div>
    <div class="footer">
      &copy; 2025 Pratham Patel. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

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
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Next.js",
      "Git",
    ],
  },
];

export { about, projects, contributions, workExperience, htmlTemplate };
