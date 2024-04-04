'use client'

import Image from "next/image";
import React from "react";
import avatar from "@/images/avatar.png"
import Link from "next/link";
import { Search, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
    {/* desktop */}
    <div className={`hidden md:block fixed top-0 h-[80px] w-full ${pathname === "/review" ? 'bg-[#F2F6FD]' : 'bg-[#FAFDFC]'} `}>
      <div className="flex h-full justify-between items-center px-[40px] lg:px-[100px]">
        <Link href="/" className="flex items-center gap-x-2">
          <div className="text-[10px] font-bold tracking-[5px]">SPOTTA</div>
          <div className="bg-[#5378F6] w-[20px] h-[12px] px-1 py-[2px] text-white  text-[.45rem] font-semibold">
            NG
          </div>
        </Link>

    {
      pathname === "/review" && (
        <div className="hidden md:block">

        <form className='flex flex-col gap-y-4 items-start'>
                <div className={`flex items-center justify-between gap-x-[10px] p-2 ${pathname === "/review" ? "bg-[#FBFAFC]" : "bg-[#F3F7FE]"} w-full md:w-[557px] rounded-[6px] border`}>
          <div className="flex gap-x-2 items-center w-full">

                 <Search className='text-[#484851]' size={16} />
                 <input className={`text-[16px] outline-none w-full text-[#484851] ${pathname === "/review" ? "bg-[#FBFAFC]" : "bg-[#F3F7FE]"}`} type='text' placeholder='Enter Address' />
          </div>
                 <X  size={13} className="cursor-pointer text-[0.9rem] text-[#484851]" />
             </div>

            </form>
        </div>
      )
    }
        

        <div className="flex gap-x-2 items-center">
          <div className="text-[1rem] font-medium">Welcome!</div>
          <div className="w-10 h-10">
            <Image alt="avatar" className="fill object-cover " src={avatar} />
          </div>
        </div>
      </div>
    </div>

    {/* mobile */}

    <div className={`block md:hidden fixed top-0 right-0 left-0 h-[80px] w-full bg-[#FAFDFC] `}>
      <div className="flex h-full justify-between items-center px-[40px] lg:px-[100px]">
        <Link href="/" className="flex items-center gap-x-2">
          <div className="text-[10px] font-bold tracking-[5px]">SPOTTA</div>
          <div className="bg-[#5378F6] w-[20px] h-[12px] px-1 py-[2px] text-white  text-[.45rem] font-semibold">
            NG
          </div>
        </Link>
        

        <div className="flex gap-x-2 items-center">
          <div className="text-[1rem] font-medium">Welcome!</div>
          <div className="w-10 h-10">
            <Image alt="avatar" className="fill object-cover " src={avatar} />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Navbar;
