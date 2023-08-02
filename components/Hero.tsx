import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  //console.log(pageInfo);
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo.name}`,
      "Guy-who-loves-Technology.tsx",
      "<ButLovesTo-CodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BgCircles />
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src={urlFor(pageInfo.heroImage.asset._ref).url()}
        alt="Andrew Lenz"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]">
          {pageInfo.role}
        </h2>
        <div className="h-24 flex items-center">
          <h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
