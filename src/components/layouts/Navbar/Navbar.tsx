'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import { NavLink, navLinks } from '@/constants/navlinks';
import { motion } from 'framer-motion';

import Logo from '@/assets/homepage/svg/logo.svg';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const matches = useMediaQuery('(min-width: 1025px)');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <nav className="bg-white flex sticky top-0 z-[98] border border-[#DBDBDB]">
      <div className="w-full max-w-[83rem] py-4 lg:py-8 mx-auto lg:mx-7 2xl:mx-auto px-5 md:px-2 flex justify-between items-center">
        <Link href="/" className="flex gap-x-4 items-center">
          <Image src={Logo} alt="Logo" className="" />
          <h1 className="uppercase font-bold hidden md:block md:text-2xl">sma harapan 3 delitua</h1>
        </Link>

        {matches && (
          <div className="flex gap-x-10 justify-between">
            {navLinks.slice(0, 4).map((navlink: NavLink, index: number) => (
              <Link
                key={index}
                href={navlink.path}
                className={`
                ${pathname === navlink.path ? 'text-black font-semibold' : 'text-black'} 
                text-lg hover:font-semibold hover:scale-105 
                transition-all duration-300 ease-in-out
              `}
              >
                {navlink.name}
              </Link>
            ))}
          </div>
        )}

        {matches && (
          <Link href="/kontak" className="bg-primary-600 py-4 px-12 text-white font-medium rounded-full hover:bg-transparent border hover:border-primary-600 hover:text-primary-600 transition-colors duration-300">
            Kontak Kami
          </Link>
        )}

        {!matches && (
          <div className="space-y-1.5 cursor-pointer z-[99]" onClick={() => setToggle((prevToggle) => !prevToggle)}>
            <motion.span animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }} className="block h-0.5 w-8 bg-black" />
            <motion.span animate={{ width: toggle ? 0 : 32 }} className="block h-0.5 w-8 bg-black" />
            <motion.span animate={{ rotateZ: toggle ? -45 : 0, y: toggle ? -8 : 0 }} className="block h-0.5 w-8 bg-black" />
          </div>
        )}
      </div>
    </nav>
  );
}
