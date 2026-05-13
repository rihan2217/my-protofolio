import React from "react";
import profile from "../assets/images/profile.png";

const skills = [
  { name: "HTML & CSS", level: 90, color: "#47afa1" },
  { name: "JavaScript", level: 82, color: "#ffe578" },
  { name: "Tailwind CSS", level: 85, color: "#47afa1" },
  { name: "React.js", level: 80, color: "#ffe578" },
  { name: "Node.js,Express.js", level: 85, color: "#ffe578" },
  { name: "PHP", level: 70, color: "#ffe578" },
  { name: "Java", level: 85, color: "#1788ae" },
  { name: "MongoDB", level: 80, color: "#ffe578" },
  { name: "MySQL / SQL", level: 75, color: "#fc815c" },
  { name: "Git & GitHub", level: 78, color: "#fc815c" },
];

const timeline = [
  {
    year: "June 2024",
    title: "Started Coding Journey",
    description:
      "Began learning programming fundamentals with Java, HTML, and CSS.",
  },

  {
    year: "December 2024",
    title: "Explored Full Stack Development",
    description:
      "Learned Java Servlets, JSP, SQL, and backend development concepts.",
  },

  {
    year: "February 2025",
    title: "Built Real Projects",
    description:
      "Developed projects like Plant Kart, AnimeVerse, and other full-stack applications.",
  },

  {
    year: "May 2025",
    title: "Frontend & React Development",
    description:
      "Worked with React.js, Tailwind CSS, and modern JavaScript (ES6+).",
  },

  {
    year: "June 2025",
    title: "Started First Internship",
    description:
      "Got selected for my first internship and gained real-world development experience.",
  },

  {
    year: "Present",
    title: "MERN Stack & Job Search",
    description:
      "Currently mastering the MERN stack while looking for frontend and full-stack developer opportunities.",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-screen-xl mx-auto px-4 pb-16 pt-8">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        About Me
      </h2>

      {/* Bio + Photo Row */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
        {/* Avatar placeholder / initials */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1595b6] to-[#1f2667] flex items-center justify-center shadow-[0_0_60px_rgba(23,136,174,0.4)] border-4 border-[#1788ae] overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio text */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-['Spartan'] font-bold text-[#1788ae] mb-4">
            Hi, I'm Md Rihan 👋
          </h3>
          <p className="text-sm md:text-base text-justify leading-relaxed mb-4 text-[#717070]">
            I'm a passionate{" "}
            <span className="text-[#1788ae] font-semibold">
              Java Full Stack Developer
            </span>{" "}
            with a strong foundation in both frontend and backend technologies.
            I love building clean, functional, and user-friendly web
            applications that solve real-world problems.
          </p>
          <p className="text-sm md:text-base text-justify leading-relaxed mb-4 text-[#717070]">
            My journey started with Java and gradually expanded into the modern
            web ecosystem — React.js, Tailwind CSS, Spring Boot, and SQL
            databases. I enjoy every layer of the stack, from crafting
            pixel-perfect UIs to designing efficient backend APIs.
          </p>
          <p className="text-sm md:text-base text-justify leading-relaxed text-[#717070]">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or leveling up through online courses
            and building personal projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex flex-col items-center bg-[#1a1a1a] border border-[#222] rounded-xl px-6 py-3">
              <span className="text-2xl font-bold text-[#1788ae]">30+</span>
              <span className="text-xs text-[#999] mt-1">Projects Built</span>
            </div>
            <div className="flex flex-col items-center bg-[#1a1a1a] border border-[#222] rounded-xl px-6 py-3">
              <span className="text-2xl font-bold text-[#1788ae]">3+</span>
              <span className="text-xs text-[#999] mt-1">Certificates</span>
            </div>
            <div className="flex flex-col items-center bg-[#1a1a1a] border border-[#222] rounded-xl px-6 py-3">
              <span className="text-2xl font-bold text-[#1788ae]">2+</span>
              <span className="text-xs text-[#999] mt-1">Years Learning</span>
            </div>
             <div className="flex flex-col items-center bg-[#1a1a1a] border border-[#222] rounded-xl px-6 py-3">
              <span className="text-2xl font-bold text-[#1788ae]">~1</span>
              <span className="text-xs text-[#999] mt-1">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
      <div className="mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-[#1788ae] mb-8 text-center">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 max-w-2xl mx-auto">
          {skills.map(({ name, level, color }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">{name}</span>
                <span className="text-sm" style={{ color }}>
                  {level}%
                </span>
              </div>
              <div className="w-full bg-[#222] rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${level}%`, backgroundColor: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-[#1788ae] mb-10 text-center">
          My Journey
        </h3>
        <div className="relative max-w-xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#1788ae] opacity-30" />

          <div className="space-y-8">
            {timeline.map(({ year, title, description }, i) => (
              <div key={i} className="flex gap-6 relative pl-14">
                {/* dot */}
                <div className="absolute left-6 top-1 w-4 h-4 rounded-full border-2 border-[#1788ae] bg-[#111] -translate-x-1/2" />
                <div>
                  <span className="text-xs font-bold text-[#1788ae] tracking-widest uppercase">
                    {year}
                  </span>
                  <h4 className="font-bold text-base mt-0.5">{title}</h4>
                  <p className="text-sm text-[#999] mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
