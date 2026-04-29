"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AllBooksPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/category/0");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default AllBooksPage;