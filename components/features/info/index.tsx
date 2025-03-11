"use client";

import Image from "next/image";
import { useState } from "react";

function InfoSection() {
  const [open, setOpen] = useState(false);

  function handelClick() {
    setOpen((prev) => !prev);
  }
  return (
    <aside className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300">
      <div className="w-full flex justify-start items-center gap-4 h-20">
        <div className="flex justify-center items-center bg-light-gray w-20 h-20 rounded-3xl shadow-lg shadow-white/10">
          <Image src="/profile.png" alt="profile" width={45} height={80} />
        </div>
        <div className="flex flex-col justify-evenly items-center h-full">
          <h2 className="text-white text-xl font-bold">عرفان مزیدآبادی</h2>
          <div className=" bg-light-gray px-2 py-1 rounded-lg flex items-center justify-center self-start">
            <p className="text-white font-semibold text-[11px] mt-1">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-8 h-8 bg-gradient-to-br from-light-gray to-light-gray/0 rounded-tl-2xl rounded-br-2xl absolute top-0 left-0 border-b-2 border-r-2 border-light-gray flex justify-center items-center"
        onClick={handelClick}
      >
        <Image src="/icon/arrow.svg" alt="arrow" width={11} height={11} />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100 mt-5 flex flex-col gap-2"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 border-y border-light-gray py-5 my-2">
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10">
              <Image src={"/icon/mail.png"} alt="mail" width={16} height={16} />
            </div>
            <div className="flex flex-col gap-1 text-[11px]">
              <p className="text-gray-500 font-semibold">ایمیل</p>
              <p className="text-white">erfanmazidm@gmail.com</p>
            </div>
          </li>
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10">
              <Image
                src={"/icon/smartphone.png"}
                alt="smartphone"
                width={16}
                height={16}
              />
            </div>
            <div className="flex flex-col gap-1 text-[11px]">
              <p className="text-gray-500 font-semibold">شماره تماس</p>
              <p className="text-white">09354687677</p>
            </div>
          </li>
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10">
              <Image
                src={"/icon/location.png"}
                alt="location"
                width={16}
                height={16}
              />
            </div>
            <div className="flex flex-col gap-1 text-[11px]">
              <p className="text-gray-500 font-semibold">موقعیت مکانی</p>
              <p className="text-white">ایران - تهران</p>
            </div>
          </li>
        </ul>
        <div className="flex gap-3">
          <Image
            src={"/icon/linkedin.svg"}
            alt="linkedin"
            width={20}
            height={20}
          />
          <Image src={"/icon/github.svg"} alt="github" width={20} height={20} />
        </div>
      </div>
    </aside>
  );
}

export default InfoSection;
