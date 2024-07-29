import React from 'react';
import TechCard from './Cards/TechCard';

const SkillsSection = () => {
    return (
        <section className={'text-slate-100 pt-5'} id={'skills'}>
            <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3 mt-0 md:mt-24">
                <div className="text-4xl text-center font-medium mt-2 mb-5">
                    Skills
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <TechCard
                        title="Frontend Tech."
                        className="bg-[#4f91f2]"
                        tech={[
                            {
                                name: 'HTML',
                                path: '/skills/html5.webp'
                            },
                            {

                                name: 'CSS',
                                path: '/skills/css3.webp'
                            },
                            {
                                name: 'Tailwind',
                                path: '/skills/tailwind.webp'
                            },
                            {
                                name: 'Javascript',
                                path: '/skills/js.webp'
                            },
                            {
                                name: 'React.js',
                                path: '/skills/react.webp'
                            },
                            {
                                name: 'Next.js',
                                path: '/skills/next.webp'
                            },
                            {
                                name: 'TypeScript',
                                path: '/skills/typescript.webp'
                            }
                        ]}
                    />
                    <TechCard
                        title="Backend Tech."
                        className="bg-[#f37c36]"
                        tech={[
                            {
                                name: 'Node.js',
                                path: '/skills/nodejs.webp'
                            },
                            {
                                name: 'Express.js',
                                path: '/skills/express.webp',
                            },
                            {
                                name: 'Nest.js',
                                path: '/skills/nestjs.webp'
                            },
                            {
                                name: 'TypeScript',
                                path: '/skills/typescript.webp'
                            },
                            {
                                name: 'Monolith Architecture',
                                path: '/skills/monolith.webp'
                            },
                            {
                                name: 'Microservice Architecture',
                                path: '/skills/microservice.webp'
                            },
                        ]
                        }
                    />
                    <TechCard
                        title="Database & ORM"
                        className="bg-[#e0558a]"
                        tech={[
                            {
                                name: 'MySQL',
                                path: '/skills/mysql.webp'
                            },
                            {

                                name: 'MongoDB',
                                path: '/skills/mongo.webp'
                            },
                            {
                                name: 'Postgres',
                                path: '/skills/postgresql.webp'
                            },
                            {
                                name: 'Sequelize',
                                path: '/skills/sequelize.webp'
                            },
                            {
                                name: 'Prisma',
                                path: '/skills/prisma.webp'
                            }
                        ]}
                    />
                    <TechCard
                        title="Tools & Others"
                        className="bg-[#10c0a2]"
                        tech={[
                            {
                                name: 'Microsoft Azure',
                                path: '/skills/azure.webp'
                            },
                            {
                                name: 'Git',
                                path: '/skills/git.webp'
                            },
                            {
                                name: 'Postman',
                                path: '/skills/postman.webp'
                            },
                            {
                                name: 'GitHub',
                                path: '/skills/github.webp'
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;