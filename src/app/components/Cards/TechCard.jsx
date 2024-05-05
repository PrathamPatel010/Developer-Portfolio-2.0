import React from 'react';
import  {cn}  from '../../utils/util';

const TechCard = ({ title, tech }) => {
    return (
        <div className="flex-1 flex flex-col gap-4 bg-[#1c1b23] p-4 rounded-md shadow-lg  hover:border-2 border-slate-50">
            <div className="text-primary font-medium text-lg tracking-wider">
                {title}
            </div>
            <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            'rounded-md bg-[#15121a] text-s text-slate-100 p-2',
                            item === 'Tailwind' && 'border border-blue-500/60',
                            item === 'Javascript' && 'border border-yellow-500/60',
                            item === 'React.js' && 'border border-green-500/60',
                            item === 'Next.js' && 'border border-red-500/60',
                            item === 'Node.js' && 'border border-green-500/60',
                            item === 'Microservice Architecture' && 'border border-blue-500/60',
                            item === 'Express.js' && 'border border-yellow-500/60',
                            item === 'MySQL' && 'border border-orange-500/60',
                            item === 'MongoDB' && 'border border-emerald-500/60',
                            item === 'PostgreSQL' && 'border border-blue-500/60',
                            item === 'Sequelize' && 'border border-pink-500/60',
                            item === 'Git & GitHub' && 'border border-blue-500/60',
                            item === 'Netlify' && 'border border-green-500/60',
                            item === 'Render' && 'border border-red-500/60',
                            item === 'Microsoft Azure' && 'border border-yellow-500/60'
                        )}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
