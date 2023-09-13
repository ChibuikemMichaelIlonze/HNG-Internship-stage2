import React, { useState } from "react";
import Link from "next/link";
import { BsMoonFill, BsSearch, BsSunFill } from "react-icons/bs";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=8fd9104bfdd163dd0406d6f990f34d57&query";

const NavBar = ({ setMovies, mode, setMode }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = `${API_SEARCH}=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={`fixed w-full h-30 md:h-10 px-2 sm:px-10 md:px-16 lg:px-28 py-4 md:py-8 flex flex-col md:flex-row justify-between items-center md:gap-5 gap-2 ${
        mode ? "bg-zinc-950 text-white" : "bg-zinc-800 text-white"
      }`}
    >
      {isLoading && (
        <div className="fixedOne fixed top-0 left-0 h-1 z-50 bg-white"></div>
      )}
      <div className="flex flex-1 justify-between gap-12  items-center">
        <Link href="/home">
          <h1 className="text-3xl font-bold">MovieHunt</h1>
        </Link>
        {mode ? (
          <BsSunFill
            className={`h-7 w-7 cursor-pointer hover:animate-pulse  origin-center 
            fill-white duration-700 ease-linear
            `}
            onClick={() => handleMode()}
          />
        ) : (
          <BsMoonFill
            className={`h-7 w-7 cursor-pointer hover:animate-pulse   origin-center 
            
            fill-zinc-500 duration-700 ease-linear
            `}
            onClick={() => handleMode()}
          />
        )}
      </div>
      <form onSubmit={searchMovie} className="relative">
        <input
          name="query"
          value={query}
          onChange={changeHandler}
          type="text"
          placeholder="What do you want to view?"
          className={`h-10  pl-4 pr-10 block border-2 rounded-lg focus:outline-none ${
            mode
              ? "text-white bg-zinc-900 border-zinc-500 duration-700 ease-linear"
              : "text-black bg-zinc-300 border-zinc-700 placeholder:text-zinc-500 duration-700 ease-linear"
          }`}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 py-2 flex items-center rounded-r-lg focus:outline-none"
        >
          <BsSearch
            className={`w-5 h-5 hover:w-7 hover:h-7 duration-200 ${
              mode
                ? "fill-white duration-700 ease-linear"
                : "fill-zinc-700 duration-700 ease-linear"
            }`}
          />
        </button>
      </form>
    </div>
  );
};

export default NavBar;
