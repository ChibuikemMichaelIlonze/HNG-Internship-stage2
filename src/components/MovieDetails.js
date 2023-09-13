import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
 
  BsArrowLeftShort,
 
} from "react-icons/bs";
import Link from "next/link";

const API_KEY = "8fd9104bfdd163dd0406d6f990f34d57";
const API_URL = "https://api.themoviedb.org/3/movie/";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}${id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setMovieDetails(data);
        });
    }
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  const { title, release_date, runtime, overview, poster_path } = movieDetails;

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full h-screen absolute top-0 left-0"
      style={backgroundImageStyle}
    >
      <Link href="/">
        {" "}
        <BsArrowLeftShort className="absolute top-[40%]  -left-5 sm:left-0 z-50 w-24 h-24 animate-pulse fill-white " />
      </Link>

      <div className="w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center py-20 px-20 sm:px-32 md:px-40 lg:px-64 text-center gap-5 sm:gap-10 md:gap-14 text-zinc-400">
        <h1 data-testid="movie-title" className="text-5xl ">
          {title}
        </h1>
        <p data-testid="movie-overview" className="text-lg text-zinc-400 sm:text-xl  ">
          {overview}
        </p>
        <p data-testid="movie-runtime" className="text-lg sm:text-xl ">
          Runtime:{" "}
          <span className="font-bold text-zinc-200 ">{runtime} minutes</span>
        </p>
        <p data-testid="movie-release-date" className="text-lg sm:text-xl ">
          Release Date:{" "}
          <span className="font-bold text-zinc-200">{release_date}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
