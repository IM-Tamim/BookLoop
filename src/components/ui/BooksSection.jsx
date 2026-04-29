"use client";

import { useState } from "react";
import BookCard from "@/components/ui/BookCard";
import SearchBook from "@/components/ui/SearchBook";
import LeftSideBar from "@/components/ui/LeftSideBar";

const BooksSection = ({ books, allBooks, categories, activeId }) => {
    const [filteredBooks, setFilteredBooks] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (results) => {
        setFilteredBooks(results);
        setIsSearching(true);
    };

    const displayBooks = isSearching ? filteredBooks : books;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            <div className="font-bold text-2xl col-span-1">
                <LeftSideBar
                    categories={categories}
                    activeId={isSearching ? null : activeId}
                />
            </div>

            <div className="col-span-1 sm:col-span-3 text-center">
                <div className="flex justify-center mb-6">
                    <SearchBook allBooks={allBooks} onSearch={handleSearch} />
                </div>
                <h2 className="font-bold text-2xl mb-4">
                    {isSearching ? `Search Results (${displayBooks.length})` : "All Books"}
                </h2>
                {isSearching && (
                    <button
                        onClick={() => { setIsSearching(false); setFilteredBooks(null); }}
                        className="text-sm text-blue-500 hover:underline mb-4 block mx-auto"
                    >
                        Clear search
                    </button>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BooksSection;