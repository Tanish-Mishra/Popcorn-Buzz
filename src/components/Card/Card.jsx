import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { getMoviesDetails } from '../../apis/movies';
import toast, { Toaster } from 'react-hot-toast';
const Card = (props) => {
  const [movie,setMovie] = useState([])
  const movieDetails = async (genreInfo) => {
  const result = await getMoviesDetails(genreInfo)
  setMovie(result.Search) 
  }
  useEffect(()=>{
    movieDetails(props.genreDetail)
  },[])
  return (
    <div className={styles.container} key={props.key}>
        <Toaster position="top-right" reverseOrder={false} />
        <h6 className={styles.container__header}>{props.genreDetail}</h6>
        <div className={styles.container__moviecard}>
          <div className={styles.container__movies}>
        { movie.map((movies)=>(
          <img src={movies?.Poster} alt='movie'/>
          ))  
}
          </div>
        </div>
    </div>
  )
}

export default Card