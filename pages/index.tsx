import Link from "next/link";
import Image from "next/image";
import { LinkItem } from "@/components";
const index = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div id="nav" className="pt-8 flex flex-1  md:justify-evenly">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <LinkItem href="/"> About </LinkItem>
            <LinkItem href="/"> Projects </LinkItem>
            <LinkItem href="/"> timeline </LinkItem>
            <LinkItem href="/"> interest </LinkItem>
            <LinkItem href="/"> socials </LinkItem>
          </ul>
          <div className="flex justify-start">
            <Image
              src="/images/Happy.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
