import React from 'react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <main className="flex justify-center">
      <section className="bg-blue-50 py-12 w-11/12 rounded-xl flex flex-col items-center">
        <div className="text-center mb-12">
          <p className="mt-4 text-lg">Let your friends, family, or co-workers anonymously rate your social skills.</p>
          <h2 className="text-4xl font-bold mt-3">Ever wondered what others think of you?</h2>
        </div>
        <div className="w-full mb-12 flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="absolute inset-0 flex items-center justify-between sm:justify-start sm:gap-x-16">
              <div className="h-0.5 w-full bg-dotted sm:bg-dotted-vertical"></div>
            </div>
            <div className="relative flex flex-col items-center text-center sm:ml-8 sm:flex-1 mt-12">
              <div className="bg-yellow-500 p-2 rounded-full mb-2">
                <Image
                  src="/one.jpg"
                  alt="Step 1"
                  width={30}
                  height={30}
                  className="object-cover mix-blend-multiply rounded-full"
                />
              </div>
              <p>Answer questions on your social skills</p>
            </div>
            <div className="relative flex flex-col items-center text-center sm:flex-1 mt-20">
              <div className="bg-yellow-500 p-2 rounded-full mb-2">
                <Image
                  src="/two.jpg"
                  alt="Step 2"
                  width={30}
                  height={30}
                  className="object-cover mix-blend-multiply rounded-full"
                />
              </div>
              <p>Let others anonymously answer the same questions about you.</p>
            </div>
            <div className="relative flex flex-col items-center text-center sm:mr-8 sm:flex-1 mt-20">
              <div className="bg-yellow-500 p-2 rounded-full mb-2">
                <Image
                  src="/three.jpg"
                  alt="Step 3"
                  width={30}
                  height={30}
                  className="object-cover mix-blend-multiply rounded-full"
                />
              </div>
              <p>Find out where you and others see things the same way - and where not</p>
            </div>
          </div>
        </div>
        <div className="status relative bg-white rounded-xl flex justify-around items-center w-3/4 p-4">
          <div className="absolute inset-0 flex items-center">
            <div className="h-0.5 w-full bg-gray-300"></div>
          </div>
          <div className="relative flex flex-col items-center text-center mb-8">
            <span className="bg-violet-600 px-2 rounded-lg mb-2 text-white">You</span>
            <span className="w-4 h-4 rounded-full bg-violet-600"></span>
          </div>
          <div className="relative flex flex-col items-center text-center mt-8">
            <span className="w-4 h-4 rounded-full bg-sky-500 mb-2"></span>
            <span className="bg-sky-500 px-2 rounded-lg text-white">Anonymous 1</span>
          </div>
          <div className="relative flex flex-col items-center text-center mb-8">
            <span className="bg-orange-300 px-2 rounded-lg mb-2 text-white">Anonymous 2</span>
            <span className="w-4 h-4 rounded-full bg-orange-300"></span>
          </div>
          <div className="relative flex flex-col items-center text-center mt-8">
            <span className="w-4 h-4 rounded-full bg-green-600 mb-2"></span>
            <span className="bg-green-600 px-2 rounded-lg text-white">Anonymous 3</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialSection;
