import Image from "next/image";
import Link from "next/link";
import leftArrow from "../assets/images/leftArrow.png";
import chinaBlack from "../assets/images/chinaBlack.png";
import forbesLogo from "../assets/images/forbesLogo.png";
import cnbc from "../assets/images/cnbc.png";
import bloomberg from "../assets/images/bloomberg.png";
import cnn from "../assets/images/cnn.png";
import reuters from "../assets/images/reuters.png";
import smart from "../assets/images/smart.png";
import seamless from "../assets/images/seamless.png";

export default function Home() {
  return (
    <div className="bg-[#131313] min-h-screen w-full pt-20">
      <div className="flex flex-col mx-auto w-[90%]">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <Link href="/">
            <button className="py-1 px-3 rounded-full text-base bg-[#989898] hover:bg-[#989898]/80 flex items-center gap-2 cursor-pointer">
              Introducing Raft Cards{" "}
              <Image src={leftArrow} alt="Left Arrow" width={7} height={7} />
            </button>
          </Link>
          <h1 className="text-white text-8xl w-[60%] text-center">
            Building the future of banking.
          </h1>
          <p className="text-[#bdbdbd] text-2xl w-[50%] text-center">
            Experience the future of banking with RAFT. We're here to empower
            your financial journey.
          </p>
          <button className="bg-[#2B892E] py-2 px-6 text-white text-base rounded-full hover:bg-[#2B892E]/80 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      {/* Top main Section */}
      <div className="w-[90%] py-20 mx-auto">
        <div>
          <Image
            src={chinaBlack}
            alt="Friends laughing"
            width={2000}
            height={1000}
          />
        </div>

        <div className="flex flex-col mx-auto justify-center items-center py-20">
          <h3 className="text-[#BDBDBD] text-xl mb-10">FEATURED AND SEEN IN</h3>
          <div className="flex gap-10">
            <Image
              src={forbesLogo}
              alt="Forbes Logo"
              className="object-contain"
            />
            <Image src={cnbc} alt="NBC Logo" className="object-contain" />
            <Image
              src={bloomberg}
              alt="Bloomberg Logo"
              className="object-contain"
            />
            <Image
              src={reuters}
              alt="Reuters Logo"
              className="object-contain"
            />
            <Image src={cnn} alt="CNN Logo" className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col mx-auto justify-center items-center py-20">
          <h2 className="text-white text text-7xl w-[60%] text-center mb-6">
            Elevate Your Financial Journey with RAFT
          </h2>
          <p className="text-[#BDBDBD] text-xl w-[50%] text-center">
            RAFT offers a world of financial possibilities. From investments to
            payments we've got you covered. Join us and unlock your financial
            potential today.
          </p>
        </div>
      </div>

      <div className="flex gap-6 py-12 mx-auto justify-center">
        <div className="w-[65%] border-2 p-5 rounded">
          <div>
            <Image
              src={seamless}
              alt="Seamless Payments"
              className="object-contain"
            />
          </div>
         
         <h4 className="text-white text-3xl">Seamless Payment</h4>
         <p className="text-white text-base">Enjoy secure, seamless transactions that make managing your money a breeze</p> 
        </div>
      </div>
    </div>
  );
}
