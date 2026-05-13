import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2
        id="latest-works"
        className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]"
      >
        My Projects
      </h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
          linePosition={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}

      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2 opacity-30" />
    </section>
  )
}
