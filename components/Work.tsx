import React from "react";

type Project = {
  name: string;
  description: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    name: "Melodia",
    description:
      "A music streaming platform where users can explore music, discover songs, and enjoy a seamless listening experience.",
    liveUrl: "https://melodai-cyan.vercel.app",
  },
  {
    name: "ReadNest",
    description:
      "An online reading platform where users can discover, search, and read books while tracking their reading progress.",
    liveUrl: "https://read-nest-431c.vercel.app",
  },
  {
    name: "MediCare",
    description:
      "An AI-powered healthcare platform where users can book doctor appointments and interact with an AI assistant to understand symptoms and get health guidance powered by Groq.",
    liveUrl: "https://final-project-drab-eight.vercel.app/",
  },
];

function Work() {
  return (
    <section className="mx-auto my-6 w-full max-w-5xl overflow-x-clip px-3 lg:px-30">
      <main className="mx-auto max-w-6xl px-4 ">
        <h3 className="text-lg  font-Bangers   tracking-wide">
          Some of my Works
        </h3>
        <ul className="space-y-6 py-1">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <h3 className="text-sm font-medium">{project.name}</h3>
                <p className="mt-1 text-sm tracking-normal leading-5 opacity-70">
                  {project.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Work;
