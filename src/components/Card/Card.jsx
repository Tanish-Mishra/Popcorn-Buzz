import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { getMoviesDetails } from "../../apis/movies";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpin from "react-loading-spin";


const Card = (props) => {
  const [movie, setMovie] = useState([]);
  const [isLoader,setIsLoader] = useState(false)
  const movieDetails = async (genreInfo) => {
    const result = await getMoviesDetails(genreInfo);
    setMovie(result?.Search);
  };
  useEffect(() => {
    movieDetails(props.genreDetail);
  }, []);

  if (movie) {
  return (
    <div className={styles.container} key={props.key}>
      <Toaster position="top-right" reverseOrder={false} />
      <h6 className={styles.container__header}>{props.genreDetail}</h6>
      <div className={styles.container__moviecard}>
        <div className={styles.container__movies}>
          {movie.map((movies) => (
            <img src={movies?.Poster} alt="movie" />
          ))}
        </div>
      </div>
    </div>
  ) 
          } else {
            return (
            <div className={styles.loader}>
             <LoadingSpin 
              duration="2s"
              width="8px"
              timingFunction="ease-in-out"
              direction="alternate"
              primaryColor="#000"
              secondaryColor="#72DB73"
             />
            </div>
            )
          }
};

export default Card;
