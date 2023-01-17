import Link from "next/link";

interface LinkItemProps {
  children: React.ReactNode;
  href: string;
}

export const LinkItem = ({ children, href }: LinkItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center relative px-3 py-2 transition hover:text-teal-100 dark:hover:text-teal-400 capitalize "
    >
      <li>{children}</li>
    </Link>
  );
};
