import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { liveProjects } from "../data/projects";

export default function LiveProjects() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {liveProjects.map((project) => (
        <article
          key={project.domain}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bekijk ${project.name} (opent in een nieuw tabblad)`}
            className={`block p-5 pb-0 sm:p-8 sm:pb-0 ${project.background}`}
          >
            <div className="overflow-hidden rounded-t-xl border border-slate-200 bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
              <div
                className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="ml-3 text-xs text-slate-500">
                  {project.domain}
                </span>
              </div>
              <Image
                src={project.image}
                alt={`Homepage van ${project.name}, gebouwd door DevSoftWeb`}
                width={1440}
                height={1000}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[1.6] w-full object-cover object-top"
              />
            </div>
          </a>
          <div className="p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-slate-500">{project.category}</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                Live website
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">
              {project.name}
            </h3>
            <p className="mb-5 leading-relaxed text-slate-600">
              {project.description}
            </p>
            <ul
              className="mb-6 flex flex-wrap gap-2"
              aria-label="Projectkenmerken"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-slate-50 px-3 py-1 text-xs text-slate-600"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-900"
            >
              Bekijk de website{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">
                van {project.name} (nieuw tabblad)
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
