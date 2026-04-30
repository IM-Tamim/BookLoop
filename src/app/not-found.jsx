'use client'
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-7xl font-bold">404</h1>
      <h2>Page Not Found</h2>
      <button
        onClick={() => router.back()}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;