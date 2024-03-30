import React from 'react';
import TechCard from './Cards/TechCard';

const SkillsSection = () => {
    return (
        <section id={'skills'}>
            <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3 mt-0 md:mt-24">
                <div className="text-4xl text-center font-medium mt-2 text-zinc-200 mb-5">
                    Skills
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <TechCard
                        title="Frontend Tech."
                        className="bg-[#4f91f2]"
                        tech={[
                            'HTML',
                            'CSS',
                            'Tailwind',
                            'Javascript',
                            'React.js',
                            'Next.js'
                        ]}
                    />
                    <TechCard
                        title="Backend Tech."
                        className="bg-[#f37c36]"
                        tech={['Node.js', 'Express.js','Microservices Architecture']}
                    />
                    <TechCard
                        title="Database & ORM"
                            className="bg-[#e0558a]"
                        tech={['MySQL', 'MongoDB', 'PostgreSQL','Sequelize']}
                    />
                    <TechCard
                        title="Other"
                        className="bg-[#10c0a2]"
                        tech={[
                            'Microsoft Azure',
                            'Git & GitHub',
                            'Netlify',
                            'Render'
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;