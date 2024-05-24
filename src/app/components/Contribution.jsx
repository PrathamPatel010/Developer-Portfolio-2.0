import React from 'react';
import { contributions } from '../data';

const Contribution = () => {
    return (
        <section id={'contribution'} className="mt-24 pt-24 md:mt-24 md:pt-24">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Open Source Contributions</h2>
            {contributions.map((contribution, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg p-6 mb-6 shadow-lg">
                    <h3 className="text-2xl font-semibold text-white">{contribution.role} - {contribution.eventName}</h3>
                    <p className="text-gray-300">{contribution.timeline}</p>
                    <ul className="list-disc list-inside mt-4 text-gray-100">
                        {contribution.detailedWork.map((work, i) => (
                            <li key={i} className="mt-2">{work}</li>
                        ))}
                    </ul>
                    <p className="text-gray-300 mt-4">Tech Stack: {contribution.techStack.join(', ')}</p>
                </div>
            ))}
        </section>
    );
};

export default Contribution;
