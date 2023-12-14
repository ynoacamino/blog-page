import Title from './components/Home/Title';
import Card from './components/Home/Card';
import Aside from './components/Home/Aside';
import dbConnect from '@/db/dbConnect';
import Article from '@/db/models/Article';

const getData = async () => {
  await dbConnect();
  let data;

  try {
    data = await Article.find({}).sort({ date: -1 });
  } catch (error) {
    console.log(error);
    return { types: [], data: [], lastArticle: null };
  }

  const types = [];
  data.forEach((article) => {
    if (!types.includes(article.type)) {
      types.push(article.type);
    }
  });

  const lastArticle = data.length !== 0 ? data[0] : null;
  return { types, data, lastArticle };
};

export default async function Page() {
  const { types, data, lastArticle } = await getData();
  return (
    <div className="grid grid-cols-8 min-h-screen">
      <div className="col-span-8 lg:col-span-6 w-full px-6">
        <Title>
          BLOG
        </Title>
        <div className="flex flex-col">
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
      <Aside types={types} lastArticle={lastArticle} />
    </div>
  );
}
