import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hamburgerIcon from "../public/my_hamburger.png";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <section className={`w-screen h-screen bg-[url('/joe_bg.png')]`}>
        <div className="md:invisible w-20 h-20 md:hidden pt-4 -0 pl-4">
          <button className="w-16 h-16">
            <Image src={hamburgerIcon} alt={"hamburgerIcon"} />
          </button>
        </div>

        <li className="invisible md:visible h-24 text-white">
          <Link href="/">Home</Link>
          <Link href="/">DevLogs</Link>
          <Link href="/">Resume</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Home</Link>
        </li>

        <div className="mx-auto md:mx-0 md:ml-[60vw] md:pr-24 text-center md:text-left px-4 font-light">
          <div className="pt-28"></div>
          <b className="text-3xl md:text-5xl text-white font-normal">
            Greetings!
          </b>
          <div className="pt-28 md:pt-16"></div>
          <h1 className="text-3xl md:text-5xl text-white">
            {"It's me "}
            <b className="text-primaryPurple font-bold">Joseph Koolerson</b>,
            your <b className="text-primaryPurple">Game</b> and{" "}
            <b className="text-primaryPurple font-bold">Web</b>
            {" developer"}
          </h1>
          <h1 className="text-3xl md:text-5xl text-white">
            Let's see if some of my <u>projects</u> <br className="md:hidden" />{" "}
            caugt your eyes
          </h1>
        </div>
      </section>
    </div>
  );
}
