import React, { useState } from 'react';

const NavLink = ({ href = '#', children }) => (
    <a
        href={href}
        className="text-sm font-medium text-gray-200 hover:bg-gray-800 px-3 py-2 rounded-md transition duration-200"
    >
        {children}
    </a>
);

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [query, setQuery] = useState('');

    return (
        <header className="sticky top-0 z-40 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                            <div className="w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center text-gray-900 font-bold">M</div>
                            <span className="sr-only">MovieApp home</span>
                            <h1 className="text-2xl font-bold text-white">MovieApp</h1>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center ml-6 space-x-1">
                            <NavLink href="#">Home</NavLink>
                            <NavLink href="#">Movies</NavLink>
                            <NavLink href="#">Genres</NavLink>
                            <NavLink href="#">Favorites</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="hidden sm:flex items-center bg-gray-800 rounded-md px-2 py-1">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.5 4.5a7.5 7.5 0 015.15 12.15z" />
                            </svg>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search movies..."
                                className="bg-transparent outline-none text-sm text-gray-100 placeholder-gray-400 ml-2"
                                aria-label="Search movies"
                            />
                        </div>

                        {/* CTA */}
                        <a
                            href="#"
                            className="hidden sm:inline-block bg-yellow-400 text-gray-900 px-3 py-2 rounded-md font-semibold hover:brightness-95 transition"
                        >
                            Add Movie
                        </a>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileOpen((s) => !s)}
                                aria-expanded={mobileOpen}
                                aria-label="Toggle menu"
                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                            >
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    {mobileOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden mt-2 pb-4 border-t border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                            <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800">Home</a>
                            <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800">Movies</a>
                            <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800">Genres</a>
                            <a href="#" className="px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800">Favorites</a>

                            <div className="mt-2 px-3">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search movies..."
                                    className="w-full bg-gray-800 text-gray-100 placeholder-gray-400 px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;