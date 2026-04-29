import Image from "next/image";
import Link from "next/link";
import HeroBg from "@/assets/hero-bg.jpg"
import { getAllBooks } from "@/lib/books";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Banner = async () => {
    const books = await getAllBooks();
    const totalBooks = books.length;
    const categories = new Set(books.map((b) => b.category)).size;
    const stats = [
        { value: `${totalBooks}+`, label: "Books" },
        { value: `${categories}+`, label: "Categories" },
        { value: "Free", label: "Access" },
    ];
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">

            <Image
                src={HeroBg}
                alt="Hero Background"
                fill
                priority
                className="object-cover"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                <div className="flex justify-center lg:justify-end">
                    <div className="w-full lg:w-[60%] flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                        <p className="text-yellow-300 text-xl uppercase tracking-widest drop-shadow-md">
                            Digital Library
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                            Find Your{" "}
                            <span className="text-primary">Next Great</span>{" "}
                            Read
                        </h1>
                        <p className="text-white/80 max-w-md drop-shadow-md">
                            Borrow books from tech, science, and fiction — all in one place.
                        </p>
                        <Link href="/all-books" className="btn btn-info btn-outline rounded-full w-fit px-6">
                            <span className="flex items-center justify-center gap-2">Browse All Books <FaArrowRightFromBracket /></span>
                        </Link>
                        <div className="flex gap-8 mt-4 pt-4 border-t border-white/20 w-fit">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <p className="text-lg text-center font-bold text-white drop-shadow-md">
                                        {item.value}
                                    </p>
                                    <p className="text-xs text-white/70">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;