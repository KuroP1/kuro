import Link from "next/link";
import Image from "next/image";
const index = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div id="nav" className="pt-8 flex flex-1  md:justify-evenly">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <li className=" relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
              <Link href="/">about</Link>
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
              <Link href="/">projects</Link>
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
              <Link href="/">timeline</Link>
            </li>
            <li className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
              <Link href="/">interest</Link>
            </li>
            <li className=" relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
              <Link href="/">socials</Link>
            </li>
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
