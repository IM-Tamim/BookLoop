"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBook = ({ allBooks, onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;
        const filtered = allBooks.filter((book) =>
            book.title.toLowerCase().includes(trimmed.toLowerCase()) ||
            book.author.toLowerCase().includes(trimmed.toLowerCase())
        );
        onSearch(filtered, trimmed);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="flex items-center border border-slate-300 rounded-full bg-white px-4 py-2 shadow-sm w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search books..."
                className="flex-1 text-sm text-slate-700 bg-transparent outline-none placeholder:text-slate-400 font-normal"
            />
            <button onClick={handleSearch} className="text-slate-400 hover:text-blue-500 transition-colors ml-2">
                <FiSearch size={18} />
            </button>
        </div>
    );
};

export default SearchBook;