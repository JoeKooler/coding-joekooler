import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import hamburgerIcon from '@/public/my_hamburger.webp';
import { LayoutOptions } from 'interfaces/layout-options';
import useCurrentTabStore, { HeaderTabs } from 'stores/currentTab';
import Drawer from './drawer';
import Tab from './tab';
import { useRouter } from 'next/router';
import useDrawerStore from 'stores/drawerState';

interface Props {
  options: LayoutOptions;
}

interface TabAttribute {
  name: HeaderTabs;
  link: string;
}

const tabs = [
  { link: '/', name: 'home' },
  { link: '/devlogs', name: 'devlogs' },
  { link: '/projects', name: 'projects' },
  { link: '/about', name: 'about' },
] satisfies TabAttribute[];

export default function Navbar({ options }: Props) {
  const [sectionClass, setSectionClass] = useState<string>('');
  const [bgClass, setBGClass] = useState<string>('');
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerStore();
  const { currentTab, setCurrentTab } = useCurrentTabStore();

  const router = useRouter();

  useEffect(() => {
    console.log('Called in useEffect');

    const displayClass = () => {
      console.log('Called in display class');
      switch (options.displayType) {
        case 'SeeThrough':
          setSectionClass('absolute top-0 left-0 w-screen max-w-full');
          setBGClass(
            'absolute top-0 hidden lg:block w-full h-24 bg-black opacity-25'
          );
          break;
        case 'Solid':
          setSectionClass('w-screen max-w-full');
          setBGClass('absolute hidden lg:block top-0 w-full h-24 bg-[#1E2024]');
          break;
        default:
          break;
      }
    };

    displayClass();
  }, [options.displayType]);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleTabClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className={sectionClass}>
      {/* <div className="w-20 h-20 lg:hidden pt-4 -0 pl-4"> */}
      <button
        className="w-16 h-16 lg:hidden absolute top-4 left-4"
        onClick={handleOpenDrawer}
      >
        <Image src={hamburgerIcon} alt={'hamburgerIcon'} />
      </button>
      {/* </div> */}
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        <div className="space-y-2">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              tabName={tab.name}
              isActive={currentTab === tab.name}
              onClick={() => handleTabClick(tab.link)}
            />
          ))}
        </div>
      </Drawer>

      <ul>
        <li className="hidden px-[25vw] h-24 text-white lg:grid lg:grid-cols-4 gap-4 justify-center content-center justify-items-center">
          <Link
            href="/"
            className={`text-3xl z-10 ${
              currentTab === 'home' ? 'underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/devlogs"
            className={`text-3xl z-10 ${
              currentTab === 'devlogs' ? 'underline' : ''
            }`}
          >
            DevLogs
          </Link>
          <Link
            href="/projects"
            className={`text-3xl z-10 ${
              currentTab === 'projects' ? 'underline' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`text-3xl z-10 ${
              currentTab === 'about' ? 'underline' : ''
            }`}
          >
            About
          </Link>
        </li>
      </ul>
      <div className={bgClass} />
    </section>
  );
}
