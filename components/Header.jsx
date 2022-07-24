import Image from "next/image";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="https://1iwky71fbek0h7wy43b8a0i2-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Instagram-Text.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* Right */}

      <div className="flex space-x-4 items-center">
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <img
          src="https://newsimg.sedaily.com/2020/05/28/1Z2XCSYAIX_1.jpg"
          alt="user-image"
          className="h-10 w-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
