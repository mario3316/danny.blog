"use client";

import { resume } from "@/config/resume";
import { Project } from "@/config/types";
import { cn } from "@/lib/utils";
import { useAboutObserver } from "@/utils/useIO";
import Image from "next/image";
import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

type Props = {
    projects: Project[];
};

export default function AboutPage({ projects }: Props) {
    const target = useAboutObserver("h2");
    const contents = ["Career", "Education"];

    const smoothScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element && targetId === "Career") {
            window.scrollTo({
                top: element.offsetTop - 96,
                behavior: "smooth",
            });
        } else if (element && targetId !== "Career") {
            window.scrollTo({
                top: element.offsetTop - 48,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full flex flex-col min-w-[400px] max-w-[750px] items-center md:items-start">
            <div
                id="left"
                className="max-w-[400px] md:w-[250px] pr-4 md:block md:fixed flex flex-row"
            >
                <div className="text-center md:text-start">
                    <h1 className="font-bold text-4xl">{resume.name}</h1>
                    <p className="text-md dark:text-zinc-200/80 text-zinc-500/80 mt-2">
                        {resume.position}
                    </p>
                    <p className="text-sm mt-2 ">{resume.description}</p>
                </div>

                <aside className="sidebar mt-12 hidden md:block">
                    <div className="mb-4 animate-slide-in-right-0.5">
                        <ul className="text-md">
                            {contents.map((content) => {
                                const isIntersecting = target.includes(content);

                                return (
                                    <li key={content} className="py-3">
                                        <Link
                                            href={`#${content}`}
                                            className="flex group items-center"
                                            onClick={(
                                                e: React.MouseEvent<HTMLAnchorElement>,
                                            ) => {
                                                e.preventDefault();
                                                smoothScroll(content);
                                            }}
                                        >
                                            <hr
                                                className={cn(
                                                    "mr-4 h-px w-8 bg-black group-hover:w-16 transition-all group-hover:bg-blue-500 group-hover:h-[2px]",
                                                    isIntersecting &&
                                                        "bg-blue-500 w-16 h-[2px]",
                                                )}
                                            />

                                            <span
                                                className={cn(
                                                    "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-hover:text-blue-500",
                                                    isIntersecting &&
                                                        "text-blue-500",
                                                )}
                                            >
                                                {content}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
            <div
                id="right"
                className="flex flex-col justify-center max-w-[450px] mt-12 md:mt-0 md:w-[480px] md:ml-[250px] px-4 md:px-0"
            >
                <div id="Career" className="scroll-mt-24" />
                <div>
                    <h2 className="font-bold text-2xl px-6">Career</h2>
                    {resume.career?.map((exp) => (
                        <div
                            key={exp.title + exp.duration}
                            className="flex flex-row px-6 py-4 rounded-md hover:shadow-sm hover:bg-cyan-100/50 group"
                        >
                            <div className="w-[120px]">
                                <p className="text-sm">{exp.duration}</p>
                            </div>
                            <div className="w-[380px]">
                                <p className="font-semibold group-hover:text-blue-700/80">
                                    {exp.title}
                                </p>
                                <p className="mt-1 text-md">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="Education" className="scroll-mt-12" />
                <div className="mt-12">
                    <h2 className="font-bold text-2xl px-6">Education</h2>
                    {resume.education?.map((edu) => (
                        <div
                            key={edu.title + edu.duration}
                            className="flex flex-row px-6 py-4 rounded-md hover:shadow-sm hover:bg-cyan-100/50 group"
                        >
                            <div className="w-[120px]">
                                <p className="text-sm">{edu.duration}</p>
                            </div>
                            <div className="w-[380px]">
                                <p className="font-semibold group-hover:text-blue-700/80">
                                    {edu.title}
                                </p>
                                <p className="mt-1 text-md">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
