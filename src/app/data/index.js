const about = `Hey, I'm Pratham — a Computer Engineering graduate and full-stack developer. With hands-on experience working on live enterprise projects at System Level Solutions, I enjoy building scalable web apps using Angular, .NET Core, and other modern technologies. I love creating practical solutions that solve real-world problems and bring actual value to users.`;

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

const workExperience = [
  {
    timeline: "Jan 2025 - June 2025",
    roleName: "Software Engineer Intern",
    company: "System Level Solutions India Pvt. Ltd.",
    description: [
      "Developed context-aware UI and dynamic reusable Angular components integrated with .NET Core REST APIs.",
      "Designed database schema and core data flow logic for supplier and device registration in smart metering workflows.",
      "Built a pluggable Rasa-based conversational AI for web portal integration to handle user intents and complaint logging.",
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

export { about, projects, contributions, workExperience, htmlTemplate };
