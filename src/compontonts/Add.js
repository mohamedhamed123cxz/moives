import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import ResultCard from '../ResultCard';
import './add.css'
import ResultCard from './ResultCard';
function Add() {
    const [searchValue , setSearchValue] = useState("");
    const [movies , setMovies] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 

    useEffect(() => {
      if (searchValue) {
        setLoading(true);
        setError('');
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=b7938a80`)
          .then(response => {
            if (response.data.Error === "Too many results.") {
              setError("Too many results. Please refine your search.");
              setMovies([]);
            } else if (response.data.Search) {
              setMovies(response.data.Search);
            } else {
              setMovies([]);
            }
          })
          .catch(error => {
            console.error('Failed to fetch movies:', error);
            setError('Failed to fetch movies');
          })
          .finally(() => setLoading(false));
      } else {
        setMovies([]);
      }
  }, [searchValue]);
  
    
    

  return (
    <div className='add-page'>
     <div className="container">
        <div className="add-content">
            <div className="input-wrapper">
               <input
                type="text"
                placeholder='Search for a movie' 
                value={searchValue}   
                onChange={(e)=> setSearchValue(e.target.value)} 
                />
            </div>
          {loading && <p>Loading...</p>}  
          {error && <p>{error}</p>}  
          {!loading && movies.length === 0 && searchValue && <p>No results found</p>} 
          {movies.length > 0 && (
            <ul className='results'>
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
    </div>
  )
}

export default Add
