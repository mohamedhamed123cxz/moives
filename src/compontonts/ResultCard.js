import React, { useContext } from 'react'
import { GlobalContext, useMovieContext } from './context/GlobalState'
import './app.css'

function ResultCard({movie}) {
    const {MoviesDispatch } = useContext(GlobalContext)

    const moiveContext=useMovieContext();
    const storedMovie = moiveContext.watchlist.find((o) => o.imdbID === movie.imdbID);
    const storedMovieWatched = moiveContext.watched.find((o) => o.imdbID === movie.imdbID);
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
        {movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} />
        ):(
            <div className='filler-poster'></div>
        )}
        </div>
        <div className='info'>
            <div className='heading'>
                <h3 className='title'>{movie.Title}</h3>   
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}

   </div>     
   <div className="controls">
            <button
             className='btn'
             disabled={watchlistDisabled}
             onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHLIST' , payload : movie })}
             >Add to Watchlist
            </button>
            <button
             className='btn'
             disabled={watchedDisabled}
             onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })}
             >Add to Watched
            </button>
        </div>
   </div>  
   </div>  
  )
}

export default ResultCard
