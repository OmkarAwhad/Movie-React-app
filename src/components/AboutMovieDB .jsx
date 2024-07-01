import React from 'react';
import { useNavigate } from 'react-router-dom'


function AboutMovieDB() {

     const navigate = useNavigate()

     return (
          <div className="max-w-4xl h-[100vh] mx-auto p-5">
               <i onClick={()=>navigate(-1)} className=" absolute left-10 top-6 font-black hover:text-[#6556CD] duration-150 cursor-pointer text-2xl ri-arrow-left-line"></i>
               <h1 className="text-4xl font-bold mb-5">About MovieDB</h1>
               <p className="mb-4 text-lg">
                    Welcome to MovieDB, your ultimate movie search database application! Whether you are a movie enthusiast or just looking for something to watch, MovieDB is here to help you explore a vast collection of movies, find detailed information, and discover new favorites.
               </p>
               <h2 className="text-2xl font-bold mb-3">Our Purpose</h2>
               <p className="mb-4 text-lg">
                    MovieDB aims to provide an easy-to-use platform where users can search for movies, view details such as cast, plot, and ratings, and keep track of their favorite films. Our mission is to make movie discovery and information access seamless and enjoyable for everyone.
               </p>
               <h2 className="text-2xl font-bold mb-3">Features</h2>
               <ul className="list-disc list-inside mb-4 text-lg">
                    <li>Search for movies by title, genre, or year.</li>
                    <li>View detailed information about each movie, including cast, plot, and ratings.</li>
                    <li>Browse popular, top-rated, and upcoming movies.</li>
                    <li>Create and manage a list of your favorite movies.</li>
               </ul>
               <h2 className="text-2xl font-bold mb-3">How to Use</h2>
               <p className="mb-4 text-lg">
                    Using MovieDB is simple and intuitive. Just type the name of the movie you are looking for into the search bar, and our powerful search engine will provide you with relevant results. Click on a movie to view its detailed information. You can also browse different categories to discover new movies.
               </p>
               <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
               <p className="mb-4 text-lg">
                    If you have any questions, feedback, or suggestions, feel free to reach out to us. We are always looking for ways to improve MovieDB and provide a better experience for our users.
               </p>
          </div>
     );
}

export default AboutMovieDB;
