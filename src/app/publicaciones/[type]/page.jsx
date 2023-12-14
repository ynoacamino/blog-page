import dbConnect from '@/db/dbConnect';
import Article from '@/db/models/Article';
import Card from '@/app/components/Home/Card';

export async function generateStaticParams() {
  await dbConnect();
  const articles = await Article.find({}).sort({ date: -1 });

  return articles.map((post) => ({
    type: post.type,
  }));
}

const getData = async (type) => {
  dbConnect();
  let data;

  try {
    data = await Article.find({ type: decodeURIComponent(type) }).sort({ date: -1 });
  } catch (error) {
    console.log(error);
    return [];
  }

  return data;
};

export default async function Page({ params }) {
  const data = await getData(params.type);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center ">
        <span>
          Descrube articulos sobre
        </span>
        {' '}
        <span>
          {decodeURIComponent(params.type)}
        </span>
      </h1>
      <div className="flex flex-col max-w-4xl">
        {
            data.map((article) => (
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
      </div>
    </div>
  );
}
