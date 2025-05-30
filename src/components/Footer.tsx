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
      <div className="w-[90%] mx-auto  md:px-6 py-8 md:py-12">
        {/* Logo Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex gap-3 items-center">
            <div className="flex items-center">
              <Image
                src={footerLogo}
                alt="Footer logo"
                className="object-contain"
              />
            </div>
            <span className="md:text-9xl text-7xl">Raft</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex md:gap-2 gap-3 md:w-[30%] w-[84%] items-center mb-3">
            <div className="border border-dashed border-white rounded-lg p-4 flex items-center gap-4 mb-10 max-w-md ">
              <Image
                src={footerQr}
                alt="Footer Scan QR"
                className="object-contain"
              />

              <div className="">
                <p className="md:text-xl text-base mb-2 font-light">
                  Scan to download App on the Playstore and Appstore.
                </p>

                <div className="flex gap-3 items-center">
                  <Image
                    src={googleStore}
                    alt="Google Store icon"
                    className="object-contain"
                  />

                  <Image
                    src={appleStore}
                    alt="Apple Store icon"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-50 gap-30 mb-10">
            <div className="flex flex-col gap-4">
              <h6 className="text-xl">About us</h6>
              <Link
                href="#"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                Our company
              </Link>
              <Link
                href="#"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                Press Kits
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-xl">Legal</h6>
              <Link
                href="/"
                className="text-base font-light hover:text-green-400 transiton ease-in-out"
              >
                Terms of use
              </Link>
              <Link
                href="/"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                About us
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-xl">Support</h6>
              <Link
                href="/"
                className="text-base font-light hover:text-green-400 transition-colors ease-in-out"
              >
                Contact us
              </Link>
              <Link
                href="/"
                className="text-base font-light hover:text-green-400 transition ease-in-out"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row justify-between items-start md:items-center pt-6 md:pt-8 gap-4">
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
