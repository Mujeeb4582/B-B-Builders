'use client';
import logo from '../public/image/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  BsList,
  BsX,
  BsYoutube,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

const styles = {
  navLinks:
    ' ml-10 uppercase text-amber-700 border-b border-white hover:text-amber-900 ',
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <nav className="w-full h-24 shadow-xl bg-white px-4 fixed w-full z-10 top-0 ">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-24 px-4">
          <Link href="/">
            <Image
              src={logo}
              alt="logo picture"
              priority
              className="cursor-pointer object-cover h-20 w-20"
            />
          </Link>
          <div className="text-[#FF7C24] hidden sm:flex">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/our-projects">Our projects</Link>
              </li>
              {/* <li className={styles.navLinks}>
                <Link href="/apartments">Apartments</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/amenities">Amenities</Link>
              </li> */}
              <li className={styles.navLinks}>
                <Link href="/our-success">Our success</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/our-team">Our Team</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}

          <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24 ">
            <BsList className="h-8 w-8 text-amber-700" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? 'fixed top-0 left-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 z-10'
              : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <BsX className="h-8 w-8 text-amber-700" />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex-col py-4 ">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:text-amber-700 text-amber-700"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/our-projects">Our projects</Link>
              </li>
              {/* <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/apartments">Apartments</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/amenities">Amenities</Link>
              </li> */}
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/our-success">Our success</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/our-team">Our Team</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 hover:underline hovor:decoration-[#FF7C24] text-amber-700"
              >
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/*social Media */}
          <div
            className="flex flex-row justify-around
            pt-10 items-center"
          >
            <Link href="/">
              <BsYoutube
                size={30}
                className="cursor-pointer hover:text-[#FF7C24] ease-in-out duration-500"
              />
            </Link>

            <Link href="/">
              <BsLinkedin
                size={30}
                className="cursor-pointer hover:text-[#FF7C24] ease-in-out duration-500"
              />
            </Link>

            <Link href="/">
              <BsFacebook
                size={30}
                className="cursor-pointer hover:text-[#FF7C24] ease-in-out duration-500"
              />
            </Link>

            <Link href="/">
              <BsInstagram
                size={30}
                className="cursor-pointer hover:text-[#FF7C24] ease-in-out duration-500"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
