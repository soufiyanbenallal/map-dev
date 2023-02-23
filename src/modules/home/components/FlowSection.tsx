import React from "react";
import {
  CommandLineIcon,
  CodeBracketSquareIcon,
  UserIcon,
  UsersIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import github from "@/assets/svg/github.svg";
import Divider from "@/components/Divider";
import classNames from "classnames";
import react from "@/assets/svg/react.svg";
import laravel from "@/assets/svg/laravel.svg";
import google from "@/assets/svg/google.svg";
import mongodb from "@/assets/svg/mongodb.svg";
import mysql from "@/assets/svg/mysql.svg";
import nodejs from "@/assets/svg/nodejs.svg";
import redux from "@/assets/svg/redux.svg";
import spinner from "@/assets/svg/spinner.svg";
import gitlab from "@/assets/svg/gitlab.svg";
import bitbucket from "@/assets/svg/bitbucket.svg";
import Box from "@/components/Box";

const SpinnerIcon = ({ className }: { className?: string }) => (
  <img
    src={spinner}
    className={classNames("w-5 animate-spin-slow opacity-50", className)}
    alt="spinner"
  />
);
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 576.64 124.17">
    <path
      d="M514.56,10l52.08,52.08-52.08,52.09"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="20"
    />
    <rect y="52.08" width="97.76" height="20" rx="10" />
    <rect x="132.22" y="52.08" width="97.76" height="20" rx="10" />
    <rect x="264.44" y="52.08" width="97.76" height="20" rx="10" />
    <rect x="396.67" y="52.08" width="97.76" height="20" rx="10" />
  </svg>
);
export default function FlowSection() {
  return (
    <Box className="flex gap-2 py-40 items-center justify-between bg-white bg-opacity-90 px-10">
      <article className="flex1 relative h-40 w-48">
        {/* left  */}
        <CodeBracketSquareIcon className="text-slate-700 w-9 opacity-75 absolute top-4 left-7" />
        <CommandLineIcon className="text-slate-700 w-5 opacity-60 absolute top-1/2 -mt-2 left-2" />
        <CodeBracketSquareIcon className="text-slate-700 w-8 opacity-50 absolute bottom-3 left-8" />

        {/* center */}
        <CommandLineIcon className="text-slate-700 w-14 opacity-80 absolute top-1/2 left-1/2 -mt-7 -ml-7" />

        {/* right */}
        <CommandLineIcon className="text-slate-700 w-8 opacity-20 absolute top-2 right-10" />
        <CodeBracketSquareIcon className="text-slate-700 w-6 opacity-50 absolute top-1/2 right-8 -mt-3" />
        <CommandLineIcon className="text-slate-700 w-10 opacity-40 absolute bottom-2 right-10" />
      </article>
      <article className="flex-shrink-0">
        <ArrowIcon className="h-3 fill-current stroke-current text-slate-300" />
      </article>
      <article className="flex1 bg-slate-50 rounded-lg border">
        <h3 className="capitalize font-bold px-3 py-3 tracking-wide text-sm text-center text-slate-700">
          git integration
        </h3>
        <Divider />
        <ul className="text-gray-600 flex flex-col gap-3 py-3 px-2">
          <li className="flex items-center gap-2 text-xs">
            <img src={github} className="w-5" alt="git integration github" />
            <span>Github</span>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <img src={gitlab} className="w-5" alt="git integration gitlab" />
            <span>Gitlab</span>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <img
              src={bitbucket}
              className="w-5"
              alt="git integration bitbucket"
            />
            <span>Bitbucket</span>
          </li>
        </ul>
      </article>
      <article className="flex-shrink-0">
        <ArrowIcon className="h-3 fill-current stroke-current text-slate-300" />
      </article>
      <article className="flex1 bg-slate-50 rounded-lg border">
        <h3 className="capitalize font-bold px-3 py-3 tracking-wide text-sm text-center text-slate-700">
          CI/CD integration
        </h3>
        <Divider />
        <ul className="text-gray-600 flex flex-col gap-3 py-3 px-2">
          <li className="flex items-center gap-2 text-xs">
            <CheckCircleIcon className="w-5 text-green-400" />
            <span>Commit Detected</span>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <SpinnerIcon />
            <span>Autumated Test</span>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <SpinnerIcon className="" />
            <span>Auto Deploying</span>
          </li>
        </ul>
      </article>
      <article className="flex-shrink-0">
        <ArrowIcon className="h-3 fill-current stroke-current text-slate-300" />
      </article>
      <article className="relative flex1 bg-slate-50 rounded-lg border">
        <h3 className="capitalize font-bold px-3 py-3 tracking-wide text-sm text-center text-slate-700">
          Your application
        </h3>
        <Divider />
        <div className="ralative w-full h-28">
          <img src={react} className="w-7 m-3" alt="" />
          <img src={laravel} className="w-7 absolute right-3 -mt-2" alt="" />
          <img src={google} className="w-7 absolute right-6 bottom-3" alt="" />
          <img
            src={mongodb}
            className="absolute top-1/2 left-1/2 mt-1 -ml-4 w-8"
            alt=""
          />
          <img src={mysql} className="w-10 ml-1" alt="" />
          <img src={nodejs} className="w-10 absolute right-6 top-1/3" alt="" />
          <img src={redux} className="w-7 absolute left-6 bottom-3" alt="" />
        </div>
      </article>
      <article className="flex-shrink-0">
        <ArrowIcon className="h-3 fill-current stroke-current text-slate-300" />
      </article>
      <article className="flex1 relative h-40 w-48">
        {/* left  */}
        <UserIcon className="text-slate-700 w-9 opacity-30 absolute top-3 left-14" />
        <UsersIcon className="text-slate-700 w-5 opacity-40 absolute top-1/2 -mt-2 left-2" />
        <UserIcon className="text-slate-700 w-7 opacity-70 absolute bottom-3 left-8" />

        {/* center */}
        <UserGroupIcon className="text-slate-700 w-14 opacity-80 absolute top-1/2 left-1/2 -mt-7 -ml-7" />

        {/* right */}
        <UsersIcon className="text-slate-700 w-8 opacity-60 absolute top-2 right-10" />
        <UserIcon className="text-slate-700 w-5 opacity-30 absolute top-14 right-10" />
        <UserIcon className="text-slate-700 w-7 opacity-70 absolute top-1/2 right-2 " />
        <UsersIcon className="text-slate-700 w-8 opacity-40 absolute bottom-2 right-14" />
      </article>
    </Box>
  );
}
