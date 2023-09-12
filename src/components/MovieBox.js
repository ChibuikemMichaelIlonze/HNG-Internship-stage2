import React from "react";
import Link from "next/link";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieBox = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <Link href={`/movies/${id}`}>
      <div data-testid="movie-card" className="w-60 bg-white p-2 pb-4 mb-14 gap-24">
        <img
          data-testid="movie-poster"
          src={API_IMG + poster_path}
          alt=""
          className="w-56 h-76 object-cover"
        />
        <h1
          data-testid="movie-title"
          className="text-sm font-bold text-black text-left my-3"
        >
          {title}
        </h1>
        <p
          data-testid="movie-release-date"
          className="text-sm text-black opacity-80 text-left"
        >
          Released on: {release_date}
        </p>
      </div>
    </Link>
  );
};

export default MovieBox;
