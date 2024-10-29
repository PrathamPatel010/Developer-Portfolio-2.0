const about = `Hey, I'm Pratham, a software engineer with a passion for crafting scalable systems that solve real-world problems. I'm all about building innovative products that make a difference. Let's connect and build something impactful together!`;

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
    title: "QuickChat",
    details: "A Web-based Messaging platform exclusively for college students",
    imageUrl: "mk5.webp",
    href: "https://github.com/PrathamPatel010/Quick-Chat",
  },
  {
    id: 6,
    title: "Google Flights",
    details: "Microservice Architecture based Airline Booking Backend System",
    imageUrl: "mk6.webp",
    href: "https://github.com/PrathamPatel010/Google-Flights-Microservice-Backend",
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
    timeline: "May 2024 - June 2024",
    roleName: "Full-Stack Engineer Intern",
    company: "Logic Cube IT Pvt. Ltd.",
    description: [
      "Collaborated with a team of 5 engineers to develop a microservices architecture-based full-stack CMS platform.",
      "Worked on backend API development using Nest.js and TypeScript, ensuring high peformance.",
      "Fixed bugs on front-end that were causing the platforms to crash and security bugs that were leaking the sensitive information.",
    ],
    techStack: [
      "Nest.js",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
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
      &copy; 2024 Pratham Patel. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export { about, projects, contributions, workExperience, htmlTemplate };
