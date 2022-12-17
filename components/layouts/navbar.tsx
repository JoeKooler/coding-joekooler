import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hamburgerIcon from "@/public/my_hamburger.webp";
import { LayoutOptions } from "interfaces/layout-options";

interface Props {
  options: LayoutOptions;
}

export default function Navbar({ options }: Props) {
  const [sectionClass, setSectionClass] = useState<string>("");
  const [bgClass, setBGClass] = useState<string>("");

  useEffect(() => {
    console.log("Called in useEffect");
    displayClass();
  }, [options.displayType]);

  const displayClass = () => {
    console.log("Called in display class");
    switch (options.displayType) {
      case "SeeThrough":
        setSectionClass("absolute top-0 left-0 w-screen max-w-full");
        setBGClass("absolute w-full h-24 bg-black opacity-25");
        break;
      case "Solid":
        setSectionClass("w-screen max-w-full");
        setBGClass("absolute w-full h-24 bg-black");
        break;
      default:
        break;
    }
  };

  return (
    <section className={sectionClass}>
      <div className="w-20 h-20 lg:hidden pt-4 -0 pl-4">
        <button className="w-16 h-16">
          <Image src={hamburgerIcon} alt={"hamburgerIcon"} />
        </button>
      </div>
      <ul>
        <li className="hidden px-[25vw] h-24 text-white lg:grid lg:grid-cols-4 gap-4 justify-center content-center justify-items-center">
          <Link href="/" className="text-3xl z-10 underline">
            Home
          </Link>
          <Link href="/" className="text-3xl z-10">
            DevLogs
          </Link>
          <Link href="/" className="text-3xl z-10">
            Projects
          </Link>
          <Link href="/" className="text-3xl z-10">
            About
          </Link>
          <div className={bgClass} />
        </li>
      </ul>
    </section>
  );
}