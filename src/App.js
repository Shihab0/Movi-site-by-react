import React from 'react';
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import { useState } from 'react';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=15fafd73';

const movie1 = {
    "Title": "Spider-Man 3",
    "Year": "2007",
    "imdbID": "tt0413300",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

   const searchMovie = async (title) => {
      const res = await fetch(`${API_URL}&s=${title}`);
      const data = await res.json();
      setMovies(data.Search);

        }
        
    useEffect(() => {
        searchMovie('hero')
    },[]);

    return (
        <div className='app'>
            <h1>MovieLoversBD</h1>

            <div className='search'>
                <input 
                placeholder='Search fo a movie'
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img src={SearchIcon} alt=""
                onClick={() => {searchMovie(searchTerm)}} />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                      {movies.map(movie => <MovieCard movie1={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    );
};

export default App;