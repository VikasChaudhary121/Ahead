import React from 'react';

const WorkSection: React.FC = () => {
  return (
    <main className="flex place-content-center">
      <div className="bg-indigo-100 px-16 w-11/12 rounded-2xl">
        <div className="flex place-content-between align-middle m-8">
          <span className="font-extrabold text-3xl">Work with us</span>
          <span className="font-bold text-2xl text-violet-900">ahead</span>
        </div>
        <div className="flex sm:gap-24 md:gap-48 gap-8">
          <div className="about md:gap-48 bg-slate-100 rounded-xl h-fit overflow-hidden mb-16">
            <div className="m-5">
              <p className="text-3xl mb-2">&#128556;</p>
              <h3 className="font-bold">About</h3>
              <p className="ml-2">At ahead our goal is to make self-improvement fun and lasting. We know there's a way to make it work. And that's what aHead is all about</p>
            </div>
            <div className="bg-orange-50 p-5">
              <h3 className="font-bold">Product</h3>
              <p className="ml-2">Sure, you could spend ages reading books or sitting in webinars on how to become a better spouse, parent, or manager - like we did...</p>
            </div>
          </div>
          <div className="scroll-cont overflow-y-auto flex flex-col gap-5 max-h-[calc(100vh-200px)]">
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Power through, even when the going gets tough.
              </h4>
              <p className="ml-2">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.  
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Learn more about who you are and where you want to go.
              </h4>
              <p className="ml-2">
                We ask the right questions to help you better understand why you do things the way you do.  
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Play and grow together with others on the same journey.
              </h4>
              <p className="ml-2">
                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals. 
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Power through, even when the going gets tough.
              </h4>
              <p className="ml-2">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.  
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Learn more about who you are and where you want to go.
              </h4>
              <p className="ml-2">
                We ask the right questions to help you better understand why you do things the way you do.  
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h4 className="font-bold mb-2">
                Play and grow together with others on the same journey.
              </h4>
              <p className="ml-2">
                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkSection;
