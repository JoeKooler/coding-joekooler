import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hamburgerIcon from "../public/my_hamburger.png";
import youtubeIcon from "../public/social_icons/mono_youtube.png";
import linkedInIcon from "../public/social_icons/mono_linkedin.png";
import githubIcon from "../public/social_icons/mono_github.png";
import twitterIcon from "../public/social_icons/mono_twitter.png";
import Link from "next/link";

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

        <div className="mx-auto md:mx-0 md:ml-[30vw] xl:ml-[55vw] md:pr-24 text-center md:text-left px-4 ">
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
        <div className="pt-20" />
        <div className="w-full text-center">
          <b className="text-3xl md:text-5xl">Featured Projects</b>
        </div>

        <div className="pt-16"></div>

        <div className="flex flex-nowrap flex-shrink-0 overflow-x-auto">
          <div className="w-80 md:w-[32rem] flex-shrink-0 rounded-2xl overflow-hidden mr-5 md:mr-10 last:mr-0">
            <div className="h-52 md:h-80 bg-center bg-no-repeat bg-cover bg-[url('/project_img/oic_banner.jpg')]"></div>
            <div className="h-[7.6rem] md:h-[12.25rem] bg-white pt-8 px-7 pb-4">
              <p className="text-literalBlack text-2xl h-24 overflow-clip text-ellipsis">
                Lorem ipsum dsgml;dsgmsdl;gsdmlg;dsmgl;sdmgl;dsgmdsl;gmdls;
              </p>
              <div className="h-[1px] w-full bg-backgroundGrey"></div>
              <div className="pt-2"></div>
              <div className="flex">
                <div className="h-10 bg-backgroundGrey text-center p-2 rounded-2xl mr-2">C#</div>
                <div className="h-10 bg-backgroundGrey text-center p-2 rounded-2xl mr-2">Unity</div>
                <div className="h-10 bg-backgroundGrey text-center p-2 rounded-2xl mr-2">UniRX</div>
              </div>
            </div>
          </div>

          <div className="w-80 md:w-[32rem] rounded-2xl flex-shrink-0 overflow-hidden mr-5 md:mr-10 last:mr-0">
            <div className="h-52 md:h-80 bg-center bg-no-repeat bg-cover bg-[url('/project_img/oic_banner.jpg')]"></div>
            <div className="h-[7.6rem] md:h-[12.25rem] bg-white pt-8 px-7 pb-4">
              <p className="text-literalBlack text-2xl h-16 overflow-clip text-ellipsis">
                Lorem ipsum dsgml;dsgmsdl;gsdmlg;dsmgl;sdmgl;dsgmdsl;gmdls;
              </p>
            </div>
          </div>

          <div className="w-80 md:w-[32rem] rounded-2xl flex-shrink-0 overflow-hidden mr-5 md:mr-10 last:mr-0">
            <div className="h-52 md:h-80 bg-center bg-no-repeat bg-cover bg-[url('https://scontent.fubp1-1.fna.fbcdn.net/v/t1.15752-9/316573737_547695580146752_4812529344706106324_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFHzjJ_qNMWT2toA0eXlz6jJ6jDKPkFrH0nqMMo-QWsfbwztK0zC19aRi_Daqkmf35vZbSADoultoYk4_af7bb5&_nc_ohc=-vxzGxcOGvUAX8z2NAv&_nc_ht=scontent.fubp1-1.fna&oh=03_AdShkOqQg60ZG_Ppb-yMd2f3wPL_N_CwF65IIT8UHF7o8A&oe=63B4DB30')]"></div>
            <div className="h-[7.6rem] md:h-[12.25rem] bg-white pt-8 px-7 pb-4">
              <p className="text-literalBlack text-2xl h-16 overflow-clip text-ellipsis">
                Lorem ipsum dsgml;dsgmsdl;gsdmlg;dsmgl;sdmgl;dsgmdsl;gmdls;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
