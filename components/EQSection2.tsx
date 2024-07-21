import React from 'react';

const EQSection2: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 mb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center items-center text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Be the best you with EQ</h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Not having your own emotions under control might be holding you back.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Additionally, not understanding those of others stops you from being parent, friend you can be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EQSection2;
