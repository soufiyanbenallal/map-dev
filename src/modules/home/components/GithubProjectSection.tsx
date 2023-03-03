import { useEffect, useState } from "react";
import axios from "axios";
import { IProject } from "@/interfaces";
import Box from "@/components/Box";
import { routesEnum } from "@/enums";
import classNames from "classnames";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Button from "@components/Button";
import laptopDevImg from "@assets/images/laptop-dev.jpg";

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
    <Box variant="fade" className="bg-white relative">
      <section className="m-container py-20">
        <article className="text-gray-800 pb-20 flex flex-col items-center justify-center">
          <h3 className="text-3xl text-center w-full font-bold tracking-wide uppercase">
            Projects{" "}
            <span className="relative">
              showcase
              <span className="blur-md z-[-1] absolute left-0 top-0 w-full h-9 opacity-70 bg-gradient-to-l from-cyan-400 via-yellow-500 to-rose-600"></span>
            </span>
          </h3>
          <p className="text-sm text-slate-500 py-2 font-extralight">
            Our github open source app
          </p>
        </article>
        <article className="flex gap-10">
          <ul className="grid grid-cols-2 md:grid-cols-2 w-2/3">
            {projects.slice(0, 6).map((project, idx) => (
              <Box
                as="li"
                delay={idx * 0.1}
                duration={1000}
                variant="fade"
                key={project.id}
                className={classNames(
                  `animate-delay-${idx}`,
                  // "rounded-[11x] animate-gradient bg-gradient-to-r from-cyan-400 via-yellow-500 to-rose-600 p-[1px] shadow-xl hover:shadow-sm"
                )}
              >
                <div className="rounded-[10x] h-full p-1 sm:p-3 !pt-10  border">
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
                    {/* <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      Snippet
                    </span>

                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      JavaScript
                    </span> */}
                  </div>
                </div>
              </Box>
            ))}
          </ul>
          <div className=" w-1/3">
            <img src={laptopDevImg} alt="" className="rounded-xl" />
          </div>
        </article>
        {/* <article className="p-20 flex items-center justify-center">
          <Button
            to={routesEnum.solutions}
            variant="secondary"
            icon={<ArrowRightIcon className="w-4 text-pink-700 animate-pulse" />}
          >
            Show more
          </Button>
        </article> */}
      </section>
    </Box>
  );
}
