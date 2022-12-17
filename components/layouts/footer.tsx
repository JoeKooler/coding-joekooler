import Link from "next/link";
import React from "react";
import Image from "next/image";
import youtubeIcon from "@/public/social_icons/mono_youtube.webp";
import linkedInIcon from "@/public/social_icons/mono_linkedin.webp";
import githubIcon from "@/public/social_icons/mono_github.webp";
import twitterIcon from "@/public/social_icons/mono_twitter.webp";
import SocialButtons from "components/social-buttons";

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

      <SocialButtons />

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
