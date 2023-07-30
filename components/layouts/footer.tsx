import React from 'react';
import SocialButtons from 'components/social-buttons';

export default function Footer() {
  return (
    <section className="px-2 md:px-36 h-36 bg-[#1E2024] flex justify-between items-center text-white">
      <div>
        <h1 className="text-xs md:text-base">
          ©2022 All Rights Reserved <br className="md:hidden" /> Joseph
          Koolerson
        </h1>
        <h1 className="hidden md:block">{'(Chitsanupong Klaithin)'}</h1>
      </div>

      <SocialButtons />

      <div className="text-right overflow-clip">
        <h1 className="hidden md:block">Have an idea? Drop me a message at</h1>
        <address>
          <a href="mailto:josephkoolerson@gmail.com">
            <u className="text-sm" style={{ wordWrap: 'break-word' }}>
              josephkoolerson@gmail.com
            </u>
          </a>
        </address>
      </div>
    </section>
  );
}
