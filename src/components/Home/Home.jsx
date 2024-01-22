import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
import NotesCard from "../NotesCard/NotesCard";
import NewsCard from "../NewsCard/NewsCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import TimerCard from "../TimerCard/TimerCard";
const Home = () => {
  const navigate = useNavigate();
  const genre = localStorage.getItem("category");
  const userDetail = localStorage.getItem("userData")
  useEffect(() => {
    if (!genre) {
      navigate("/genre");
    } else if(!userDetail) {
      navigate('/register')
    }
  }, []);
  const navigateToMovies = () => {
    navigate("/movies");
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__profile}>
        <div className={styles.home__container}>
          <div className={styles.home__heading}>
            <ProfileCard />
            <WeatherCard />
          </div>
          <div className={styles.home__notes}>
            <NotesCard />
          </div>
        </div>
        <TimerCard />
      </div>
      <div className={styles.home__weather}>
        <NewsCard />
        <div className={styles.navigate_btn}>
          <button
            style={{
              width: "100px",
              height: "30px",
              background: "#148A08",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "bold",
              borderRadius: "1rem",
            }}
            onClick={navigateToMovies}
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
