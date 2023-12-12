import Image from 'next/image';
import Divider from '../utils/Divider';

export default function Card() {
  return (
    <>
      <article className="flex flex-col py-8">
        <div className="grid grid-cols-8 gap-x-2">
          <div className="flex flex-col gap-4 col-span-6">
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
            <a href="/">
              <h1 className="font-black text-xl">
                Interview: Can You Stop “forEach” in JavaScript?
              </h1>
              <div>
                There are 3 ways to stop forEach in JavaScript — Interviewer:
                Can you stop a forEach loop in JavaScript? This is a question I
                was once asked during an interview, and my initial response was,
                “No, I cant do that.”
              </div>
            </a>
            <footer className="hidden md:flex justify-between items-center mt-5 text-sm">
              <div className="flex gap-4 justify-center items-center">
                <a href="/" className="px-2 py-1 bg-gray-200 rounded-full">
                  Front End Development
                </a>
                <a href="/">
                  5 min read
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                <a href="/" aria-label="compartir" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
                  <svg className="icon icon-tabler icon-tabler-share-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
                  </svg>
                </a>
                <a href="/" aria-label="guardar" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
                  <svg className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
          <div className="flex justify-center items-center col-span-2">
            <a href="/">
              <Image
                width={120}
                height={120}
                src="/images/cardExample.jpg"
                alt="Card Example"
              />
            </a>
          </div>
        </div>
        <footer className="flex md:hidden justify-between items-center mt-5 text-sm flex-wrap gap-x-2 gap-y-2">
          <div className="flex gap-4 justify-start items-center flex-wrap">
            <a href="/" className="px-2 py-1 bg-gray-200 rounded-full">
              Front End Development
            </a>
            <a href="/" className="ml-2">
              5 min read
            </a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <a href="/" aria-label="compartir" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
              <svg className="icon icon-tabler icon-tabler-share-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
              </svg>
            </a>
            <a href="/" aria-label="guardar" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
              <svg className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
            </a>
          </div>
        </footer>
      </article>
      <Divider />
    </>

  );
}
