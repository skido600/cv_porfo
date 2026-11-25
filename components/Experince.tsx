import React from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Anambra Tech Space",
    role: "Frontend Developer",
    period: "2025",
    description:
      "Worked on designing and developing responsive user interfaces for web applications.",
  },
  {
    company: "TechBridge",
    role: "Web Development Intern",
    period: "2026 - Present",
    description:
      "Gained practical experience building web interfaces and working through structured web development tasks.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description:
      "Worked with over four clients to turn ideas and business requirements into functional web applications.",
  },
  {
    company: "KodeX Africa",
    role: "Backend Engineering",
    period: "2025",
    description:
      "Completed backend engineering training focused on building server-side applications and working with databases and APIs.",
  },
];

function Experience() {
  return (
    <section className="mx-auto w-full py-6 max-w-5xl overflow-x-clip px-3 lg:px-30">
      <main className="mx-auto max-w-6xl px-4">
        <h3 className="text-lg  font-Bangers  tracking-wide py-3">
          Experience
        </h3>
        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.role}`}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-medium">{exp.company}</h3>
                <span className="shrink-0 text-xs opacity-60">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs opacity-70">{exp.role}</p>
              <p className="mt-1 leading-5 text-sm tracking-normal opacity-70">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Experience;
