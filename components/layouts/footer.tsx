import Link from "next/link";
import React from "react";
import Image from "next/image";
import youtubeIcon from "@/public/social_icons/mono_youtube.webp";
import linkedInIcon from "@/public/social_icons/mono_linkedin.webp";
import githubIcon from "@/public/social_icons/mono_github.webp";
import twitterIcon from "@/public/social_icons/mono_twitter.webp";

export default function Footer() {
  return (
    <section className="px-2 md:px-36 h-36 bg-[#1E2024] flex justify-between items-center text-white">
      <div>
        <h1 className="text-xs md:text-base">
          ©2022 All Rights Reserved <br className="md:hidden" /> Joseph
          Koolerson
        </h1>
        <h1 className="hidden md:block">{"(Chitsanupong Klaithin)"}</h1>
      </div>

      <div className="hidden px-14 justify-center md:justify-start md:flex md:px-0">
        <Link href={"https://github.com/JoeKooler"} className="mr-4">
          <Image
            src={githubIcon}
            alt={"githubIcon"}
            className="duration-500 hover:invert"
          ></Image>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/chitsanupong-klaithin-729b97162/"}
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

      <div className="text-right">
        <h1 className="hidden md:block">Have an idea? Drop me a message at</h1>
        <address>
          <a href="mailto:josephkoolerson@gmail.com">
            <u className="text-sm">josephkoolerson@gmail.com</u>
          </a>
        </address>
      </div>
    </section>
  );
}
