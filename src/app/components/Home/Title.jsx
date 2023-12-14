import Divider from '../utils/Divider';

export default function Title({ children }) {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center my-20">
        <span className="text-7xl sm:text-9xl font-extrabold">
          {children}
        </span>
      </div>
      <Divider />
    </>
  );
}
