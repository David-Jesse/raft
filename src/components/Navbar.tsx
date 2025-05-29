import Image from "next/image";
import Link from "next/link";
import navLogo from "../assets/images/navLogo.png";


export default function Navbar() {
  return (
    <div className="w-full bg-black">
      <div className=" w-[90%] mx-auto py-6 flex items-center justify-between">
        {/* Logo here */}
        <Link href='/' className="text-white flex items-center text-2xl gap-1">
          <Image
            src={navLogo}
            alt="Raft logo"
            width={30}
            height={40}
          />
          Raft
        </Link>

        <div className="flex gap-4 text-[#BDBDBD] text-lg  transiton-all duration-200">
          <Link href="#" className='hover:text-[#2B892E]'>Solutions</Link>
          <Link href="#" className='hover:text-[#2B892E]'>Learn</Link>
          <Link href="#" className='hover:text-[#2B892E]'>About</Link>
        </div>

        <div className="flex gap-2 text-white items-center">
          <Link href="#" className="text-lg hover:text-[#2B892E]">Login</Link>
          <button className="bg-[#2B892E] py-1 px-4 text-base rounded-full hover:bg-[#2B892E]/80 cursor-pointer" aria-label="Get Started with Raft">Get Started</button>
        </div>
      </div>
    </div>
  );
}
