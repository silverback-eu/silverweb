import { Card, Snippet } from "@silverweb/ui";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <div className="relative z-50 mx-auto flex max-w-6xl justify-between pt-20">
        <div className="rounded-xl border border-stone-500 border-opacity-50 px-4 py-2 font-mono text-sm">
          @silverweb/<b>web</b>
        </div>
        <div className="flex gap-1 text-sm">
          By{" "}
          <span className="pl-0.5 text-xl font-bold tracking-tight">Grimm</span>{" "}
          <span className="text-xl font-bold tracking-tight text-[#6D28D9]">
            Integrations
          </span>
        </div>
      </div>
      <div className="relative mx-auto mt-32 max-w-3xl space-y-4 ">
        <div className="flex items-center justify-center gap-2">
          <div className="text-5xl font-bold ">Welcome to</div>
          <div className="grid grid-cols-[70px_1fr] p-4 text-black dark:text-white">
            <div className="relative h-16 w-16 drop-shadow-[0px_1px_20px_rgb(255_255_255_/_45%)] ">
              <Image alt="Turbo-Plus Logo" fill src="/turbo-plus.svg" />
            </div>
            <div className="pt-3">
              <div className="text-4xl font-bold tracking-tight">
                Turbo <span className="text-[#FF1D56]">Plus</span>
              </div>
              <div className="-mt-2 pl-1 text-2xl font-light tracking-tight">
                connecting <span className="font-semibold">tools</span>,
                building <span className="font-semibold">smarter</span>
              </div>
              <div className="-mt-1 pl-1 text-xl font-light text-white dark:text-black">
                tailwind, storybook and next
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-xl font-medium">
          Get started by using
          <span className="text-sm">
            <Snippet>bunx turbo-plus -h</Snippet>
          </span>
        </div>
        <div className="absolute top-1/2 -z-10 h-52 w-full -translate-y-1/2 bg-[conic-gradient(from_180deg_at_50%_50%,_#2a8af6_0deg,_#a853ba_180deg,_#e92a67_360deg)] blur-3xl" />
      </div>
      <div className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-6">
        <Card>See and contribute to the Turbo Plus repo.</Card>
        <Card>Have a look what else Grimm Integrations does.</Card>
      </div>
    </div>
  );
}
