import React from 'react';
import TechCard from './Cards/TechCard';

const SkillsSection = () => {
    return (
        <section className={'text-slate-100'} id={'skills'}>
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
                                name:'HTML',
                                path: '/skills/html5.svg'
                            },
                            {

                                name:'CSS',
                                path: '/skills/css3.svg'
                            },
                            {
                                name:'Tailwind',
                                path: '/skills/tailwind.svg'
                            },
                            {
                                name:'Javascript',
                                path: '/skills/js.svg'
                            },
                            {
                                name:'React.js',
                                path: '/skills/react.svg'
                            },
                            {
                                name:'Next.js',
                                path: '/skills/next.svg'
                            },
                            // {
                            //     name: 'TypeScript',
                            //     path: '/skills/typescript.svg'
                            // }
                        ]}
                    />
                    <TechCard
                        title="Backend Tech."
                        className="bg-[#f37c36]"
                        tech={[
                            {
                                name:'Node.js',
                                path: '/skills/nodejs.svg'
                            },
                            {
                                name:'Express.js',
                                path: '/skills/express.svg',
                            },
                            // {
                            //     name: 'Nest.js',
                            //     path: '/skills/nestjs.svg'
                            // },
                            // {
                            //     name: 'TypeScript',
                            //     path: '/skills/typescript.svg'
                            // },
                            {
                                name: 'Monolith Architecture',
                                path: '/skills/monolith.svg'
                            },
                            {
                                name: 'Microservice Architecture',
                                path: '/skills/microservice.svg'
                            },
                        ]
                        }
                    />
                    <TechCard
                        title="Database & ORM"
                            className="bg-[#e0558a]"
                        tech={[
                            {
                                name:'MySQL',
                                path: '/skills/mysql.svg'
                            },
                            {

                                name:'MongoDB',
                                path: '/skills/mongo.svg'
                            },
                            {
                                name:'Postgres',
                                path: '/skills/postgresql.svg'
                            },
                            {
                                name:'Sequelize',
                                path: '/skills/sequelize.svg'
                            },
                            // {
                            //     name: 'Prisma',
                            //     path: '/skills/prisma.svg'
                            // }
                        ]}
                    />
                    <TechCard
                        title="Tools & Others"
                        className="bg-[#10c0a2]"
                        tech={[
                            {
                                name:'Microsoft Azure',
                                path: '/skills/azure.svg'
                            },
                            {
                                name:'Git',
                                path: '/skills/git.svg'
                            },
                            {
                                name:'Postman',
                                path: '/skills/postman.svg'
                            },
                            {
                                name:'GitHub',
                                path: '/skills/github.svg'
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;