"use client";

import Image from "next/image";
import Link from "next/link";
import navLogo from "../assets/images/navLogo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="w-full bg-black">
      <div className=" w-[90%] mx-auto py-6 flex items-center justify-between">
        {/* Logo here */}
        <Link href="/" className="text-white flex items-center text-2xl gap-1">
          <Image src={navLogo} alt="Raft logo" width={30} height={40} />
          Raft
        </Link>

        <div className="hidden md:flex gap-4 text-[#BDBDBD] text-lg  transiton-all duration-200">
          <Link href="#" className="hover:text-[#2B892E]">
            Solutions
          </Link>
          <Link href="#" className="hover:text-[#2B892E]">
            Learn
          </Link>
          <Link href="#" className="hover:text-[#2B892E]">
            About
          </Link>
        </div>

        <div className="hidden md:flex gap-2 text-white items-center">
          <Link href="#" className="text-lg hover:text-[#2B892E]">
            Login
          </Link>
          <button
            className="bg-[#2B892E] py-1 px-4 text-base rounded-full hover:bg-[#2B892E]/80 cursor-pointer"
            aria-label="Get Started with Raft"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white z-50 relative"
          aria-label="Toggle mobile menu"
        >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration--300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
          {/* Mobile menu content */}
          <div
            className={`md:hidden fixed top-0 left-0 right-0 h-full w-80 bg-black transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
              <div className="flex flex-col items-center justify-center gap-10 h-full px-6">
                <ul className="text-white text-2xl flex flex-col gap-8">
                  <li>
                    <Link href="#" className="hover:text-[#2B892E] text-3xl" onClick={closeMobileMenu}>
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2B892E] text-3xl" onClick={closeMobileMenu}>
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2B892E]" onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                </ul>

                <div className="mt-6">
                  <button
                    className="bg-[#2B892E] py-3 px-6 text-lg rounded-full hover:bg-[#2b892e]/80 cursor-pointer transition-colors text-white w-full"
                    onClick={closeMobileMenu}
                    aria-label="Get Started with Raft"
                  >
                      Get Started
                  </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
