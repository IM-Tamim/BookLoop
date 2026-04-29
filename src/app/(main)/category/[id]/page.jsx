import BookCard from "@/components/ui/BookCard";
import LeftSideBar from "@/components/ui/LeftSideBar";
import { getBooksByCategoryId, getCategories } from "@/lib/books";

const CategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const books = await getBooksByCategoryId(id);
    const categoriesWithAll = [
        { id: 0, name: "All" },
        ...categories,
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 container mx-auto gap-5 my-10">

            <div className="font-bold text-2xl col-span-1">
                <LeftSideBar categories={categoriesWithAll} activeId={id} />
            </div>

            <div className="font-bold text-2xl col-span-1 sm:col-span-3 text-center">
                <h2>All Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CategoryPage;