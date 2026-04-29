import { getAllBooks } from "@/lib/books";
import { FaBookOpen, FaGift, FaStar, FaRocket } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const MarqueeBar= async()=> {
    const books = await getAllBooks();

    const bookItems = books.slice(0, 5).map((book, index) => (
        <span key={`book-${book.id}`} className="inline-flex items-center gap-2">
            <FaBookOpen className="text-blue-600" />
            New Arrivals: <b>{book.title}</b> by {book.author}
        </span>
    ));

    const extras = [
        <span key="extra-1" className="inline-flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            Special Discount on Memberships
        </span>,
        <span key="extra-2" className="inline-flex items-center gap-2">
            <FaGift className="text-pink-500" />
            Free Borrowing for New Members
        </span>,
        <span key="extra-3" className="inline-flex items-center gap-2">
            <FaRocket className="text-purple-500" />
            Unlimited Borrows This Month
        </span>,
        <span key="extra-4" className="inline-flex items-center gap-2">
            <FaBookOpen className="text-green-500" />
            Explore 100+ Titles Today
        </span>,
    ];

    const items = [...bookItems, ...extras];

    return (
        <div className="bg-[#e2c97e] text-[#0B1120] py-2">
            <Marquee pauseOnHover={true}>
                {items.map((item, i) => (
                    <span key={i} className="mx-8">
                        {item} ·
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
export default MarqueeBar;