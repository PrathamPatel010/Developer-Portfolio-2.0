import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsCard = ({ title, src, href, details }) => {
    return (
        <Link href={href || '/'} target="_blank">
            <div className="flex flex-col overflow-hidden gap-3 bg-gradient-to-r from-[#2c2c30] to-[#1d1e20] text-white rounded-lg overflow-ellipsis">
                <Image
                    src={`/projects/${src}`}
                    alt="project-photo"
                    width={700}
                    height={700}
                    className="aspect-video object-fit md:aspect-square md:object-cover"
                />
                <div className="flex flex-col px-2 py-1 h-max md:h-40 lg:h-32 xl:h-28">
                    <div className="flex font-bold">{title}</div>
                    <div className="flex text-info text-s">{details}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectsCard;