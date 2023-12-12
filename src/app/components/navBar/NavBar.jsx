import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import SearchBar from './SearchBar';
import NavBarMobile from './NavBarMobile';

export default function NavBar() {
  return (
    <nav className="w-full flex flex-col justify-center items-center sticky top-0 backdrop-blur-lg bg-[#ffffffd8]">
      <div className="w-full max-w-7xl flex justify-between items-center p-4">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={48}
            height={48}
          />
          <SearchBar />
        </div>
        <div className="flex gap-4 items-center justify-center ">
          <div className="md:flex gap-4 items-center justify-center hidden">
            <a href="/" className="text-gray-500 hover:text-gray-900">Login</a>
            <a href="/" className="text-gray-500 hover:text-gray-900">Signup</a>
          </div>
          <NavBarMobile />
        </div>
      </div>
      <Divider />
    </nav>
  );
}
