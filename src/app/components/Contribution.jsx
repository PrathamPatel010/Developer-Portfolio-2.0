import { contributions } from "@/app/data";
import React from "react";

const Contribution = () => {
    return (
        <>
            <section id="contribution" className="pt-20 mt-10 opacity-90" aria-label="Contribution">
                <div className="text-4xl text-center font-medium mt-2 mb-5">
                    Open Source Contributions
                </div>
                <div>
                    <ol className="group/list">
                        {contributions.map((contribution, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid pb-1">
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={contribution.timeline}>{contribution.timeline}</header>
                                    <div className="z-10 sm:col-span-6">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={contribution.link} target="_blank" rel="noreferrer noopener" aria-label={contribution.eventName}>
                                                    <span>{contribution.eventName} · {contribution.company}</span>
                                                </a>
                                            </div>
                                        </h3>
                                        <ul className="mt-2 text-sm leading-normal list-disc pl-5">
                                            {contribution.detailedWork.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {contribution.techStack.map((tech, index) => (
                                                <li key={index} className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
};

export default Contribution;
