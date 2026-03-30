import React from "react";
import TechCard from "./Cards/TechCard";

const SkillsSection = () => {
  return (
    <section className={"pt-10 text-slate-100 md:mt-20 md:pt-16"} id={"skills"}>
      <div className="col-span-2 md:col-span-2 lg:col-span-3">
        <div className="text-4xl text-center font-medium mt-2 mb-5">Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <TechCard
            title="Frontend"
            className="bg-[#4f91f2]"
            tech={[
              { name: "HTML", path: "/skills/html.svg" },
              { name: "CSS", path: "/skills/css3.svg" },
              { name: "Tailwind", path: "/skills/tailwind.svg" },
              { name: "JavaScript", path: "/skills/js.svg" },
              { name: "TypeScript", path: "/skills/typescript.svg" },
              { name: "Angular", path: "/skills/angular.svg" },
            ]}
          />
          <TechCard
            title="Backend"
            className="bg-[#f37c36]"
            tech={[
              { name: ".NET Core", path: "/skills/dot-net.svg" },
              { name: "Node.js", path: "/skills/node-js.svg" },
              { name: "Express.js", path: "/skills/express.svg" },
              { name: "REST APIs", path: "/skills/restapi.svg" },
              { name: "MQTT", path: "/skills/mqtt.png" },
            ]}
          />
          <TechCard
            title="Database"
            className="bg-[#e0558a]"
            tech={[
              { name: "SQL Server", path: "/skills/sql-server.svg" },
              { name: "PostgreSQL", path: "/skills/postgresql.webp" },
              { name: "MongoDB", path: "/skills/mongo.webp" },
              { name: "Redis", path: "/skills/redis.svg" },
              { name: "Entity Framework Core", path: "/skills/efcore.png" },
            ]}
          />
          <TechCard
            title="Tools"
            className="bg-[#10c0a2]"
            tech={[
              { name: "Git", path: "/skills/git.webp" },
              { name: "GitHub", path: "/skills/github.webp" },
              { name: "Postman", path: "/skills/postman.webp" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
