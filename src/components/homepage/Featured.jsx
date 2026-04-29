import { getBooks } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Featured = async () => {
    const books = await getBooks();
    const featured = books.sort((a, b) => b.popularity - a.popularity).slice(0, 4);

    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Featured Books</h2>
                <p className="text-base-content/60 mt-2">Hand-picked titles just for you</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featured.map((book) => (
                    <div key={book.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <figure className="px-4 pt-4">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                width={200}
                                height={280}
                                className="rounded-lg object-cover h-52 w-full"
                            />
                        </figure>
                        <div className="card-body gap-2">
                            <span className="badge badge-primary badge-outline text-xs w-fit">{book.category}</span>
                            <h2 className="card-title text-base line-clamp-1">{book.title}</h2>
                            <p className="text-sm opacity-60">by {book.author}</p>
                            <div className="card-actions mt-2">
                                <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm w-full">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link href="/all-books" className="btn btn-outline btn-primary ">
                    <span className="flex items-center justify-center gap-2">Browse All Books <FaArrowRightFromBracket /></span>
                </Link>
            </div>
        </section>
    );
}

export default Featured;