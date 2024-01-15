import React, { useEffect, useState } from "react";
import styles from "./NewsCard.module.css";
import { getNewsDetails } from "../../apis/news";
import toast, { Toaster } from "react-hot-toast";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    NewsDetails();
  }, []);

  const NewsDetails = async () => {
    const result = await getNewsDetails();
    setNews(result);
  };
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
  );
};

export default NewsCard;
