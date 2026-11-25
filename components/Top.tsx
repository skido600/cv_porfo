import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

const EMAIL = "ebisileonard@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

function Top() {
  return (
    <section className="mx-auto w-full max-w-5xl mt-8 overflow-x-clip px-3 lg:px-30">
      <main className="mx-auto max-w-6xl px-4 ">
        <div className="flex items-center justify-between gap-4">
          <Image
            src="/leowave.png"
            alt="Leo Wave"
            width={64}
            height={64}
            priority
            className="rounded-full object-cover"
          />

          <div className="space-y-1">
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  font-space items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Reach out
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Top;
