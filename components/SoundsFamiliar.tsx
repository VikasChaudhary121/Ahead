// components/FamiliarSection.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FamiliarSection: React.FC = () => {
  return (
    <section className="improvement-section flex items-center py-10 px-6 md:px-12 lg:px-24 w-full">
      <motion.div
        initial={{ opacity: 0, x: -100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:w-1/3"
      >
        <h1 className="text-3xl font-bold text-gray-900">Does this sound familiar...</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:w-1/3"
      >
        <Image
          src="/image1.avif"
          alt="Familiar Image"
          width={60}
          height={60}
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};

export default FamiliarSection;
