'use client';

import { useState } from 'react';
import MoreOptionsIcon from './MoreOptionsIcon';
import ExitButton from './ExitButton';

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" aria-label="más opciones" className="w-9 md:hidden" onClick={handleClick}>
        <MoreOptionsIcon />
      </button>
      <nav className={`flex flex-col items-center justify-center gap-4 fixed h-screen z-[1000] bg-white
        w-screen max-w-md bg-one dark:bg-one-dark top-0 left-0 ${isOpen || 'left-[-100vh] opacity-0'} md:hidden
         transition-all shadow-2xl`}
      >
        <a href="/" className="text-gray-500 hover:text-gray-900">Login</a>
        <a href="/" className="text-gray-500 hover:text-gray-900">Signup</a>
        <button type="button" aria-label="salir" className="w-7 mt-20" onClick={handleClick}>
          <ExitButton />
        </button>
      </nav>
    </>
  );
}
