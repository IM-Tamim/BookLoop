import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    const { id, title, author, category, available_quantity, image_url } = book;

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
                <Image
                    src={image_url}
                    alt={title}
                    width={200}
                    height={280}
                    className="rounded-lg object-cover h-52 w-full"
                />
            </figure>
            <div className="card-body gap-2">
                <span className="badge badge-primary badge-outline text-xs w-fit">{category}</span>
                <h2 className="card-title text-base line-clamp-1">{title}</h2>
                <p className="text-sm opacity-60">by {author}</p>
                <p className="text-sm">
                    <span className={`font-semibold ${available_quantity === 0 ? "text-error" : "text-success"}`}>
                        {available_quantity > 0 ? `${available_quantity} copies available` : "Unavailable"}
                    </span>
                </p>
                <div className="card-actions mt-2">
                    <Link href={`/all-books/${id}`} className="btn btn-primary btn-sm w-full">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;