import Image from "next/image";
import FAQSection from "@/components/FAQSection";
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
import investBetter from "../assets/images/investBetter.png";
import spendBetter from "../assets/images/spendBetter.png";
import dwf from "../assets/images/dwf.png";
import cardAtm from "../assets/images/cardAtm.png";
import cTech from "../assets/images/cTech.png";
import persona from "../assets/images/persona.png";
import security from "../assets/images/security.png";
import TestimonialSection from "@/components/TestiomonialSection";
import Footer from "@/components/Footer";

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
          <h1 className="text-white text-5xl md:text-8xl md:w-[60%] w-full text-center">
            Building the future of banking.
          </h1>
          <p className="text-[#bdbdbd] md:text-2xl text-base md:w-[50%] w-full text-center">
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
              className="object-contain w-20"
            />
            <Image src={cnbc} alt="NBC Logo" className="object-contain" />
            <Image
              src={bloomberg}
              alt="Bloomberg Logo"
              className="object-contain w-20"
            />
            <Image
              src={reuters}
              alt="Reuters Logo"
              className="object-contain w-20 hidden md:block"
            />
            <Image src={cnn} alt="CNN Logo" className="object-contain w-20" />
          </div>
        </div>

        <div className="flex flex-col mx-auto justify-center items-center py-20">
          <h2 className="text-white text-4xl md:text-7xl md:w-[60%] w-full text-center mb-6">
            Elevate Your Financial Journey with RAFT
          </h2>
          <p className="text-[#BDBDBD] text-base md:text-xl md:w-[50%] w-[90%] text-center">
            RAFT offers a world of financial possibilities. From investments to
            payments we've got you covered. Join us and unlock your financial
            potential today.
          </p>
        </div>
      </div>

      {/* Seamless payments & smart investing */}
      <div className="flex md:flex-row flex-col md:py-12 py-4 gap-6 justify-center">
        <div className="md:w-[40%] w-full border bg-[#131313] bg-base-300 border-gray-700 py-10 px-4 rounded">
          <div className="flex items-center justify-center pb-10">
            <Image
              src={smart}
              alt="Smart investments"
              className="object-contain"
            />
          </div>

          <div className="pl-4">
            <h4 className="text-white md:text-3xl text-2xl mb-4">
              Seamless Payments
            </h4>
            <p className="text-white text-base font-light w-[90%]">
              Enjoy secure, seamless transactions that make managing your money
              a breeze
            </p>
          </div>
        </div>

        <div className="md:w-[30%] w-full border bg-base-300 border-gray-700 p-3 rounded bg-[#131313]">
          <div className="flex items-center pt-8 justify-center pb-10">
            <Image
              src={seamless}
              alt="Seamless Payments"
              className="object-contain"
            />
          </div>

          <div className="pl-4">
            <h4 className="text-white md:text-3xl text-2xl mb-4">Smart Investing</h4>
            <p className="text-white text-base font-light w-[90%]">
              Grow your wealth confidently with our personalized investment
              solutions, tailored to your financial goals.
            </p>
          </div>
        </div>
      </div>

      {/* Wealth Management & Financial Planning */}
      <div className="flex md:flex-row flex-col md:gap-6 gap-8 justify-center">
        <div className="md:w-[30%] w-full p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
          <div className="flex pb-5 items-center justify-center pt-10">
            <Image src={wade} alt="Wade Warren" className="object-contain" />
          </div>
          <div className="flex flex-col justify-center mx-auto md:pt-10 pl-6">
            <h4 className="text-white md:text-3xl text-2xl mb-4">Wealth Management</h4>
            <p className="text-white text-base font-light w-[90%]">
              Make informed decisions for your financial future with our wealth
              management expertise.
            </p>
          </div>
        </div>

        <div className="md:w-[40%] w-full p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
          <div className="flex item-center justify-center pb-5 pt-10">
            <Image src={planning} alt="Planning" className="object-contain" />
          </div>
          <div className=" flex flex-col justify-center pl-6">
            <h4 className="text-white md:text-3xl text-2xl mb-4">Financial Planning</h4>
            <p className="text-white text-base font-light md:w-[90%]">
              Achieve your financial dreams with our comprehensive financial
              planning services, guidung you toward a secure future.
            </p>
          </div>
        </div>
      </div>

      {/* Your way to financial freedom */}
      <div className="flex flex-col justify-center items-center py-12 mx-auto">
        <h2 className="md:text-7xl text-4xl text-white md:w-[60%] w-[70%] text-center mb-6">
          Your Financial Freedom, Your Way
        </h2>
        <p className="text-white md:text-xl text-base font-light md:w-[44%] w-[72%] text-center">
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
      <div className="flex md:flex-row flex-col py-10 md:gap-2 gap-6 w-[90%] mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={banknotes} alt="Banknotes" className="object-contain" />
            <p className="md:text-2xl text-xl text-white">No minimum balance fees</p>
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
            <p className="md:text-2xl text-xl text-white">No monthly fees</p>
          </div>
          <p className="text-white text-base font-light">
            Bank with us without worrying about monthly fees. Keep more of your
            money where it belongs- in your account.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Image
              src={arrowsLeft}
              alt="Arrows left and Right"
              className="object-contain"
            />
            <p className="md:text-2xl text-xl text-white">No bank transfer fees</p>
          </div>
          <p className="text-white text-base font-light">
            Seamlessly transfer funds without the extra cost. Send and receive
            money with zero bank transfer fees.
          </p>
        </div>
      </div>

      {/* What we offer */}
      <div className="py-10">
        <div className="bg-[#48d64c] py-18">
          <p className="md:text-9xl text-6xl text-black w-[80%] mx-auto">
            Smart investments, secure payments, and expert guidance, all in one
            place.
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="py-10 mx-auto w-[90%]">
          <div className="flex flex-col md:w-[60%] w-[80%] ml-12">
            <h2 className="md:text-7xl text-4xl text-white mb-6 font-light leading-tight">
              Confidently Shape Your Financial Future
            </h2>
            <p className="md:text-xl text-base text-white font-light leading-relaxed">
              At RAFT, we empower you to confidently shape your financial
              future. Our modern approach simplifies saving and investing,
              making it easier than ever.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 w-[90%] mx-auto">
        <div className="flex md:flex-row flex-col gap-6 justify-center">
          <div className="flex flex-col md:w-[45%]">
            <div className="p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
              <div className="pb-20">
                <h5 className="md:text-3xl text-2xl text-white mb-4">Spend better</h5>
                <p className="text-white md:text-xl text-base font-light">
                  Set and achieve financial goals with ease, automate your
                  savings, and watch your money grow without stress.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src={spendBetter}
                  alt="Spend Better"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[45%]">
            <div className=" p-6 border border-gray-700 rounded bg-base-600 bg-[#131313]">
              <div className="pb-20">
                <h5 className="md:text-3xl text-2xl text-white mb-4">Invest better</h5>
                <p className="text-white md:text-xl text-base font-light">
                  Set and achieve financial goals with ease, automate your
                  savings, and watch your money grow without stress.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src={investBetter}
                  alt="Invest Better"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 w-[90%] mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col items-center md:gap-4 gap-2">
            <p className="text-white md:text-7xl text-xl font-semibold">50+</p>
            <p className="text-white md:text-lg text-sm font-light">CITIES</p>
          </div>

          <div className="flex flex-col items-center md:gap-4 gap-2">
            <p className="text-white md:text-7xl text-xl font-semibold">50,000+</p>
            <p className="text-white md:text-lg text-sm font-light">TRANSACTIONS</p>
          </div>

          <div className="flex flex-col items-center md:gap-4 gap-2">
            <p className="text-white md:text-7xl text-xl font-semibold">3M+</p>
            <p className="text-white md:text-lg text-sm font-light">USERS</p>
          </div>

          <div className="flex flex-col items-center md:gap-4 gap-2">
            <p className="text-white md:text-7xl text-xl font-semibold">5</p>
            <p className="text-white md:text-lg text-sm font-light">USER RATINGS</p>
          </div>
        </div>
      </div>

      <div className="py-6 mx-auto">
        <Image
          src={dwf}
          alt="Drinks with friends"
          width={2000}
          height={848}
          className="object-contain"
        />
      </div>

      {/* Introducing RAFT Card */}
      <div className="py-14 mx-auto">
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-[#48d64c] md:text-lg text-base">INTRODUCTION</p>
          <h2 className="md:text-7xl text-4xl text-white md:w-[60%] w-[80%] text-center">
            Introducing RAFT'S Next-Gen Cards
          </h2>
          <p className="text-white md:text-xl text-base font-light text-center md:w-[44%] w-[70%]">
            Discover RAFT's latest innovation - our new cards. Elevate your
            banking experience with cutting-edge features, security, and
            unprecedented convenience.
          </p>
        </div>
      </div>

      {/* RAFT Cards */}
      <div className="py-10">
        <div className="flex items-center justify-center">
          <Image src={cardAtm} alt="ATM card" className="object-contain" />
        </div>
      </div>

      <div className="py-12 w-[90%] mx-auto">
        <div className="flex md:flex-row flex-col gap-10 mx-auto justify-center">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-3">
              <Image
                src={cTech}
                alt="Contactless technology"
                className="object-contain"
              />
              <p className="text-white md:text-2xl text-xl">Contactless Technology</p>
            </div>
            <p className="text-white text-base font-light">
              Our new cards come equipped with contactless technology, allowing
              you to make swift, secure payments with a simple tap
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 mb-3">
              <Image
                src={persona}
                alt="Personalization"
                className="object-contain"
              />
              <p className="text-white text-xl md:text-2xl">Personalization</p>
            </div>
            <p className="text-white text-base font-light">
              Customize your card to reflect your unique style. Choose from a
              range of designs that suit your personality.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 mb-3">
              <Image
                src={security}
                alt="Enhanced Security"
                className="object-contain"
              />
              <p className="text-white text-xl md:text-2xl">Enhanced Security</p>
            </div>
            <p className="text-with text-base font-light text-white">
              Your peace of mind is our priority. Our cards feature advanced
              security measures to protect your transactions and data.
            </p>
          </div>
        </div>
      </div>

      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
