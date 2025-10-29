import React, { useEffect, useState } from 'react'
import api from '../api';
import Card from '../components/Card';

function Home() {
    const [movieData, setMovieData] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    // `search` is the value used to trigger fetches. `inputValue` mirrors the input immediately.
    const [search, setSearch] = useState('the avatar');
    const [inputValue, setInputValue] = useState(search);
    const [Error, setError] = useState(null);

    const fetchMovies = async () => {
        try {
            const data = await api.getMovieData({ s: search, page });
            // normalize and set results
            const movies = data?.Search ?? [];
            const uniqueMovies = Array.from(new Map(movies.map(m => [m.imdbID, m])).values());
            setMovieData(uniqueMovies);
            const totalResults = parseInt(data?.totalResults || '0', 10);
            setTotalPages(Math.ceil(totalResults / 10));
            if (data?.Response === 'False') {
                setError(data?.Error || 'Unknown error occurred');
            } else {
                setError(null);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Failed to fetch movies');
            setMovieData([]);
        }
    };

    // Debounce inputValue -> search using useEffect and a timeout
    useEffect(() => {
        const handle = setTimeout(() => {
            // only update search (which triggers fetch) if value actually changed
            setPage(1); // reset page when search changes
            setSearch(inputValue);
        }, 500); // 500ms debounce

        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    // Fetch when `search` or `page` changes
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, page]);

    const handleSearchClick = () => {
        // immediate search from current input
        setPage(1);
        setSearch(inputValue);
    };

    return (
        <>
            <h1 className="text-3xl font-bold underline">Home Page</h1>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Search for a movie..."
                className="mt-4 p-2 border border-gray-300 rounded"
            />
            <button onClick={handleSearchClick} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Error && <p className="text-red-500">{Error}</p>}
                {movieData && movieData.length > 0 ? (
                    <>
                        {movieData.map(movie => (
                            <Card key={movie.imdbID} movie={movie} />
                        ))}
                    </>
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2">
                <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                {totalPages ? (
                    <>
                        {page > 1 && (
                            <button
                                onClick={() => setPage(page - 1)}
                                className="px-3 py-1 rounded bg-gray-200"
                            >
                                {page - 1}
                            </button>
                        )}
                        <button
                            onClick={() => { setPage(page) }}
                            className="px-3 py-1 rounded bg-yellow-400 text-gray-900 font-semibold"
                        >
                            {page}
                        </button>
                        {totalPages > page && (
                            <button
                                onClick={() => setPage(page + 1)}
                                className="px-3 py-1 rounded bg-gray-200"
                            >
                                {page + 1}
                            </button>
                        )}
                    </>
                ) : (
                    <span className="px-3 py-1">Loading...</span>
                )}

                <button
                    onClick={() => setPage(p => (totalPages ? Math.min(totalPages, p + 1) : p + 1))}
                    disabled={totalPages ? page >= totalPages : false}
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Home