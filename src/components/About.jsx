import React from "react";
import profile from "../assets/images/profile.png";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Auth", "Middleware"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "MongoDB Atlas"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
  },
  {
    label: "Familiar",
    skills: ["Java", "Socket.io", "Redux", "EJS", "Multer"],
  },
];

const timeline = [
  {
    year: "July 2024",
    title: "Started Internship",
    description:
      "Joined Blumart Global LLP as a Full Stack Developer — built and deployed 4 production websites independently.",
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
      "Developed MERN social media app, e-commerce platform, and other full-stack applications.",
  },
  {
    year: "May 2025",
    title: "Frontend & React Development",
    description:
      "Worked with React.js, Tailwind CSS, and modern JavaScript (ES6+).",
  },
  {
    year: "Present",
    title: "MERN Stack & Growing",
    description:
      "Building full-stack projects, expanding into data analytics, and actively seeking opportunities.",
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
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1595b6] to-[#1f2667] flex items-center justify-center shadow-[0_0_60px_rgba(23,136,174,0.4)] border-4 border-[#1788ae] overflow-hidden">
            <img src={profile} alt="Md Rihan" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1788ae] mb-4">
            Hi, I'm Md Rihan 👋
          </h3>
          <p className="text-sm md:text-base text-justify leading-relaxed mb-4 text-[#717070]">
            I'm a{" "}
            <span className="text-[#1788ae] font-semibold">
              Full Stack Developer
            </span>{" "}
            with hands-on experience building and deploying production web applications using the MERN stack and PHP. I've independently delivered 4 live client projects — from requirement gathering to deployment.
          </p>
          <p className="text-sm md:text-base text-justify leading-relaxed text-[#717070]">
            I enjoy every layer of the stack — clean frontends, efficient APIs, and solid database design. Currently expanding into data analytics while continuing to build full-stack projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { value: "4", label: "Live Production Sites" },
              { value: "3+", label: "Certificates" },
              { value: "1+", label: "Years Learning" },
              { value: "6mo", label: "Work Experience" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-[#1a1a1a] border border-[#222] rounded-xl px-6 py-3"
              >
                <span className="text-2xl font-bold text-[#1788ae]">{value}</span>
                <span className="text-xs text-[#999] mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">

        {/* Skills — category tags */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1788ae] mb-8 text-center">
            Technical Skills
          </h3>
          <div className="space-y-5">
            {skillCategories.map(({ label, skills }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-3">
                <span className="text-xs font-bold text-[#1788ae] uppercase tracking-widest w-24 shrink-0 pt-1">
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#1788ae33] bg-[#1788ae11] text-[#aaa] hover:border-[#1788ae] hover:text-[#1788ae] transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1788ae] mb-10 text-center">
            My Journey
          </h3>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#1788ae] opacity-30" />
            <div className="space-y-8">
              {timeline.map(({ year, title, description }, i) => (
                <div key={i} className="flex gap-6 relative pl-14">
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
