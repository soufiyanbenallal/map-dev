import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MOTION_FADEUP } from "@/constants";
import { IProject } from "@/interfaces";
import Box from "@/components/Box";
import { Link } from "react-router-dom";
import { routesEnum } from "@/enums";
import classNames from "classnames";

const url = import.meta.env.VITE_API || "";
export default function GithubProjectSection() {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    axios
      .get(url.replace("[user]", "soufiyanbenallal"))
      .then(({ data }: { data: IProject[] }) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <section className="container mx-auto pb-60">
      <article className="text-gray-800 p-20 flex flex-col items-center justify-center">
        <h3 className="text-3xl text-center w-full font-bold tracking-wide uppercase">Projects <span className="relative">showcase 
          
         <span className="blur-md z-[-1] absolute left-0 top-0 w-full h-9 opacity-70 bg-gradient-to-l from-cyan-400 via-yellow-500 to-rose-600"></span>
          </span></h3>
        <p className="text-sm text-slate-500 py-2 font-extralight">Our github open source app</p>
      </article>
      <article>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((project,idx) => (
            <Box
              as='li'
              y={40}
              delay={idx* 0.1}
              duration={1000}
              variant='fadeup'
              key={project.id}
              className={classNames(`animate-delay-${idx}`,"rounded-[12px] animate-gradient bg-gradient-to-r from-cyan-400 via-yellow-500 to-rose-600 p-0.5 shadow-xl hover:shadow-sm")}
            >
              <div className="rounded-[10px] bg-white h-full p-1 sm:p-3 !pt-10">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {project.pushed_at}
                </time>

                <a target="_blank" href={project.html_url}>
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {project.name}
                  </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    JavaScript
                  </span>
                </div>
              </div>
            </Box>
          ))}
        </ul>
      </article>
      <article className="p-20 flex items-center justify-center">
        <Link to={routesEnum.works} className="button text-shadow text-sm font-semibold text-gray-800 border border-gray-800 bg-gray-200 px-8 py-2.5 hover:bg-gray-800 hover:text-white">
          <span className="block leading-[1] -mt-0.5">Show more</span>
        </Link>
      </article>
    </section>
  );
}
