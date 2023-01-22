import Image from "next/image";
import { LinkItem } from "./LinkItem";

export const Navbar = () => {
  return (
    <nav className="pt-8 flex items-center justify-evenly flex-col md:flex-row">
      <ul className="order-2 md:order-1 flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <LinkItem href="/"> About </LinkItem>
        <LinkItem href="/"> Projects </LinkItem>
        <LinkItem href="/"> timeline </LinkItem>
        <LinkItem href="/"> interest </LinkItem>
        <LinkItem href="/"> socials </LinkItem>
      </ul>

      <Image
        src="/images/Happy.jpg"
        width={50}
        height={50}
        className="rounded-full order-1 mb-4 md:mb-0"
        alt=""
      />
    </nav>
  );
};
