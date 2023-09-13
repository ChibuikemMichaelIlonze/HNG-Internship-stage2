import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
      <div className="w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-start py-20 px-20 sm:px-32 md:px-40 lg:px-56 text-center gap-5 text-zinc-400">
        <h1 data-testid="movie-title" className="text-6xl">
          {title}
        </h1>
        <p data-testid="movie-overview" className="text-md text-zinc-200">
          {overview}
        </p>
        <p data-testid="movie-runtime" className="text-md">
          Runtime: <span className="font-bold text-zinc-200">{runtime} minutes</span>
        </p>
        <p data-testid="movie-release-date" className="text-md">
          Release Date: <span className="font-bold text-zinc-200">{release_date}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
