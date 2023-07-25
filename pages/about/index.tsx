import P from 'components/Typography/P';
import H1 from 'components/Typography/h1';
import H3 from 'components/Typography/h3';
import Layout from 'components/layouts';
import React, { useEffect } from 'react';
import useCurrentTabStore from 'stores/currentTab';

export default function About() {
  const { setToAbout } = useCurrentTabStore();

  useEffect(() => {
    setToAbout();
  }, []);

  return (
    <Layout navBarOptions={{ displayType: 'SeeThrough' }}>
      <div className="min-h-[60rem] bg-backgroundGrey">
        <div className="pl-0 pt-[7.5rem] lg:pt-[14.5rem] lg:pl-[9rem] flex flex-wrap lg:flex-nowrap justify-center">
          <img
            src="https://storage.googleapis.com/joe-port-bucket-1/65244992_2912527995454595_7082846222989393920_n%20(1).jpg"
            className="w-1/2 h-1/2 xl:w-[37rem] xl:h-[35rem] rounded-[3rem]"
            alt="Hatty Joe"
          />
          <div className="pt-10 text-center lg:text-left pl-0 lg:pl-[4.5rem] lg:pt-[6.7rem]">
            <H1 variant={'primary'} additionalClass={'px-10 text-white'}>
              About Me
            </H1>
            <H3
              variant={'primary'}
              additionalClass={'px-10 pt-[1.25rem] lg:pr-[9rem] text-white'}
            >
              I am a well-rounded enthusiastic learner always stepping out of
              the comfort zone having experience in the software development
              field mostly in{' '}
              <span className="text-primaryPurple">Full-stack </span>
              and
              <span className="text-primaryPurple"> Game </span>
              development.
            </H3>
            <H3
              variant={'primary'}
              additionalClass={'px-10 pt-[1.25rem] lg:pr-[9rem] text-white'}
            >
              I love making things from scratch and observe what others are
              doing to eliminate black boxes and get as many point of views as
              possible.
            </H3>

            <H3
              variant={'primary'}
              additionalClass={'px-10 pt-[1.25rem] md:pr-[9rem] text-white'}
            >
              With relevant experience in the E-sports industry from being an
              Assistant manager and e-sports player, it helps reveal how to
              analyze and practice drills
            </H3>
            <div className="pb-20 lg:pb-0"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
