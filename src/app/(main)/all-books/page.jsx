'use client';
import { useState, useEffect } from "react";
import BookCard from "@/components/ui/BookCard";

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [booksRes, categoriesRes] = await Promise.all([
                fetch("https://book-loop-tawny.vercel.app/books.json"),
                fetch("https://book-loop-tawny.vercel.app/category.json"),
            ]);
            const booksData = await booksRes.json();
            const categoriesData = await categoriesRes.json();
            setBooks(booksData);
            setCategories(categoriesData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search books by title..."
                    className="input input-bordered w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Category Sidebar */}
                <aside className="lg:w-56 w-full shrink-0">
                    <div className="bg-base-100 shadow rounded-xl p-4">
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <ul className="flex flex-row lg:flex-col gap-2 flex-wrap">
                            <li>
                                <button
                                    onClick={() => setSelectedCategory("All")}
                                    className={`btn btn-sm w-full justify-start ${selectedCategory === "All" ? "btn-primary" : "btn-ghost"}`}
                                >
                                    All
                                </button>
                            </li>
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`btn btn-sm w-full justify-start ${selectedCategory === cat.name ? "btn-primary" : "btn-ghost"}`}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Books Grid */}
                <div className="flex-1">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <span className="loading loading-spinner loading-lg text-primary"></span>
                        </div>
                    ) : filteredBooks.length === 0 ? (
                        <div className="text-center opacity-50 mt-20">
                            <p className="text-xl">No books found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default AllBooksPage;