import BooksSection from "@/components/ui/BooksSection";
import { getBooksByCategoryId, getCategories, getAllBooks } from "@/lib/books";

const CategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const books = await getBooksByCategoryId(id);
    const allBooks = await getAllBooks();
    const categoriesWithAll = [
        { id: 0, name: "All" },
        ...categories,
    ];

    return (
        <div className="container mx-auto my-10 px-4">
            <BooksSection
                books={books}
                allBooks={allBooks}
                categories={categoriesWithAll}
                activeId={id}
            />
        </div>
    );
};

export default CategoryPage;