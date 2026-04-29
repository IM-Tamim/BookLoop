import BookDetail from "@/components/ui/BookDetail";
import { getBookById } from "@/lib/books";

const BookDetailPage = async ({ params }) => {
    const { id } = await params;
    const book = await getBookById(id);

    return <BookDetail book={book} />;
};

export default BookDetailPage;