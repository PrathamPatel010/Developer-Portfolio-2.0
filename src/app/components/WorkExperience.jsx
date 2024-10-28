import React from "react";
import { workExperience } from "../data";

const WorkExperience = () => {
  return (
    <section
      id={"experience"}
      className="mt-20 pt-15 md:mt-20 md:pt-20 text-justify"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Work Experience
      </h2>
      {workExperience.map((experience, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg p-6 mb-6 shadow-lg"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {experience.roleName}
              </h3>
              <p className="text-gray-300">{experience.company}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-300">{experience.timeline}</p>
            </div>
          </div>
          <ul className="list-image-none list-inside mt-4 text-gray-100">
            {experience.description.map((desc, i) => (
              <li key={i} className="mt-2">
                {desc}
              </li>
            ))}
          </ul>

          <div className="pt-4 flex flex-wrap gap-x-1 gap-y-1">
            {experience.techStack.map((tech, index) => {
              return (
                <span
                  className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-gray-200 px-3 py-2 rounded-full shadow-md"
                  key={index}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
