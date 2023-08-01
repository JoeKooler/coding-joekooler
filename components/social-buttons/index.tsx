import React from "react";
import Image from "next/image";
import youtubeIcon from "@/public/social_icons/mono_youtube.webp";
import linkedInIcon from "@/public/social_icons/mono_linkedin.webp";
import githubIcon from "@/public/social_icons/mono_github.webp";
import twitterIcon from "@/public/social_icons/mono_twitter.webp";
import Link from "next/link";

export default function SocialButtons() {
  return (
    <div className="px-14 hidden justify-center md:justify-start md:flex md:px-0">
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
  );
}
