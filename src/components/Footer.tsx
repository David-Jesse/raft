import { ChevronDown } from "lucide-react";
import footerLogo from "../assets/images/footerLogo.png";
import Image from "next/image";
import footerQr from "../assets/images/footerQr.png";
import googleStore from "../assets/images/googleStore.png";
import appleStore from "../assets/images/appleStore.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white border-t border-gray-800">
      <div className="w-[90%] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Logo Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Image
                src={footerLogo}
                alt="Footer logo"
                className="object-contain"
              />
            </div>
            <span className="text-9xl">Raft</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="flex gap-2">
            <div>
              <Image
                src={footerQr}
                alt="Footer Scan QR"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xl mb-2 font-light">Scan to download App on the Playstore and Appstore.</p>
              <div className="flex gap-3 items-center">
                <span>
                  <Image
                    src={googleStore}
                    alt="Google Store icon"
                    className="object-contain"
                  />
                </span>
                <span>
                  <Image
                    src={appleStore}
                    alt="Apple Store icon"
                    className="object-contain"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="flex flex-col gap-4">
            <h6 className="text-xl">About us</h6>
            <Link href="#" className="text-base font-light hover:font-semibold">Our company</Link>
            <Link href="#" className="text-base font-light hover:font-semibold">Careers</Link>
            <Link href="#" className="text-base font-light hover:font-semibold">Press Kits</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-xl">Legal</h6>
            <Link href="/" className="text-base font-light hover:font-semibold">Terms of use</Link>
            <Link href="/" className="text-base font-light hover:font-semibold">Privacy Policy</Link>
            <Link href="/" className="text-base font-light hover:font-semibold">About us</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-xl">Support</h6>
            <Link href="/" className="text-base font-light hover:font-semibold">Help</Link>
            <Link href="/" className="text-base font-light hover:font-semibold">Contact us</Link>
            <Link href="/" className="text-base font-light hover:font-semibold">FAQ</Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 md:pt-8 border-t border-gray-800 gap-4">
          {/* Language Selector */}
          <button 
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            aria-label="Select language"
            aria-expanded="false"
          >
            <span className="text-sm md:text-base">
              English (United Kingdom)
            </span>
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </button>

          {/* Copyright */}
          <div className="text-gray-400 text-sm md:text-base">
            © Raft Corp, LLC.
          </div>
        </div>
      </div>
    </footer>
  );
}
