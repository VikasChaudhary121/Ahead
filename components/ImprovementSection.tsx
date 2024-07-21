import React from 'react';
import Image from 'next/image';

const ImprovementSection: React.FC = () => {
  return (
    <section className="improvement-section">
      <div className="container mx-auto ml-20">
        <p>Wrong with self-improvement & how we are fixing it.</p>
        <div className="flex mt-2">
          <span>
            <h2 className="text-2xl font-bold">Self-improvement. Ugh.</h2>
          </span>
          <span>
            <Image 
              src="/image6.jpg"
              alt="Image"
              width={40}
              height={40}
              className="mix-blend-darken rounded-full"
            />
          </span>
        </div>
      </div>
      <div className="flex place-content-center w-11/12">
        <div className="w-full p-10 flex place-content-center flex-col ml-20">
          <div className="content flex items-start sm:w-9/12 md:4/12 w-10/12 place-content-center">
            <div className="w-4 h-4 rounded-full bg-blue-800 mt-1"></div>
            <div className="ml-8 mb-4">
              <h3 className="text-xl font-semibold">It&apos;s not as easy as 1-2-3.</h3>
              <p>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
            </div>
          </div>
          <div className="content flex items-start mb-4 sm:w-9/12 md:4/12 w-10/12">
            <div className="w-4 h-4 rounded-full bg-blue-800 mt-1"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">Old habits are hard to break.</h3>
              <p>And bad behaviors die hard. Fortunately, we give you great, science backed techniques to use.</p>
            </div>
          </div>
          <div className="content flex items-start mb-4 sm:w-9/12 md:4/12 w-10/12">
            <div className="w-4 h-4 rounded-full bg-blue-800 mt-1"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">You and your motivation do not have a long-term relationship.</h3>
              <p>Luckily, we can proactively prepare you for the marathon, not just the race.Effectively, memorable exercise will help you stick to your goals.</p>
            </div>
          </div>
          <div className="content flex items-start sm:w-9/12 md:4/12 w-10/12">
            <div className="w-4 h-4 rounded-full bg-blue-800 mt-1"></div>
            <div className="ml-8">
              <h3 className="text-xl font-semibold">Books just don&apos;t offer practical solutions.
              </h3>
              <p>Remember when you learned to ride a hike just by reading? yeah we do not either.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovementSection;
