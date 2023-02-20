import { IProject } from '@/interfaces'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url = import.meta.env.VITE_API || ''
export default function GithubProjectSection() {
  const [projects, setProjects] = useState<IProject[]>([])
  useEffect(() => {
    axios.get(url.replace('[user]', 'soufiyanbenallal'))
      .then(({data}: { data: IProject[] }) => {
        console.log(data);
        setProjects(data);
      })
  
    return () => {
      
    }
  }, [])
  
  return (
    <section className='container mx-auto pb-60'>
      <article className='text-gray-800 p-20 flex items-center justify-center'>
        <h3 className='text-3xl text-center w-full'>Projects Showcase</h3>
      </article>
      <article>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-5'>
          {
            projects.slice(0,6).map(project => (
              <li
                key={project.id}
                className="rounded-[10px] bg-gradient-to-r from-green-300 via-cyan-500 to-rose-600 p-0.5 shadow-xl hover:shadow-sm"
              >
                <div className="rounded-[8px] bg-white h-full p-1 sm:p-3 !pt-10">
                  <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                    {project.pushed_at}
                  </time>

                  <a target="_blank" href={project.html_url}>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {project.name}
                    </h3>
                  </a>

                  <div className="mt-4 flex flex-wrap gap-1">
                    <span
                      className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                    >
                      Snippet
                    </span>

                    <span
                      className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                    >
                      JavaScript
                    </span>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </article>
      <article className='p-20 flex items-center justify-center'>
        <button className='button text-white bg-gray-900s'>show more</button>
      </article>
    </section>
  )
}
