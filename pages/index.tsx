import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

import { LinkItem, Navbar, Footer } from "@/components";
const index = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <Navbar />

      <Footer />
    </div>
  );
};

export default index;
