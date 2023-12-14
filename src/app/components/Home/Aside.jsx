import Link from 'next/link';
import Image from 'next/image';
import Divider from '../utils/Divider';
import formatDate from '@/utils/formatDate';

export default function Aside({ types, lastArticle }) {
  return (
    <aside className="hidden lg:flex flex-col col-span-2 w-full border-solid border-l-1 border-[#dcdcdc] p-4 pl-8">
      <div className="my-6">
        <h2 className="text-lg font-semibold my-1">
          Categorias
        </h2>
        <ul className="ml-2 flex flex-col gap-1 text-[#5c5c5c]">
          {
            types.map((type) => (
              <li key={type}>
                <a href="/" className="hover:text-black">
                  {type}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <Divider />
      <div className="my-6 flex flex-col gap-3">
        <h2 className="text-lg font-semibold my-1">
          Ultimo post
        </h2>
        {
          lastArticle ? (
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
                  {lastArticle.author}
                </span>
                <span className="">·</span>
                <span>
                  {formatDate(lastArticle.date)}
                </span>
              </header>
              <div className="w-full flex justify-center items-center">
                <Link href={`/publicaciones/${lastArticle.type}/${lastArticle.path}`}>
                  <Image
                    height={200}
                    width={200}
                    src={lastArticle.image}
                    alt="Card Example"
                  />
                </Link>
              </div>
              <Link href={`/publicaciones/${lastArticle.type}/${lastArticle.path}`}>
                <h1 className="font-black text-lg">
                  {lastArticle.title}
                </h1>
              </Link>
              <footer className="flex justify-start items-center text-sm flex-wrap gap-y-1 gap-x-2">
                <Link href={`/categorias/${lastArticle.type}`} className="px-2 py-1 bg-gray-200 rounded-full">
                  {lastArticle.type}
                </Link>
                <Link href={`/publicaciones/${lastArticle.type}/${lastArticle.path}`}>
                  {Math.ceil(lastArticle.content.length / 550)}
                  {' '}
                  min
                </Link>
              </footer>
            </article>
          ) : (
            <p>No hay articulos</p>
          )
        }
      </div>
    </aside>
  );
}
