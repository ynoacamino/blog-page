/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import Link from 'next/link';
import Divider from '../utils/Divider';
import formatDate from '@/utils/formatDate';

export default function Card({
  title, author, description, type, image, pdf, path, content, date,
}) {
  return (
    <>
      <article className="flex flex-col py-8">
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3 justify-between items-center">
          <div className="flex flex-col gap-4 w-full max-w-4xl">
            <header className="flex gap-2 text-sm flex-wrap">
              <Image
                width={20}
                height={20}
                src="/images/userExample.jpg"
                alt="User Example"
                className="rounded-full"
              />
              <span>
                {author}
              </span>
              <span className="">·</span>
              <span>
                {formatDate(date)}
              </span>
            </header>
            <Link href={`/publicaciones/${type}/${path}`}>
              <h1 className="font-black text-2xl">
                {title}
              </h1>
              <p>
                {`${description.substring(0, 300)} ...`}
              </p>
            </Link>
            <footer className="hidden md:flex justify-between items-center mt-5 text-sm">
              <div className="flex gap-4 justify-center items-center">
                <Link href={`/publicaciones/${type}`} className="px-2 py-1 bg-gray-200 rounded-full">
                  {type}
                </Link>
                <Link href={`/publicaciones/${type}/${path}`}>
                  {Math.ceil(content.length / 550)}
                  {' '}
                  min
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://blog-page-rust.vercel.app/publicaciones/${type}/${path}/&src=sdkpreparse`} aria-label="compartir" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
                  <svg className="icon icon-tabler icon-tabler-share-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
                  </svg>
                </Link>
                <Link href={pdf} aria-label="guardar" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
                  <svg className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                </Link>
              </div>
            </footer>
          </div>
          <div className="flex justify-center items-center">
            <Link href={`/publicaciones/${type}/${path}`}>
              <Image
                width={250}
                height={250}
                src={image}
                alt={title}
              />
            </Link>
          </div>
        </div>
        <footer className="flex md:hidden justify-between items-center mt-5 text-sm flex-wrap gap-x-2 gap-y-2">
          <div className="flex gap-4 justify-start items-center flex-wrap">
            <Link href={`/${type}`} className="px-2 py-1 bg-gray-200 rounded-full">
              {type}
            </Link>
            <Link href={`/publicaciones/${type}/${path}`} className="ml-2">
              {Math.ceil(content.length / 550)}
              {' '}
              min
            </Link>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link href={`/publicaciones/${type}/${path}`} aria-label="compartir" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
              <svg className="icon icon-tabler icon-tabler-share-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
              </svg>
            </Link>
            <Link href={pdf} aria-label="guardar" className="p-1 text-[#94979b] hover:text-[#4e4f52]">
              <svg className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
            </Link>
          </div>
        </footer>
      </article>
      <Divider />
    </>

  );
}
