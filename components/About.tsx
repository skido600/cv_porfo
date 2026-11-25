import React from "react";

function About() {
  return (
    <section className="mx-auto w-full max-w-5xl overflow-x-clip px-3 lg:px-30">
      <main className="mx-auto max-w-6xl px-4">
        <p className=" leading-8 mt-1 text-sm tracking-normal opacity-70">
          I&rsquo;m Ebisi Chinecherem Leonard, professionally known as Leo Wave.
          I&rsquo;m a{" "}
          <span className="relative inline-block ">
            <span className="tracking-widest line-through  decoration-pink-400 decoration-2">
              Full Stack
            </span>
            <span className="absolute -top-2 left-0 whitespace-nowrap text-[10px] font-medium leading-none text-pink-400">
              Web &amp; Backend
            </span>
          </span>{" "}
          Software Engineer with 4+ years of experience turning ideas into
          reality. From the first spark of an idea to a fully functional
          product, I make things happen. I build, create, experiment, and bring
          ambitious ideas to life, whether it&rsquo;s a digital product, an
          application, or something entirely new. I believe in possibilities,
          taking action, and making things work. Ambition is priceless.
        </p>
      </main>
    </section>
  );
}

export default About;
