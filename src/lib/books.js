export const getBooks = async () => {
  const res = await fetch("https://book-loop-tawny.vercel.app/books.json");
  const data = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch("https://book-loop-tawny.vercel.app/category.json");
  const data = await res.json();
  return data;
};