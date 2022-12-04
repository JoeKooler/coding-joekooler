import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hamburgerIcon from "../public/my_hamburger.png";
import youtubeIcon from "../public/social_icons/mono_youtube.png";
import linkedInIcon from "../public/social_icons/mono_linkedin.png";
import githubIcon from "../public/social_icons/mono_github.png";
import twitterIcon from "../public/social_icons/mono_twitter.png";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <section
        className={`w-screen h-screen bg-center md:bg-left bg-no-repeat bg-cover bg-[url('/joe_bg.png')]`}
      >
        <div className="md:invisible w-20 h-20 md:hidden pt-4 -0 pl-4">
          <button className="w-16 h-16">
            <Image src={hamburgerIcon} alt={"hamburgerIcon"} />
          </button>
        </div>

        <li className="hidden px-[25vw] h-24 text-white md:grid md:grid-cols-5 gap-4 justify-center content-center justify-items-center">
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
            Contact
          </Link>
          <Link href="/" className="text-3xl z-10">
            About
          </Link>
          <div className="absolute w-full h-24 bg-black opacity-25" />
        </li>

        <div className="mx-auto md:mx-0 md:ml-[55vw] md:pr-24 text-center md:text-left px-4 ">
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
          <div className="px-14 grid grid-cols-4 md:grid-cols-10 gap-4 md:px-0">
            <Link href={"https://github.com/JoeKooler"}>
              <Image src={githubIcon} alt={"githubIcon"}></Image>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/chitsanupong-klaithin-729b97162/"
              }
            >
              <Image src={linkedInIcon} alt={"linkedInIcon"}></Image>
            </Link>
            <Link href={"https://twitter.com/CodingJoekooler"}>
              <Image src={twitterIcon} alt={"twitterIcon"}></Image>
            </Link>

            <Link
              href={"https://www.youtube.com/channel/UCfzx0Ga-7_tzLM-HSrBB67w"}
            >
              <Image src={youtubeIcon} alt={"youtubeIcon"}></Image>
            </Link>
          </div>

          <div className="mt-10"/>
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
    </div>
  );
}
