const JsonServer = "http://localhost:5000";

export const getCategories = async () => {
  const res = await fetch(`${JsonServer}/categories`);
  const data = await res.json();
  return data;
};

export const getBooksByCategoryId = async (categoryId) => {
  if (categoryId === "0") {
    const res = await fetch(`${JsonServer}/books`);
    return res.json();
  }
  const res = await fetch(`${JsonServer}/books?categoryId=${categoryId}`);
  return res.json();
};

export const getBookById = async (id) => {
  const res = await fetch(`${JsonServer}/books/${id}`);
  const data = await res.json();
  return data;
};

export const getAllBooks = async () => {
  const res = await fetch(`${JsonServer}/books`);
  const data = await res.json();
  return data;
};
