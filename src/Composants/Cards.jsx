import React from 'react'

const Cards = ({movie}) => {
    return (
        <div className='resultCard'>
            <div className='posterWrapper'>
                {movie.poster_path ? ( 
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                ) : <div className='fillerPoster'></div>
                
                } 
                
            </div>
            
        </div>
    )
}

export default Cards




