"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function InfoSection() {
  const [open, setOpen] = useState(false);

  function handelClick() {
    setOpen((prev) => !prev);
  }
  return (
    <aside className="w-full flex flex-col p-5 bg-light-black rounded-3xl border-light-gray border-2 relative transition-all duration-300 mx-auto md:max-w-[700px] md:mt-10 lg:max-w-[900px] xl:mt-9 xl:max-w-72 xl:mx-0 xl:self-start xl:gap-7">
      <div className="w-full flex justify-start items-center gap-4 h-20 sm:h-32 xl:justify-center xl:flex-col xl:h-full xl:gap-5">
        <div className="flex justify-center items-center bg-light-gray w-20 h-20 rounded-3xl shadow-lg shadow-white/10 sm:w-32 sm:h-32">
          <Image
            src="/profile.png"
            alt="profile"
            width={45}
            height={80}
            className="sm:w-16"
          />
        </div>
        <div className="flex flex-col justify-evenly items-center h-full xl:gap-5">
          <h2 className="text-white text-xl font-bold sm:text-2xl">
            عرفان مزیدآبادی
          </h2>
          <div className=" bg-light-gray px-2 py-1 rounded-lg flex items-center justify-center self-start">
            <p className="text-white font-semibold text-[11px] mt-1 sm:text-base">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-8 h-8 bg-gradient-to-br from-light-gray to-light-gray/0 rounded-tl-2xl rounded-br-2xl absolute top-0 left-0 border-b-2 border-r-2 border-light-gray flex justify-center items-center sm:w-32 xl:hidden"
        onClick={handelClick}
      >
        <Image
          src="/icon/arrow.svg"
          alt="arrow"
          width={11}
          height={11}
          className="sm:hidden"
        />
        <p className="text-orenge-yellow text-[12px] font-semibold hidden sm:block">
          {open ? "نمایش کمتر" : "نمایش بیشتر"}
        </p>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100 mt-5 flex flex-col gap-2"
            : "max-h-0 opacity-0 xl:opacity-100 xl:max-h-[500px]"
        }`}
      >
        <ul className="flex flex-col gap-5 border-y border-light-gray py-5 my-2 md:grid md:grid-cols-2 xl:flex xl:flex-col">
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10 sm:w-12 sm:h-12">
              <Image
                src={"/icon/mail.png"}
                alt="mail"
                width={16}
                height={16}
                className="sm:w-5 sm:h-5"
              />
            </div>
            <div className="flex flex-col gap-1 text-[12px] sm:text-sm">
              <p className="text-gray-500 font-semibold">ایمیل</p>
              <Link
                href={"mailto:erfanmazidm@gmail.com"}
                className="text-white"
              >
                erfanmazidm@gmail.com
              </Link>
            </div>
          </li>
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10 sm:w-12 sm:h-12">
              <Image
                src={"/icon/smartphone.png"}
                alt="smartphone"
                width={16}
                height={16}
                className="sm:w-5 sm:h-5"
              />
            </div>
            <div className="flex flex-col gap-1 text-[12px] sm:text-sm">
              <p className="text-gray-500 font-semibold">شماره تماس</p>
              <Link href={"tel:09354687677"} className="text-white">
                09354687677
              </Link>
            </div>
          </li>
          <li className="flex justify-start items-center gap-3">
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-light-gray rounded-md shadow-md shadow-white/10 sm:w-12 sm:h-12">
              <Image
                src={"/icon/location.png"}
                alt="location"
                width={16}
                height={16}
                className="sm:w-5 sm:h-5"
              />
            </div>
            <div className="flex flex-col gap-1 text-[12px] sm:text-sm">
              <p className="text-gray-500 font-semibold">موقعیت مکانی</p>
              <p className="text-white">ایران - تهران</p>
            </div>
          </li>
        </ul>
        <div className="flex gap-3 xl:mt-5 xl:items-center xl:justify-center">
          <Link
            href={"https://www.linkedin.com/in/erfanmazidabadi/"}
            target="_blank"
          >
            <Image
              src={"/icon/linkedin.svg"}
              alt="linkedin"
              width={20}
              height={20}
              className="sm:w-7 sm:h-7"
            />
          </Link>
          <Link href={"https://github.com/erfanmazid"} target="_blank">
            <Image
              src={"/icon/github.svg"}
              alt="github"
              width={20}
              height={20}
              className="sm:w-7 sm:h-7"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default InfoSection;
