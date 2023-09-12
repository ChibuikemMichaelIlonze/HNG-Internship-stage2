Movie Discovery Web Application
This is a Movie Discovery web application that allows users to search for movies, view movie details, and explore top rated movies. The application fetches movie data from the TMDb API and provides a user-friendly interface for movie enthusiasts.

Features
Homepage: Displays the top 10 movies in a grid layout with movie posters, titles, and release dates.

Movie Search: Allows users to search for movies by title. Displays search results with movie posters, titles, and release dates.

Movie Details: Provides detailed information about a movie when the user navigates to /movies/:id. Shows the movie title, release date, runtime, and overview.

API Integration: Fetches movie data from the TMDb API using appropriate endpoints.

Error Handling: Implements error handling to display user-friendly error messages in case of API failures or other issues.

Responsive Design: Provides a visually appealing and responsive user interface based on the provided Figma design.

Getting Started
Prerequisites
Node.js installed on your development machine.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/movie-discovery-app.git
Navigate to the project directory:

bash
Copy code
cd movie-discovery-app
Install the required dependencies:

bash
Copy code
npm install
Usage
To run the project locally, use the following command:

bash
Copy code
npm start
This will start the development server, and you can access the web app in your browser at http://localhost:3000.

Project Structure
/components: Contains React components used in the application, such as MovieBox, NavBar, Footer, and Hero.

/pages: Defines the routes and pages of the application, including index.js (homepage) and movies/[id].js (movie details).

/styles: Contains CSS and Tailwind CSS configurations for styling the app.

/public: Stores static assets, such as images.

API Integration
This application consumes movie data from the TMDb API. The API key is stored in the code for demonstration purposes, but in a production environment, it should be securely managed.

Error Handling
The application handles API errors and displays user-friendly error messages when necessary.

Hosting
The application can be hosted on various platforms, such as GitHub Pages, Netlify, or Vercel. Make sure to configure the hosting settings accordingly.

Contributing
Contributions to this project are welcome. You can contribute by reporting issues, suggesting improvements, or submitting pull requests. Please follow our contributing guidelines for more details.

License
This project is licensed under the MIT License.