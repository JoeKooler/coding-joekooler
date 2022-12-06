import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hamburgerIcon from "../public/my_hamburger.png";
import youtubeIcon from "../public/social_icons/mono_youtube.png";
import linkedInIcon from "../public/social_icons/mono_linkedin.png";
import githubIcon from "../public/social_icons/mono_github.png";
import twitterIcon from "../public/social_icons/mono_twitter.png";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard/project_card";
import ProjectCardMock from "../components/ProjectCard/project_card.mock";
import CareerChart from "../public/career_img/career_chart.png";
import CareerChartMobile from "../public/career_img/career_chart_mobile.png";

// Todo
// Finish Each section
// Extract Styles to Design System
// Refactor later to prevent premature abstraction

export default function Home() {
  return (
    <div>
      <section
        className={`min-h-screen bg-center bg-no-repeat bg-cover bg-[url('/joe_bg.png')]`}
      >
        <div className="w-20 h-20 lg:hidden pt-4 -0 pl-4">
          <button className="w-16 h-16">
            <Image src={hamburgerIcon} alt={"hamburgerIcon"} />
          </button>
        </div>

        <li className="hidden px-[25vw] h-24 text-white lg:grid lg:grid-cols-5 gap-4 justify-center content-center justify-items-center">
          <Link href="/" className="text-3xl z-10 underline">
            Home
          </Link>
          <Link href="/" className="text-3xl z-10">
            DevLogs
          </Link>
          <Link href="/" className="text-3xl z-10">
            Resume
          </Link>
          <Link href="/" className="text-3xl z-10">
            Projects
          </Link>
          <Link href="/" className="text-3xl z-10">
            About
          </Link>
          <div className="absolute w-full h-24 bg-black opacity-25" />
        </li>

        <div className="mx-auto md:mx-0 md:ml-[20vw] lg:ml-[40vw] xl:ml-[45vw] 2xl:ml-[55vw] md:pr-24 text-center md:text-left px-4 ">
          <div className="pt-[12vh]"></div>
          <b className="text-3xl md:text-5xl text-white font-normal">
            Greetings!
          </b>
          <div className="pt-[12vh] md:pt-16"></div>
          <h1 className="text-3xl md:text-5xl text-white md:leading-[1.4] font-extralight">
            {"It's me "}
            <b className="text-primaryPurple font-bold">Joseph Koolerson</b>,
            your <b className="text-primaryPurple font-bold">Game</b> and{" "}
            <b className="text-primaryPurple font-bold">Web</b>
            {" developer"}
          </h1>
          <div className="mt-9 md:mt-4" />
          <h1 className="text-3xl md:text-5xl text-white md:leading-[1.4] font-extralight">
            {"Let's see if some of my "}
            <Link href={"/projects"}>
              <u>projects</u>
            </Link>
            <br className="md:hidden" /> caugt your eyes
          </h1>

          <div className="mt-6 md:mt-12" />
          <div className="px-14 justify-center md:justify-start flex md:px-0">
            <Link href={"https://github.com/JoeKooler"} className="mr-4">
              <Image
                src={githubIcon}
                alt={"githubIcon"}
                className="duration-500 hover:invert"
              ></Image>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/chitsanupong-klaithin-729b97162/"
              }
              className="mr-4"
            >
              <Image
                src={linkedInIcon}
                alt={"linkedInIcon"}
                className="duration-500 hover:invert"
              ></Image>
            </Link>
            <Link href={"https://twitter.com/CodingJoekooler"} className="mr-4">
              <Image
                src={twitterIcon}
                alt={"twitterIcon"}
                className="duration-500 hover:invert"
              ></Image>
            </Link>

            <Link
              href={"https://www.youtube.com/channel/UCfzx0Ga-7_tzLM-HSrBB67w"}
              className="mr-4"
            >
              <Image
                src={youtubeIcon}
                alt={"youtubeIcon"}
                className="duration-500 hover:invert"
              ></Image>
            </Link>
          </div>

          <div className="mt-10" />
          <div className="text-white">
            <h1>Have an idea? Drop me a message at</h1>
            <address>
              <a href="mailto:josephkoolerson@gmail.com">
                <u>josephkoolerson@gmail.com</u>
              </a>
            </address>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-backgroundGrey text-white px-6 md:px-[8.5rem]">
        <div className="pt-24" />
        <div className="w-full text-center">
          <b className="text-3xl md:text-5xl">Featured Projects</b>
        </div>

        <div className="pt-20"></div>

        <div className="flex flex-nowrap flex-shrink-0 overflow-x-auto">
          <ProjectCardMock />
          <ProjectCardMock />
          <ProjectCardMock />
        </div>

        <div className="pt-16"></div>

        <Link
          href="/project"
          className="mx-auto block border-solid border-white border-2 py-4 px-8 text-center"
        >
          <button>
            <h1>More Projects</h1>
          </button>
        </Link>
        <div className="pt-16"></div>
      </section>

      <section className="min-h-screen bg-backgroundGrey text-white">
        <div className="pt-24"></div>
        <b className="text-5xl text-center block mx-auto">Career Experience</b>
        <div className="pt-28"></div>
        <Image
          src={CareerChart}
          alt={"Career Chart Image"}
          className="hidden md:block mx-auto"
        ></Image>
        <Image
          src={CareerChartMobile}
          alt={"Career Chart Mobile Image"}
          className="w-screen md:hidden pl-9"
        ></Image>
        <div className="pt-24"></div>
      </section>

      <section className="min-h-screen bg-backgroundGrey text-white">
        <div className="pt-24"></div>
        <b className="text-5xl text-center block mx-auto">Skills</b>
        <div className="pt-28"></div>
        <div className="grid grid-rows-2 lg:grid-flow-col gap-10 px-12 md:px-36">
          <div className="row-span-2 border-dashed border-2 pl-7 pb-7 relative">
            <b className="absolute -top-6 left-2 bg-backgroundGrey text-2xl md:text-4xl">
              {"Web Dev (Proficient)"}
            </b>
            <div className="pt-7"></div>
            <ul className="list-disc pl-4">
              <li className="text-xl md:text-2xl">HTML, CSS, JS, and TS</li>
              <li className="text-xl md:text-2xl">
                React, React Native,and NextJS
              </li>
              <li className="text-xl md:text-2xl">Tailwind,and MUI</li>
              <li className="text-xl md:text-2xl">
                NodeJS, ExpressJS, and NestJS
              </li>
              <li className="text-xl md:text-2xl">Socket.IO</li>
              <li className="text-xl md:text-2xl">
                AWS (Lightsail, Lambda, and IVS)
              </li>
            </ul>
          </div>
          <div className="border-dashed border-2 pl-7 pb-7 relative">
            <b className="absolute -top-6 left-2 bg-backgroundGrey text-2xl md:text-4xl">
              {"Web Dev (Basic)"}
            </b>
            <div className="pt-7"></div>
            <ul className="list-disc pl-4">
              <li className="text-xl md:text-2xl">Nginx, and Linux</li>
              <li className="text-xl md:text-2xl">Postgres, and MongoDB</li>
              <li className="text-xl md:text-2xl">Puppeteer</li>
              <li className="text-xl md:text-2xl">VueJS</li>
            </ul>
          </div>

          <div className="border-dashed border-2 pl-7 pb-7 relative">
            <b className="absolute -top-6 left-2 bg-backgroundGrey text-2xl md:text-4xl">
              {"Game Development"}
            </b>
            <div className="pt-7"></div>
            <ul className="list-disc pl-4">
              <li className="text-xl md:text-2xl">Unity C#, and UniRX </li>
              <li className="text-xl md:text-2xl">Python pygame</li>
            </ul>
          </div>
        </div>

        <div className="pt-24"></div>
      </section>

      <section >

      </section>
    </div>
  );
}
