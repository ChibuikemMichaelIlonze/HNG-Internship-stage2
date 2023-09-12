import React, { useState, useEffect } from "react";
import MovieBox from "@/components/MovieBox";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Hero = ({ mode, setMode }) => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8fd9104bfdd163dd0406d6f990f34d57";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    <div
      className={`min-h-screen px-2 sm:px-10 md:px-16 lg:px-28 flex flex-col items-center ${
        mode ? "bg-zinc-900 text-white" : "bg-zinc-200 text-black"
      }`}
    >
      <NavBar setMovies={setMovies} mode={mode} setMode={setMode} />
      <h1 className="mt-52 md:mt-28 mb-10 text-2xl font-bold">Top Rated Movies</h1>
      <div className="flex-1">
        {loading ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} mode={mode} />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-xl px-10 text-center">
              Oops... Searched Item does not exist at the moment.
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
