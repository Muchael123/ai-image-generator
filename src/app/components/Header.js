import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src= '/ai.jpeg'
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            Maich <span className="text-violet-500">AI</span> Image
            Generator 254
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT</h2>
        </div>
      </div>

      <div className="flex divide-x text-gray-700 items-center text-xs md:text-base">
        <Link
          href="https://my-portfolio-sepia-six.vercel.app/"
          className="px-2 font-light text-right"
        >
          Join The Ultimate Fullstack Web Dev
        </Link>
        <Link href="https://github.com/Muchael123" className="px-2 font-light">
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
