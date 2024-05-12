import React from 'react';
import  {cn}  from '../../utils/util';
import Image from "next/image";

const TechCard = ({ title, tech }) => {
    return (
        // <div className="flex-1 flex flex-col gap-4 bg-gradient-to-r from-[#24242a] to-gray-500 p-4 rounded-md shadow-lg">
        <div className="flex-1 flex flex-col gap-4 bg-gradient-to-r from-[#2c2c31] to-[#1d1e20] p-4 rounded-md shadow-lg">
            <div className="min-w-full text-primary font-medium text-lg tracking-wider">
                {title}
            </div>
            <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            'rounded-md bg-[#15121a] text-s text-slate-100 p-2',
                            item.name === 'Tailwind' && 'border border-blue-500/60',
                            item.name === 'Javascript' && 'border border-yellow-500/60',
                            item.name === 'React.js' && 'border border-green-500/60',
                            item.name === 'Next.js' && 'border border-red-500/60',
                            item.name === 'Node.js' && 'border border-green-500/60',
                            item.name === 'Microservice Architecture' && 'border border-blue-500/60',
                            item.name === 'Express.js' && 'border border-yellow-500/60',
                            item.name === 'MySQL' && 'border border-orange-500/60',
                            item.name === 'MongoDB' && 'border border-emerald-500/60',
                            item.name === 'PostgreSQL' && 'border border-blue-500/60',
                            item.name === 'Sequelize' && 'border border-pink-500/60',
                            item.name === 'Git & GitHub' && 'border border-blue-500/60',
                            item.name === 'Netlify' && 'border border-green-500/60',
                            item.name === 'Render' && 'border border-red-500/60',
                            item.name === 'Microsoft Azure' && 'border border-yellow-500/60'
                        )}
                    >
                    <div className={'flex justify-center items-center'}>
                        <div>
                            <Image
                                src={item?.path}
                                alt={`${item} logo`}
                                className="w-6 h-6"
                                width={'6'}
                                height={'6'}
                            />
                        </div>
                        <div className={'ml-2'}>
                            {item.name}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
