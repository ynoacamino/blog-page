import Image from 'next/image';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#ffffff] border-t-1 border-solid border-gray-300
      text-base md:text-md lg:text-xl text-center p-1 flex justify-center min-h-[200px]"
    >
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 py-1 pb-4">
        <aside className="flex justify-center items-center gap-2 flex-col">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={120}
            height={120}
            className="m-2"
          />
          <header className="md:text-2xl font-bold">
            BLOG PAGE
          </header>
        </aside>
        <Divider className="md:hidden" />
        <aside className="flex justify-center items-center">
          <div className="flex flex-col items-start">
            <header className="md:text-lg font-semibold my-2">
              ACCESO RAPIDO
            </header>
            <ol className="text-medium flex flex-col items-start ml-4 gap-1">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-900">
                  Categorias
                </Link>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </footer>
  );
}
