import React from 'react';
import ProjectsCard from '../components/Cards/ProjectCard';
const ProjectCardSection = ({ title, data }) => {

    return (
        <section id={'projects'} className="grid gap-8 p-5 mt-5 md:p-0">
            <div className="text-3xl md:text-4xl font-medium text-zinc-200 text-center">{title}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {data.map((card) => (
                    <ProjectsCard
                        href={card.href}
                        key={card.id}
                        title={card.title}
                        src={card.imageUrl}
                        details={card.details}
                    />
                )).reverse()}
            </div>
        </section>
    );
};

export default ProjectCardSection;
