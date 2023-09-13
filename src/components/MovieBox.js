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
        className={`
          h-[18rem] sm:h-[20rem] md:h-[22.5rem] lg:h-[24rem]
          w-36 sm:w-44 md:w-52 lg:w-60 p-2 flex flex-col mb-14 gap-2
          ${mode ? "bg-white text-black" : "bg-zinc-700 text-white"}
          duration-300 ease-in-out
        `}
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
              alt={title}
              className="object-cover h-[14rem] sm:h-[16.5rem] md:h-[18.5rem] lg:h-[20rem]"
            />
            <div className="flex flex-col flex-1">
              <h1
                data-testid="movie-title"
                className="text-sm font-bold text-left text-ellipsis whitespace-nowrap w-full overflow-hidden"
              >
                {title}
              </h1>
              <p data-testid="movie-release-date" className="text-sm text-left">
                <span className="inline-block opacity-80">{release_date}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default MovieBox;
