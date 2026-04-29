import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="text-center h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-7xl font-bold">404</h1>
      <h2>Page Not Found</h2>
      <Link href={"./"}>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
