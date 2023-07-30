import Image from 'next/image';
import Link from 'next/link';
import CareerChart from '../public/career_img/career_chart.webp';
import CareerChartMobile from '../public/career_img/career_chart_mobile.webp';
import Layout from 'components/layouts';
import SocialButtons from 'components/social-buttons';
import { TECHSTACK } from 'constants/techStack';
import { useEffect } from 'react';
import useCurrentTabStore from 'stores/currentTab';
import ShowMoreCard from 'components/ProjectCard/show_more_card';

export default function Home() {
  const { setToHome } = useCurrentTabStore();

  useEffect(() => {
    setToHome();
  }, []);

  return (
    <Layout navBarOptions={{ displayType: 'SeeThrough' }}>
      <>
        <section
          className={`min-h-screen bg-center bg-no-repeat bg-cover bg-[url('/joe_bg.png')]`}
        >
          <div className="mx-auto md:mx-0 md:ml-[20vw] lg:ml-[40vw] xl:ml-[45vw] 2xl:ml-[55vw] md:pr-24 text-center md:text-left px-4 ">
            <div className="pt-[22vh]"></div>
            <b className="text-3xl md:text-5xl text-white font-normal">
              Greetings!
            </b>
            <div className="pt-[12vh] md:pt-16"></div>
            <h1 className="text-3xl md:text-5xl text-white md:leading-[1.4] font-extralight">
              {"It's me "}
              <b className="text-primaryPurple font-bold">Joseph Koolerson</b>,
              your <b className="text-primaryPurple font-bold">Game</b> and{' '}
              <b className="text-primaryPurple font-bold">Web</b>
              {' developer'}
            </h1>
            <div className="mt-9 md:mt-4" />
            <h1 className="text-3xl md:text-5xl text-white md:leading-[1.4] font-extralight">
              {"Let's see if some of my "}
              <Link href={'/projects'}>
                <u>projects</u>
              </Link>
              <br className="md:hidden" /> caugt your eyes
            </h1>

            <div className="mt-6 md:mt-12" />
            <SocialButtons />

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

          <div className="flex flex-nowrap gap-5 md:gap-10 flex-shrink-0 overflow-x-auto">
            <ShowMoreCard
              id="OIC"
              src="https://storage.googleapis.com/joe-port-bucket-1/292670856_5488351314550386_7274380543853968100_n.jpg"
              name="OIC"
              techStacks={[
                TECHSTACK.CSHARP,
                TECHSTACK.UNITY,
                TECHSTACK.UNIRX,
                TECHSTACK.DOTWEEN,
              ]}
              description={`A play to earn A "Play to Learn" game that is both fun and improves players' knowledge about the real-world insurance system. Responsible for Store, Inventory, Mission, Quiz, Daily rewards, Tournament, and Friend list frontend modules using Unity C#`}
            />
            <ShowMoreCard
              id="TTD"
              src="https://storage.googleapis.com/joe-port-bucket-1/TTD.webp"
              name="TTD"
              techStacks={[
                TECHSTACK.REACT_NATIVE,
                TECHSTACK.TYPESCRIPT,
                TECHSTACK.REDUX,
                TECHSTACK.SAGA,
                TECHSTACK.SC,
              ]}
              description="An application for the Thailand Tourism Directory (Official department) using React Native with TypeScript deployed on both the App Store and Play Store"
            />
            <ShowMoreCard
              id="DensoDocTag"
              src="https://storage.googleapis.com/joe-port-bucket-1/DensoDocTag.png"
              name="Document tagging"
              techStacks={[
                TECHSTACK.NEXT,
                TECHSTACK.REACT,
                TECHSTACK.ZUSTAND,
                TECHSTACK.TAILWIND,
                TECHSTACK.ANTD,
              ]}
              description="A user-friendly frontend application using NextJS, Ant Design, and Tailwind for efficient document management at the Denso factory. Replacing manual document searches, the application greatly improved user experience and saved valuable time for workers"
            />
          </div>

          <div className="pt-16"></div>

          <Link
            href="/projects"
            className="bg-backgroundGrey mx-auto block border-solid border-white border-2 py-4 px-8 text-center duration-500 hover:invert hover:border-transparent rounded-2xl"
          >
            <button>
              <h1>More Projects</h1>
            </button>
          </Link>
          <div className="pt-16"></div>
        </section>

        <section className="min-h-screen bg-backgroundGrey text-white">
          <div className="pt-24"></div>
          <b className="text-5xl text-center block mx-auto">
            Career Experience
          </b>
          <div className="pt-28"></div>
          <Image
            src={CareerChart}
            alt={'Career Chart Image'}
            className="hidden md:block mx-auto"
          ></Image>
          <Image
            src={CareerChartMobile}
            alt={'Career Chart Mobile Image'}
            className="w-screen md:hidden pl-9"
          ></Image>
          <div className="pt-24"></div>
        </section>

        <section className="bg-backgroundGrey text-white">
          <div className="pt-24"></div>
          <b className="text-5xl text-center block mx-auto">Skills</b>
          <div className="pt-28"></div>
          <div className="grid grid-rows-2 lg:grid-flow-col gap-10 px-12 md:px-36">
            <div className="row-span-2 border-dashed border-2 pl-7 pb-7 relative">
              <b className="absolute -top-6 left-2 bg-backgroundGrey text-2xl md:text-4xl">
                {'Web Dev (Proficient)'}
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
                {'Web Dev (Basic)'}
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
                {'Game Development'}
              </b>
              <div className="pt-7"></div>
              <ul className="list-disc pl-4">
                <li className="text-xl md:text-2xl">Unity C#, and UniRX </li>
                <li className="text-xl md:text-2xl">Python pygame</li>
              </ul>
            </div>
          </div>

          <div className="pt-28"></div>
        </section>
      </>
    </Layout>
  );
}
