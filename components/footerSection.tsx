import React from 'react';
import Image from 'next/image';

const FooterSection: React.FC = () => {
  return (
    <section className="w-11/12 mb-20 flex justify-center">
      <div className="flex flex-col items-center text-center w-full">
        <Image
          src={"/image1.avif"}
          alt="Image"
          width={60}
          height={50}
          className="rounded-lg mb-4 mix-blend-darken"
        />
        <h2 className="text-2xl font-bold mb-4">ahead</h2>
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center mb-2">
            <span className="bg-gray-400 rounded-full p-2 mr-2">&#x1F4CD;</span>
            <span>AuguststraBe 26, 10117 Berlin</span>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-400 rounded-full p-2 mr-2">&#x2709;</span>
            <span>hi@ahead-app.com</span>
          </div>
        </div>
        <Image
          src={"/app-store.png"}
          alt="Image"
          width={100}
          height={50}
          className="mix-blend-darken mb-4"
        />
        <div>
          <p><span>&copy;</span> 2024 Ahead app. All rights are reserved</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
