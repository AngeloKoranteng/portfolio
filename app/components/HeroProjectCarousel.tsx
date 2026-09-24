"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
    {
        name: "Yomarra",
        url: "https://yomarraonline.nl",
        displayUrl: "yomarraonline.nl",
        image: "/portfolio/live/yomarra-online.png",
    },
    {
        name: "JMW Cleaning",
        url: "https://jmwcleaning.nl",
        displayUrl: "jmwcleaning.nl",
        image: "/portfolio/live/jwm-cleaning.png",
    },
];

export default function HeroProjectCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 4000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    const project = projects[current];

    return (
        <div className="relative min-w-0">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 sm:p-5"
            >
                <div className="mb-4 flex items-center justify-between gap-3 px-1 text-xs text-slate-500">
                    <span>Gebouwd door DevSoftWeb</span>

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800">
            {project.name} · Live
          </span>
                </div>

                <div className="relative aspect-[1440/1000] w-full overflow-hidden rounded-lg border border-slate-100">
                    <Image
                        src={project.image}
                        alt={`Website van ${project.name}, gebouwd door DevSoftWeb`}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover object-top"
                        priority={current === 0}
                    />
                </div>

                <div className="mt-4 flex items-center justify-between px-1 text-sm font-medium text-slate-700">
                    <span>Bekijk {project.displayUrl}</span>

                    <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                    />
                </div>
            </a>

            <div className="mt-4 flex justify-center gap-2">
                {projects.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => setCurrent(index)}
                        aria-label={`Bekijk ${item.name}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            current === index
                                ? "w-6 bg-teal-700"
                                : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}