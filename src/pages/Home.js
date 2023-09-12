import React, { useState, useEffect } from "react";
import MovieBox from "@/components/MovieBox";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Hero = () => {
  const API_URL =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=8fd9104bfdd163dd0406d6f990f34d57";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // Set loading to true when starting the fetch
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 10));
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  return (
    <div className="min-h-screen px-20 flex flex-col items-center bg-zinc-900 text-white">
      <NavBar setMovies={setMovies} setLoading={setLoading} />
      <h1 className="mt-28 mb-10 text-2xl font-bold">Featured Movies</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        ) : (
          <div>
            <h1>Oops... Searched Item does not exist at the moment.</h1>
            <p>
              <Link href="/">Return Home</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
