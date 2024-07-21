import React from 'react';

const EQSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center items-center text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900">EQ beats IQ</h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more per year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EQSection;
