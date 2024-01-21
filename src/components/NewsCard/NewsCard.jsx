import React, { useEffect, useState } from "react";
import styles from "./NewsCard.module.css";
import { getNewsDetails } from "../../apis/news";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpin from "react-loading-spin";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    NewsDetails();
  }, []);

  const NewsDetails = async () => {
    const result = await getNewsDetails();
    setNews(result);
  };
  if(news) {
  return (
    <div className={styles.card}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.card__image}>
        <div className={styles.card__news_heading}>
          <h1> {news?.title}</h1>
          <p>{news?.publishedAt}</p>
        </div>
        <img src={news?.urlToImage} alt="News" />
      </div>
      <div className={styles.card__news}>
        <p className={styles.card__news_text}>
           {news?.description}
        </p>
      </div>
    </div>
  ); } else {
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

export default NewsCard;
