"use client";

import { Card, Snippet } from "@turboplus/ui";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto pt-20 flex justify-between z-50 relative">
        <div className="font-mono text-sm border rounded-xl border-stone-500 border-opacity-50 px-4 py-2">
          @turboplus/<b>web</b>
        </div>
        <div className="flex gap-1 text-sm">
          By{" "}
          <span className="text-xl font-bold tracking-tight pl-0.5">Grimm</span>{" "}
          <span className="text-xl font-bold tracking-tight text-[#6D28D9]">
            Integrations
          </span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-32 space-y-4 relative ">
        <div className="flex justify-center items-center gap-2">
          <div className="text-5xl font-bold ">Welcome to</div>
          <div className="grid grid-cols-[70px_1fr] p-4 text-black">
            <div className="relative w-16 h-16 drop-shadow-[0px_1px_20px_rgb(255_255_255_/_45%)]">
              <Image alt="Turbo-Plus Logo" fill src="/turbo-plus.svg" />
            </div>
            <div className="pt-3">
              <div className="text-4xl font-bold tracking-tight">
                Turbo <span className="text-[#FF1D56]">Plus</span>
              </div>
              <div className="text-2xl font-light tracking-tight -mt-2 pl-1">
                connecting <span className="font-semibold">tools</span>,
                building <span className="font-semibold">smarter</span>
              </div>
              <div className="text-xl font-light text-[#0495FF] -mt-1 pl-1">
                tailwind, storybook and next
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl font-medium flex gap-2 items-center justify-center">
          Get started by using
          <span className="text-sm">
            <Snippet>bunx turbo-plus -h</Snippet>
          </span>
        </div>
        <div className="-z-10 blur-3xl absolute bg-[conic-gradient(from_180deg_at_50%_50%,_#2a8af6_0deg,_#a853ba_180deg,_#e92a67_360deg)] w-full h-52 top-1/2 -translate-y-1/2" />
      </div>
      <div className="grid grid-cols-2 max-w-2xl mx-auto mt-20 gap-6">
        <Card href="/" title="Turbo Plus Repo">
          See and contribute to the Turbo Plus repo.
        </Card>
        <Card href="https://grimm-integrations.cc" title="Grimm Integrations">
          Have a look what else Grimm Integrations does.
        </Card>
      </div>
    </div>
  );
}
