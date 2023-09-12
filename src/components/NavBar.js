import React, { useState } from "react";
import { BsHeart, BsSearch } from "react-icons/bs";

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
      className={`fixed w-full h-40 md:h-10 px-2 sm:px-10 md:px-16 lg:px-28 py-8 flex flex-col md:flex-row justify-between items-center gap-5 ${
        mode ? "bg-zinc-950 text-white" : "bg-zinc-800 text-white"
      }`}
    >
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-700 z-50">
          <div className="h-full w-0 bg-green-500 duration-300 ease-in-out"></div>
        </div>
      )}
      <div className="flex flex-1 justify-between gap-5 items-center">
        <h1 className="text-3xl font-bold">MovieHunt</h1>
        <BsHeart className={`h-7 w-7 cursor-pointer ${mode?"fill-zinc-500":"fill-white"}`} onClick={handleMode} />
      </div>
      <form onSubmit={searchMovie} className="relative">
        <input
          name="query"
          value={query}
          onChange={changeHandler}
          type="text"
          placeholder="What do you want to view?"
          className={`h-10 pl-4 pr-10 block border-2 rounded-lg focus:outline-none ${
            mode
              ? "text-white bg-zinc-900 border-zinc-500"
              : "text-black bg-zinc-300 border-zinc-700 placeholder:text-zinc-500"
          }`}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 py-2 flex items-center rounded-r-lg focus:outline-none"
        >
        <BsSearch  className={`w-5 h-5 hover:w-7 hover:h-7 duration-200 ${mode?"fill-white":"fill-zinc-700"}`}/>
        
        </button>
      </form>
    </div>
  );
};

export default NavBar;
