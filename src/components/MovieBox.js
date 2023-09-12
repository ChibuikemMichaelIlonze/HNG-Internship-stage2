import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieBox = ({ mode, id, title, poster_path, release_date }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Link href={`/movies/${id}`}>
      <div
        data-testid="movie-card"
        className={`w-36 sm:w-44 md:w-52 lg:w-60 p-2 pb-4 mb-14 ${
          mode ? "bg-white text-black" : "bg-zinc-700 text-white"
        }`}
      >
        {isLoading ? (
          <div className="h-80 flex justify-start items-end text-lg text-black">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <img
              data-testid="movie-poster"
              src={API_IMG + poster_path}
              alt=""
              className="object-cover"
            />
            <h1
              data-testid="movie-title"
              className="text-sm font-bold text-left my-3"
            >
              {title}
            </h1>
            <p data-testid="movie-release-date" className="text-sm text-left">
              Released on: {release_date}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default MovieBox;
