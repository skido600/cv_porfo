import React from "react";

type Social = {
  name: string;
  label: string;
  href: string;
};

const socials: Social[] = [
  {
    name: "Instagram",
    label: "instagram.com/lwave1962",
    href: "https://www.instagram.com/lwave1962?evlk=MTltYjYxaDl0bTh3OQ==",
  },
  {
    name: "Discord",
    label: "discord.gg/830161789437870121",
    href: "https://discord.gg/830161789437870121",
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/leowave",
    href: "https://linkedin.com/in/leowave",
  },
  {
    name: "X",
    label: "x.com/leowave001",
    href: "https://x.com/leowave001",
  },
  {
    name: "Email",
    label: "ebisileonard@gmail.com",
    href: "mailto:ebisileonard@gmail.com",
  },
];

function Elsewhere() {
  return (
    <section className="mx-auto w-full max-w-5xl overflow-x-clip px-3 lg:px-30">
      <main className="mx-auto max-w-6xl px-4">
        <h3 className="text-lg  font-Bangers  tracking-wide">Elsewhere</h3>

        <ul className="space-y-2">
          {socials.map((social) => {
            const isMail = social.href.startsWith("mailto:");
            return (
              <li
                key={social.name}
                className="flex items-baseline tracking-normal leading-5 justify-between gap-4 text-sm">
                <span className="opacity-70">{social.name}</span>
                <a
                  href={social.href}
                  {...(!isMail && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="underline-offset-4 opacity-70 hover:underline">
                  {social.label}
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
}

export default Elsewhere;
