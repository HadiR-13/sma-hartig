'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import { NavLink, navLinks } from '@/constants/navlinks';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import Logo from '@/assets/homepage/svg/logo.svg';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const matches = useMediaQuery('(min-width: 1025px)');
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (!matches) {
      setToggle(false);
    }
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  if (!isClient) {
    return null;
  }

  const NavItem = ({ navlink }: { navlink: NavLink }) => {
    const isActive = navlink.menus ? navlink.menus.some((submenu) => pathname.startsWith(submenu.path)) : pathname === navlink.path;

    if (navlink.menus) {
      return (
        <div className="relative group" ref={dropdownRef}>
          <button onClick={() => handleDropdownToggle(navlink.name)} className={`flex items-center gap-1 text-lg transition-all duration-300 ease-in-out ${isActive ? 'text-black font-semibold' : 'text-black'}`}>
            {navlink.name}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === navlink.name ? 'rotate-180' : ''}`} />
          </button>
          {openDropdown === navlink.name && (
            <div className={`${matches ? 'absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5' : 'mt-2'}`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {navlink.menus.map((submenu, subIndex) => (
                  <Link
                    key={subIndex}
                    href={submenu.path}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 ${pathname === submenu.path ? 'text-primary-600 font-semibold' : 'text-gray-700'}`}
                    role="menuitem"
                    onClick={handleLinkClick}
                  >
                    {submenu.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={navlink.path || '#'}
        className={`
          ${isActive ? 'text-black font-semibold' : 'text-black'} 
          text-lg transition-all duration-300 ease-in-out
        `}
        onClick={handleLinkClick}
      >
        {navlink.name}
      </Link>
    );
  };

  return (
    <nav className="bg-white flex sticky top-0 z-[98] border border-[#DBDBDB]">
      <div className="w-full max-w-[83rem] py-4 lg:py-8 mx-auto lg:mx-7 2xl:mx-auto px-5 md:px-2 flex justify-between items-center">
        <Link href="/" className="flex gap-x-4 items-center">
          <Image src={Logo} alt="Logo" className="text-black" />
          <h1 className="uppercase font-bold hidden md:block md:text-2xl text-black">sma harapan 3 delitua</h1>
        </Link>

        <AnimatePresence>
          {matches && (
            <motion.div className="flex gap-x-10 justify-between" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {navLinks.map((navlink: NavLink, index: number) => (
                <NavItem key={index} navlink={navlink} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {matches && (
          <Link href="#" className="bg-primary-600 py-4 px-12 text-white font-medium rounded-full hover:bg-transparent border hover:border-primary-600 hover:text-primary-600 transition-colors duration-300">
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

        <AnimatePresence>
          {!matches && toggle && (
            <motion.div
              className="fixed inset-0 z-40 bg-white flex justify-center items-center h-[100vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-y-4 text-black">
                {navLinks.map((navlink: NavLink, index: number) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <NavItem navlink={navlink} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
