"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiBookOpen } from "react-icons/fi";
import { toast } from "react-toastify";

const BookDetail = ({ book }) => {
    const { title, author, description, category, available_quantity, image_url } = book;

    const handleBorrow = () => {
        toast.success("Book borrowed successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-10 max-w-6xl">
                <Link
                    href="/all-books"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8"
                >
                    <FiArrowLeft size={16} />
                    Back to Books
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-0">

                        <div className="md:w-96 shrink-0 bg-slate-100 flex items-center justify-center p-12">
                            <div className="relative w-56 h-80 shadow-xl rounded-lg overflow-hidden">
                                <Image
                                    src={image_url}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 p-10 flex flex-col justify-between">
                            <div>
                                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-5">
                                    {category}
                                </span>

                                <h1 className="text-4xl font-bold text-slate-800 leading-tight mb-3">
                                    {title}
                                </h1>
                                <p className="text-slate-500 text-base mb-7">
                                    by <span className="font-medium text-slate-700">{author}</span>
                                </p>

                                <p className="text-slate-600 text-base leading-relaxed mb-9">
                                    {description}
                                </p>

                                <div className="flex items-center gap-2 mb-9">
                                    <FiBookOpen size={17} className="text-slate-400" />
                                    <span className="text-sm text-slate-500">
                                        {available_quantity > 0 ? (
                                            <>
                                                <span className="font-semibold text-green-600">
                                                    {available_quantity} {available_quantity === 1 ? "copy" : "copies"}
                                                </span>{" "}
                                                available
                                            </>
                                        ) : (
                                            <span className="font-semibold text-red-500">Out of stock</span>
                                        )}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={handleBorrow}
                                disabled={available_quantity === 0}
                                className="self-start bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
                            >
                                Borrow This Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;