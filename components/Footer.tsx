import React from "react";

const NAME = "Leo Wave";
const PORTFOLIO_URL = "";
const PORTFOLIO_LABEL = "";

function Footer() {
  return (
    <footer className="mx-auto mt-6 w-full max-w-5xl overflow-x-clip px-4 pb-8 lg:px-30">
      <div className="mx-auto max-w-6xl space-y-2 px-4 text-xs">
        <p className="opacity-70">
          For a full look at my work, visit my main portfolio at{" "}
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-100">
            {PORTFOLIO_LABEL}
          </a>
          .
        </p>
        <p className="opacity-50">
          &copy; {new Date().getFullYear()} {NAME}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
