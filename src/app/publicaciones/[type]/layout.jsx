export default function Page({ children }) {
  return (
    <div className="flex flex-col my-10 sm:my-20 px-6">
      {children}
    </div>
  );
}
