// components/VacanciesSection.tsx
import React from 'react';

const VacanciesSection: React.FC = () => {
  return (
    <main className="flex place-content-center">
        <section className="py-20 w-11/12 p-9">
        <h2 className="text-4xl font-bold mb-7">Open vacancies</h2>
        <div className="flex flex-wrap place-content-center gap-8">
          <div className="bg-orange-50 p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Senior Full-Stack Engineer</h3>
            <ul className="ml-8 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Senior Designer</h3>
            <ul className="ml-8 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$40-55k, 0.5-1.0% equity share options</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 shadow rounded-xl">
            <h3 className="text-2xl font-bold mb-3">Superstar Intern</h3>
            <ul className="ml-8 list-disc">
                <li>Full-time position</li>
                <li>Berlin or remote</li>
                <li>$40-55k, 0.25-0.50% equity share options</li>
            </ul>
          </div>
        </div>
    </section>
    </main>
  );
};

export default VacanciesSection;
