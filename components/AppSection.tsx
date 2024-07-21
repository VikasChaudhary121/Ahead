// components/AppSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const emojiVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 50,
    },
  }),
};

const AppSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section ref={sectionRef} className="bg-white w-full py-20 flex place-content-center">
      <div className="bg-orange-50 w-11/12 rounded-xl px-8 py-20 grid grid-cols-2">
        <div>
          <p>Built out of frustration</p>
          <h2 className="text-2xl md:text-4xl md:mb-24 font-bold mt-6">Meet the ahead app</h2>
          <div className="stickers flex gap-4">
            {[128559, 128175, 128578].map((code, i) => (
              <motion.span
                key={code}
                className="text-7xl mb-4"
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={emojiVariants}
              >
                {String.fromCodePoint(code)}
              </motion.span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            {[128556, 128577].map((code, i) => (
              <motion.span
                key={code}
                className="text-4xl mb-4"
                custom={i + 3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={emojiVariants}
              >
                {String.fromCodePoint(code)}
              </motion.span>
            ))}
          </div>
          <div>
            <p className="mt-8">
              A personalized pocket coach that provides bitesized, science-driven tools to boost emotional intelligence.
            </p>
            <p className="mt-3">
              Think of it as a pocket cheerleader towards a better, more fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
