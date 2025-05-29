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
import wade from "../assets/images/wade.png";
import planning from "../assets/images/planning.png";
import transaction from "../assets/images/transaction.png";
import banknotes from "../assets/images/banknotes.png";
import circleStack from "../assets/images/circleStack.png";
import arrowsLeft from "../assets/images/arrowsLeft.png";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full pt-20">
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

      {/* Seamless payments & smart investing */}
      <div className="flex py-12 gap-6 justify-center">
        <div className="w-[40%] border bg-[#131313] bg-base-300 border-gray-700 py-10 px-4 rounded">
          <div className="flex items-center justify-center pb-10">
            <Image
              src={smart}
              alt="Smart investments"
              className="object-contain"
            />
          </div>

          <h4 className="text-white text-3xl mb-4">Seamless Payments</h4>
          <p className="text-white text-base font-light w-[90%]">
            Enjoy secure, seamless transactions that make managing your money a
            breeze
          </p>
        </div>

        <div className="w-[30%] border bg-base-300 border-gray-700 p-3 rounded bg-[#131313]">
          <div className="flex items-center pt-8 justify-center pb-10">
            <Image
              src={seamless}
              alt="Seamless Payments"
              className="object-contain"
            />
          </div>

          <h4 className="text-white text-3xl mb-4">Smart Investing</h4>
          <p className="text-white text-base font-light w-[90%]">
            Grow your wealth confidently with our personalized investment
            solutions, tailored to your financial goals.
          </p>
        </div>
      </div>

      {/* Wealth Management & Financial Planning */}
      <div className="flex gap-6 justify-center">
        <div className="w-[30%] p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
          <div className="flex pb-5 items-center justify-center pt-10">
            <Image src={wade} alt="Wade Warren" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center mx-auto pt-10">
            <h4 className="text-white text-3xl mb-4">Wealth Management</h4>
            <p className="text-white text-base font-light w-[90%]">
              Make informed decisions for your financial future with our wealth
              management expertise.
            </p>
          </div>
        </div>

        <div className="w-[40%] p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
          <div className="flex item-center justify-center pb-5 pt-10">
            <Image src={planning} alt="Planning" className="object-contain" />
          </div>
          <div className=" flex flex-col justify-center">
            <h4 className="text-white text-3xl mb-4">Financial Planning</h4>
            <p className="text-white text-base font-light w-[90%]">
              Achieve your financial dreams with our comprehensive financial
              planning services, guidung you toward a secure future.
            </p>
          </div>
        </div>
      </div>

      {/* Your way to financial freedom */}
      <div className="flex flex-col justify-center items-center py-12 mx-auto">
        <h2 className="text-7xl text-white w-[60%] text-center mb-6">
          Your Financial Freedom, Your Way
        </h2>
        <p className="text-white text-xl font-light w-[44%] text-center">
          We believe that managing your finances should be effortless and
          cost-effective. That's why we offer you the freedom you deserve
        </p>
      </div>

      {/* Transaction images */}
      <div className="mx-auto py-12 w-[90%]">
        <Image
          src={transaction}
          alt="Transaction"
          className="object-contain"
          width={2000}
          height={1000}
        />
      </div>

      {/* Perks */}
      <div className="flex py-10 gap-2 w-[90%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={banknotes} alt="Banknotes" className="object-contain" />
            <p className="text-2xl text-white">No minimum balance fees</p>
          </div>
          <p className="text-white text-base font-light">
            Say goodbye to minimum balance fees. Your account, your balance-no
            hidden charges.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Image
              src={circleStack}
              alt="Circle Stack"
              className="object-contain"
            />
            <p className="text-2xl text-white">No monthly fees</p>
          </div>
          <p className="text-white text-base font-light">
            Bank with us without worrying about monthly fees. Keep more of your
            money where it belongs- in your account.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={arrowsLeft} alt='Arrows left and Right' className="object-contain"/>
            <p className="text-2xl text-white">No bank transfer fees</p>
          </div>
          <p className="text-white text-base font-light">Seamlessly transfer funds without the extra cost. Send and recieve money with zero bank transfer fees.</p>
        </div>
      </div>
    </div>
  );
}
