import React from "react";
import network from "@/assets/network.svg";
import code from "@/assets/svg/code.svg";
import react from "@/assets/svg/react.svg";
import github from "@/assets/svg/github.svg";
import figma from "@/assets/gif/figma_logo_animation.gif";
import slack from "@/assets/gif/slack.gif";
// import {  } from '@heroicons/react/24/outline'

const GithubCard = () => {
  return (
    <div className="absolute left-[8vw] top-[15vh] flex items-center gap-3 px-3 h-12 rounded-xl shadow-md bg-white">
      <img
        src={github}
        className="object-cover w-6 h-6"
      />
      <p className="text-xs text-slate-700">
        <span className="opacity-70 mr-0.5">@soufiyanbenallal</span>
        <span>Add prettier as formatting doc.</span>
      </p>
    </div>
  );
};
const ReactCard = () => {
  return (
    <div className="absolute right-[8vw] top-[15vh] flex items-center justify-center w-12 h-12 p-2 rounded-xl shadow-md bg-gray-800">
        <img
        src={react}
        className="object-cover w-6 animate-spin-slow "
      />
    </div>
  );
};
const SlackCard = () => {
  return (
    <div className="absolute left-[18vw] bottom-[15vh] overflow-hidden w-12 h-12 rounded-xl shadow-md bg-[#181818]">
        <img
        src={slack}
        className="object-cover w-12 h-12 animate-spin-slow "
      />
    </div>
  );
};

export default function HeaderSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-full ">
        <img src={network} className="-mr-[10%] opacity-30" />
      </div>
      <img
        src={figma}
        className="absolute left-[10vw] top-[40vh] object-contain bg-black w-12 h-12 rounded-xl shadow-md"
      />
      <img
        src={code}
        className="absolute right-[3vw] bottom-[5vh] object-cover w-80 rounded-xl"
      />

      <ReactCard />
      <GithubCard />
      <SlackCard />

      <div className="w-full px-4 min-h-[90vh] flex flex-col items-center justify-center py-10">
        <div
          className="opacity-10 blur-3xl absolute w-full h-full z-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://www.nicepng.com/png/full/51-512313_abstract-colors-png-file-abstract-colorful-dots-background.png)`,
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="flex flex-col items-center gap-3">
            <p className="relative text-xl md:text-[1.6rem] tracking-widest font-extralight text-slate-600 -mb-2 px-4">
              <span>We bring everything that's required to build apps</span>
              <span className="blur-md z-[-1] absolute left-0 top-1.5 w-full h-5 opacity-70 bg-gradient-to-r from-cyan-400 via-yellow-500 to-rose-600"></span>
            </p>
            <p className="text-5xl md:text-7xl max-w-2xl text-center font-black tracking-wide uppercase bg-gradient-to-b from-slate-600 to-gray-800 bg-clip-text text-transparent">
              A development team
            </p>
          </h1>
          <p className="mt-3 text-center text-sm font-light text-gray-500 md:mt-5 md:max-w-xl md:text-sm max-w-md mx-auto">
            You’ll definitely find inspiration in what other people think,
            getting to know new tools and solutions – ready to use in your own
            work.
          </p>
        </div>
      </div>
    </section>
  );
}
