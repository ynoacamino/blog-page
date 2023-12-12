import Image from 'next/image';
import Divider from '../utils/Divider';

export default function Aside() {
  return (
    <aside className="hidden lg:flex flex-col col-span-2 w-full border-solid border-l-1 border-[#dcdcdc] p-4 pl-8">
      <div className="my-6">
        <h2 className="text-lg font-semibold my-1">
          Categorias
        </h2>
        <ul className="ml-2 flex flex-col gap-1 text-[#5c5c5c]">
          <li>
            <a href="/" className="hover:text-black">
              Programming
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Data Science
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Technology
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Self Improvement
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Writing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Relationships
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black">
              Machine Learning
            </a>
          </li>
        </ul>
      </div>
      <Divider />
      <div className="my-6 flex flex-col gap-3">
        <h2 className="text-lg font-semibold my-1">
          Ultimo post
        </h2>
        <article className="flex-col flex justify-center items-start gap-3">
          <header className="flex gap-2 text-sm flex-wrap">
            <Image
              width={20}
              height={20}
              src="/images/userExample.jpg"
              alt="User Example"
              className="rounded-full"
            />
            <span>
              Harendra Kumar
            </span>
            <span className="">·</span>
            <span>
              Agosto 3
            </span>
          </header>
          <div className="w-full flex justify-center items-center">
            <a className="" href="/">
              <Image
                width={120}
                height={120}
                src="/images/cardExample.jpg"
                alt="Card Example"
              />
            </a>
          </div>
          <a href="/" className="">
            <h1 className="font-black text-lg">
              Interview: Can You Stop “forEach” in JavaScript?
            </h1>
          </a>
          <footer className="flex justify-start items-center text-sm flex-wrap gap-y-1 gap-x-2">
            <a href="/" className="px-2 py-1 bg-gray-200 rounded-full">
              Front End Development
            </a>
            <a href="/" className="ml-2">
              5 min read
            </a>
          </footer>
        </article>
      </div>
    </aside>
  );
}
