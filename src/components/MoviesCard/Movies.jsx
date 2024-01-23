import React, { useState, useEffect } from "react";
import styles from "./Movies.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMoviesDetails } from "../../apis/movies";
import LoadingSpin from "react-loading-spin";
import Profile from "/assets/icons/profile.png";


const Movies = () => {
  const navigate = useNavigate();
  const userGenre = localStorage.getItem("category");
  let genreDetails = userGenre;
  if (genreDetails) {
    genreDetails = genreDetails?.split(",");
  } else {
    genreDetails = [];
  }
  useEffect(()=>{
    if (!userGenre) {
      navigate("/register");
    }
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__text}>Popcorn Buzz</div>
        <div className={styles.header__profile}>
          <Link to="/">
            {" "}
            <img
              src={Profile}
              className={styles.header__profile_img}
              alt="profile"
            />{" "}
          </Link>
        </div>
      </div>
      <div className={styles.container__moviecard}>
        <h3 className={styles.container__moviecard_header}>
          Entertainment according to your choice
        </h3>

        {genreDetails.map((genre) => {
          return <Card genreDetail={genre} key={genre} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
