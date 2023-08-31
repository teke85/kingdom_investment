import React from 'react';
import Link from 'next/link';
import Image from '@/node_modules/next/image';
import { FiSearch } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex text-black items-center font-bold text-xl">
            <Image
              alt="kingdom investment logo"
              src="/assets/logo.jpeg"
              width={100}
              height={100}
            />
            <div className="logo_text flex flex-col">
              <span>Kingdom</span>
              <span> Investment</span>
            </div>
          </div>
          <div className="hidden lg:flex text-base gap-8">
            <Link className="text-black font-bold hover:text-brown" href="/">
              Home
            </Link>
            <Link
              className="text-black font-bold hover:text-brown"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-black font-bold hover:text-brown"
              href="/services"
            >
              Our Products
            </Link>
            <Link
              className="text-black font-bold hover:text-brown"
              href="/portfolio"
            >
              Faqs
            </Link>
            <Link
              className="text-black font-bold hover:text-brown"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
          <div className="Icons_container text-xl flex gap-4">
            <FiSearch />
            <BsFillPersonFill />
            <GiShoppingCart />
            <button className="text-black block md:hidden hover:text-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="md:hidden">{/* Mobile menu icon */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
