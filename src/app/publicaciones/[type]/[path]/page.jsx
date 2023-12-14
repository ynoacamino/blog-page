/* eslint-disable react/no-danger */
import Image from 'next/image';
import dbConnect from '@/db/dbConnect';
import Article from '@/db/models/Article';
import Card from '@/app/components/Home/Card';

export async function generateStaticParams() {
  await dbConnect();
  const articles = await Article.find({}).sort({ date: -1 });

  return articles.map((post) => ({
    path: post.path,
    type: post.type,
  }));
}

const getData = async (type, path) => {
  dbConnect();
  let data;
  let articles;
  try {
    data = await Article.findOne({ path });
    articles = await Article.find({ type: decodeURIComponent(type) }).sort({ date: -1 }).limit(3);
    return { data, articles };
  } catch (error) {
    console.log(error);
    return { data: {}, articles: [] };
  }
};

export default async function Page({ params }) {
  const { data, articles } = await getData(params.type, params.path);

  if (!data) return <h1>Articulo no encontrado</h1>;
  return (
    <article className="w-full flex flex-col items-center gap-10">
      <header className="w-full max-w-4xl">
        <h1 className="font-bold text-5xl">
          {data.title}
        </h1>
      </header>
      <Image
        height={1152}
        width={1152}
        className="w-full"
        src={data.image}
        alt=""
      />
      <main className="w-full max-w-4xl text-xl leading-9" dangerouslySetInnerHTML={{ __html: data.content }} />
      <footer className="flex flex-col w-full max-w-4xl">
        <span className="text-3xl">
          Articulos relacionados
        </span>
        {
          articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              author={article.author}
              description={article.description}
              content={article.content}
              type={article.type}
              image={article.image}
              path={article.path}
              pdf={article.pdf}
              date={article.date}
            />
          ))
        }
      </footer>
    </article>
  );
}
