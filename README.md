API_URL="https://api.themoviedb.org/3/movie/popular?api_key=8fd9104bfdd163dd0406d6f990f34d57"
API_IMG="https://image.tmdb.org/t/p/w500/"
API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=8fd9104bfdd163dd0406d6f990f34d57&query"

const url = 'https://api.themoviedb.org/3/account/20425194/rated/movies?l';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmQ5MTA0YmZkZDE2M2RkMDQwNmQ2Zjk5MGYzNGQ1NyIsInN1YiI6IjY0ZmYxNGU2ZGI0ZWQ2MTAzMmE2Y2FiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aypjaKbIlGNGAcyKe0e4e8kpWCswCn3i_TDeyozr18Y'
  }
};

fetch(url, options)