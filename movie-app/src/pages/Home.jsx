import React, { useEffect } from 'react'
import api from '../api';
import Card from '../components/Card';

function Home() {
    const [movieData, setMovieData] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    useEffect(() => {
    api.getMovieData({s: "batman", page}).then(data => {
        console.log("movie data", data);
        setMovieData(data?.Search);
        const movies = data?.Search ?? [];
        const uniqueMovies = Array.from(new Map(movies.map(m => [m.imdbID, m])).values());
        setMovieData(uniqueMovies);
        const totalResults = parseInt(data?.totalResults || "0", 10);
        setTotalPages(Math.ceil(totalResults / 10));
    });
  }, [page])
  return (
    <>
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
                            {
                                page > 1 && (
                                    <button
                                        onClick={() => setPage(page - 1)}
                                        className="px-3 py-1 rounded bg-gray-200"
                                    >
                                        {page - 1}
                                    </button>
                                )
                            }
                            <button
                                onClick={() => {setPage(page)}}
                                className="px-3 py-1 rounded bg-yellow-400 text-gray-900 font-semibold"
                            >
                                {page}
                            </button>
                            {
                                totalPages > page && (
                                    <button
                                        onClick={() => setPage(page + 1)}
                                        className="px-3 py-1 rounded bg-gray-200"
                                    >
                                        {page + 1}
                                    </button>
                                )
                            }
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