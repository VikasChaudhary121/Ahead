import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-5xl font-bold cursor-pointer">
          <Image
            src={"/image3.avif"}
            alt='Image'
            width={70}
            height={50}
            className="mix-blend-multiply"
          />
        </div>
        <div className="hidden md:flex gap-5">
          <Link href="/">Emotions</Link>
          <Link href="/">Manifesto</Link>
          <Link href="/">Self-Awareness test</Link>
          <Link href="/">Work With Us</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-2xl">Download app</Link>
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href='#'>&#8801;</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
