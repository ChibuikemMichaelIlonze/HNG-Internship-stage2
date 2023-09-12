import React, { useState } from "react";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=8fd9104bfdd163dd0406d6f990f34d57&query";

const NavBar = ({
  setMovies,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `${API_SEARCH}=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {}
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="fixed w-full h-20 bg-zinc-950 bg-opacity-70 px-20 py-10 flex justify-between items-center gap-10">
      <h1>MovieHunt</h1>
      <form onSubmit={searchMovie} className="relative">
        <input
          name="query"
          value={query}
          onChange={changeHandler}
          type="text"
          placeholder="What do you want to view?"
          className="w-auto h-10 pl-4 pr-10 text-black bg-zinc-900 border-2 border-zinc-500 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 py-2 flex items-center rounded-r-lg focus:outline-none"
        >
          <img
            src="/Images/Search.svg"
            alt=""
            className="w-6 h-6 hover:w-7 hover:h-7 duration-200"
          />
        </button>
      </form>
      <p className="hidden md:flex">Option</p>
    </div>
  );
};

export default NavBar;
