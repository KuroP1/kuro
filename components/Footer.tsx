import Image from "next/image";
import { LinkItem } from "./LinkItem";

export const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-evenly flex-col md:flex-row mb-6 text-2xl">
        <h1 className="font-roberto font-bold">Skills</h1>
      </div>
      <div className="flex items-center justify-evenly flex-col md:flex-row mb-9">
        <img
          src="/images/angry.png
        "
          alt="Angry Face"
          width={100}
          height={50}
        />
        <img
          src="/images/girlHappy.jpg
        "
          alt="girlHappy"
          width={100}
          height={50}
        />
        <img
          src="/images/main.png
        "
          alt="main"
          width={100}
          height={50}
        />
        <img
          src="/images/happy.jpg
        "
          alt="happy"
          width={100}
          height={50}
        />
      </div>
      <div className="flex items-center justify-evenly flex-col md:flex-row text-2xl mb-9">
        <h1 className="font-roberto font-bold">Contact </h1>
      </div>
      <div className="flex items-center justify-evenly flex-col md:flex-row text-2xl ">
        <a
          href="21028949d@connect.polyu.hk"
          className="flex items-center justify-evenly flex-col md:flex-row text-2xl mb-9"
        >
          <h2 className="font-roberto ">21028949d@connect.polyu.hk</h2>
        </a>
      </div>
      <div className="flex items-center justify-evenly flex-col md:flex-row text-sm mb-9">
        <span>© 2023 Elvis Yeung. Stay hype!</span>
      </div>
    </footer>
  );
};
