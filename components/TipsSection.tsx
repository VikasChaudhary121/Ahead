// components/TipsSection.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TipsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const card_details = [
    {
      "emoji": "&#128530;",
      "title": "You argue with a colleague",
      "content": "You get angry and defensive, instead of staying open and working toward common ground.",
      "backgroundColor": "#f8d7da"
    },
    {
      "emoji": "&#128512;",
      "title": "You have a great day at work",
      "content": "You are productive and collaborate well with your colleagues.",
      "backgroundColor": "#d4edda"
    },
    {
      "emoji": "&#128577;",
      "title": "You missed a deadline",
      "content": "You feel stressed and overwhelmed, realizing you need better time management.",
      "backgroundColor": "#fff3cd"
    },
    {
      "emoji": "&#128516;",
      "title": "You receive positive feedback",
      "content": "You feel motivated and appreciated, boosting your confidence.",
      "backgroundColor": "#d1ecf1"
    },
    {
      "emoji": "&#128559;",
      "title": "You face a technical issue",
      "content": "You struggle to solve a problem, but eventually find a solution after persistent effort.",
      "backgroundColor": "#f3e5f5"
    },
    {
      "emoji": "&#128175;",
      "title": "You finish a big project",
      "content": "You feel a sense of accomplishment and pride in your work.",
      "backgroundColor": "#e2e3e5"
    },
    {
      "emoji": "&#128578;",
      "title": "You help a colleague",
      "content": "You share your knowledge and support a team member, fostering a collaborative environment.",
      "backgroundColor": "#c8e6c9"
    },
    {
      "emoji": "&#128577;",
      "title": "You get constructive criticism",
      "content": "You take the feedback positively and plan to improve your skills.",
      "backgroundColor": "#ffecb3"
    },
    {
      "emoji": "&#128556;",
      "title": "You face a misunderstanding",
      "content": "You work through the confusion and clear up any miscommunications.",
      "backgroundColor": "#d7ccc8"
    },
    {
      "emoji": "&#128540;",
      "title": "You have a fun team event",
      "content": "You bond with your colleagues and enjoy some relaxation and team building.",
      "backgroundColor": "#ffe0b2"
    }
  ]
  

  return (
    <section className="w-full overflow-hidden p-6">
      <div
        ref={scrollRef}
        className="card-container flex gap-4 whitespace-nowrap scroll-smooth overflow-x-auto"
      >
        {card_details.map((card_detail, index) => (
          <motion.div
            key={index}
            style={{ backgroundColor: card_detail.backgroundColor}}
            className="p-4 w-100 rounded-lg shadow-md flex-shrink-0 transform transition-transform overflow-hidden"
            whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
          >
            <div className="text-4xl mb-4">
            <p dangerouslySetInnerHTML={{ __html: card_detail.emoji }}></p>
            </div>
            <div className="text-xl font-bold mb-2">
              <p>{card_detail.title}</p>
            </div>
            <div className="text-gray-700">
              <p className="truncate">
                {card_detail.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;
