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

    const displayClass = () => {
      console.log("Called in display class");
      switch (options.displayType) {
        case "SeeThrough":
          setSectionClass("absolute top-0 left-0 w-screen max-w-full");
          setBGClass("absolute top-0 hidden lg:block w-full h-24 bg-black opacity-25");
          break;
        case "Solid":
          setSectionClass("w-screen max-w-full");
          setBGClass("absolute hidden lg:block top-0 w-full h-24 bg-[#1E2024]");
          break;
        default:
          break;
      }
    };

    displayClass();
  }, [options.displayType]);


  return (
    <section className={sectionClass}>
      {/* <div className="w-20 h-20 lg:hidden pt-4 -0 pl-4"> */}
        <button className="w-16 h-16 lg:hidden absolute top-4 left-4">
          <Image src={hamburgerIcon} alt={"hamburgerIcon"} />
        </button>
      {/* </div> */}
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
        </li>
      </ul>
      <div className={bgClass} />
    </section>
  );
}
