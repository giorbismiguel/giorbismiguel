import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Giorbis Miguel.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            I started off my career as a Developer fifteen years ago but started
            studying and working with Laravel 5 years ago in the Company
            Trafilea. In this company, I learn Laravel and create several
            projects in this framework. For the last 3 years I have been working
            at Smart145 in Laravel, first as a developer and after as a Team
            Lead. In this company, the main technologies in the frontend were
            VueJs and Bootstrap, in the backend we worked with, Laravel, Nova,
            Mysql, and Redis. We used Unit Test and Cypress for testing the
            application. We used Jira, Slack, Phpstorm, Wakatime, and Hubstaff.
          </p>
          <p className="mb-8 leading-relaxed text-justify">
            I have a lot of experience working with Javascript, CSS, and html
            because in my career I develop a lot of projects using these
            technologies for it was very easy for me working with JSX and React.
          </p>
          <p className="mb-8 leading-relaxed text-justify">
            I have experience working in the team, sharing knowledge, helping
            others and asking when I have a doubt, working under pressure, to
            finish the tasks in the planning time and sometimes it is necessary
            to work extra hours.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
