import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero flex place-content-center w-full">
        <main className="bg-violet-200 flex w-11/12 md:p-24 p-2 flex-wrap rounded-2xl">
            <div className="w-6/12 flex flex-col gap-6 pt-16 ">
                <p>
                  Ahead app
                </p>
                <h1 className="font-extrabold text-3xl md:text-5xl">
                  Master your life by mastering emotions.
                </h1>
                <div className="logo_stars mt-4 flex gap-2">
                  <Image
                    src="/app-store.png"
                    alt="Familiar Image"
                    width={60}
                    height={60}
                    className="object-cover mix-blend-multiply w-24 rounded-xl"
                  />
                  <div>
                    <p>&#10024; &#10024; &#10024; &#10024; &#10024; </p>
                    <p className="font-thin text-sm">100+ AppStore reviews</p>
                  </div>
                </div>
            </div>
            <div className="right-cont flex place-content-center align-middle w-6/12 p-6">
            <div className="border-4 border-dashed rounded-full">
              <Image
                  src="/phone.jpg"
                  alt="FamiliarImage"
                  width={170}
                  height={150}
                  className="object-cover mix-blend-darken sm:m-12 m-2"
                />
            </div>
            </div>
        </main>
    </section>
  );
};

export default Hero;
