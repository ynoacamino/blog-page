import Title from './components/Home/Title';
import Card from './components/Home/Card';
import Aside from './components/Home/Aside';

export default function Page() {
  return (
    <div className="grid grid-cols-8 min-h-screen">
      <div className="col-span-8 lg:col-span-6 w-full px-6">
        <Title />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Aside />
    </div>
  );
}
