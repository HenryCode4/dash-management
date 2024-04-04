'use client';

import { Bookmark, ChevronRight, Search, Share2, X } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Banner = ({handleModal}) => {

  const pathname = usePathname()

  const mobileTags = [
    {
      name: "Schools",
    },
    {
      name: "Hospitals",
    },
    {
      name: "Airport",
    },
    {
      name: "Gym",
    },
    {
      name: "Park",
    },
    {
      name: "Wifi",
    },
    
  ];
  const tags = [
    {
      name: "Schools",
    },
    {
      name: "Hospitals",
    },
    {
      name: "Resort Park",
    },
    {
      name: "Shopping Malls",
    },
    {
      name: "AirPort",
    },
    {
      name: "Train Station",
    },
    {
      name: "Nightlife",
    },
    {
      name: "Public Wifi",
    },
    {
      name: "Parking Lot",
    },
    {
      name: "Security",
    },
    {
      name: "Public Transport",
    },
    {
      name: "Bus Station",
    },
    {
      name: "Quiet",
    },
  ];
  return (
    <>
    {/* Desktop  */}
      <div className="bg-[#F2F6FD] pb-4 pt-[80px] hidden  md:flex flex-col px-[40px] md:px-[100px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-[1.5rem] font-medium text-[#1E1E1E]">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h2>
            <p className="text-[1rem] font-medium">
              Reviews (People are raving about the selected location)
            </p>
          </div>

          <div className=" flex gap-x-3 items-center">
            <button onClick={handleModal} className="bg-[#3366FF] text-[1rem] text-white font-medium rounded-[6px] px-6 py-2">
              Leave a review
            </button>
            <div className="border-[1.5px] border-[#3366FF] px-3 py-2 text-[#3366FF]">
              <Bookmark className="w-[20px] h-[20px]" />
            </div>
            <div className="border-[1.5px] border-[#3366FF] px-3 py-2 text-[#3366FF]">
              <Share2 className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 pt-4 justify-between items-center w-full overflow-x-auto min-w-[100%]">
    {tags.map((tag) => (
      <div className="flex  px-2 py-1 border rounded-lg bg-white" key={tag.name}>
        <button className="text-[0.88rem]">{tag.name}</button>
      </div>
    ))}
    <div className="w-[24px] h-[24px] cursor-pointer rounded-full border bg-white items-center flex ">
      <ChevronRight size={20} className="text-[#344054]" />
    </div>
  </div>
      </div>


      {/* Mobile  */}

      <div className="md:hidden pt-[80px] px-[40px] md:px-[100px] flex flex-col">
      {
      pathname === "/review" && (
        <div className="">

        <form className='flex flex-col gap-y-4 items-start'>
                <div className={`flex items-center justify-between gap-x-[10px] p-2 ${pathname === "/review" ? "bg-[#FBFAFC]" : "bg-[#F3F7FE]"} w-full rounded-[6px] border`}>
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


<div className="flex flex-col md:flex-row justify-between items-center pt-2">
          <div>
            <h2 className="text-[1rem] font-medium text-[#1E1E1E]">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h2>
            <p className="text-[12px] font-medium">
              <span className="font-semibold">"450"</span>Reviews (People are raving about the selected location)
            </p>
          </div>

          <div className="flex gap-x-2 pt-4 justify-between items-center w-full overflow-x-auto min-w-[100%]">
          {mobileTags.map((tag) => (
            <div className="flex  px-2 py-1 border rounded-lg bg-white" key={tag.name}>
              <button className="text-[0.88rem]">{tag.name}</button>
            </div>
          ))}
          
        </div>



          <div className=" flex items-center justify-between w-full pt-2">
            <button onClick={handleModal} className="bg-[#3366FF] text-[1rem] text-white font-medium rounded-[6px] px-6 py-2">
              Leave a review
            </button>

            <div className="flex gap-x-3">
              <div className="border-[1.5px] border-[#3366FF] px-3 py-2 text-[#3366FF]">
              <Bookmark className="w-[20px] h-[20px]" />
            </div>
            <div className="border-[1.5px] border-[#3366FF] px-3 py-2 text-[#3366FF]">
              <Share2 className="w-[20px] h-[20px]" />
            </div>
            </div>
            
          </div>
        </div>



      </div>
    </>
    
  );
};

export default Banner;
