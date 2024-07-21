import React from 'react';

const TestSection: React.FC = () => {
  return (
    <main className="flex w-full place-content-center">
      <section className="py-28 flex flex-col text-center sm:w-9/12 md:w-7/12 w-full px-14 items-center gap-4">
        <span>We take privacy seriously</span>
        <span className="font-bold text-xl">Before you get started</span>
        <span>&quot;We won&apos;t share your answer with anyone (and won&apos;t ever tell which friend said what about you)&quot;</span>
        <span>with love, <span>Team Ahead</span></span>
        <button className="bg-black p-2 rounded-xl text-white w-fit">Start a test</button>
        <span className="font-thin text-sm italic">Takes only 5 minutes</span>
      </section>
    </main>
  );
};

export default TestSection;
