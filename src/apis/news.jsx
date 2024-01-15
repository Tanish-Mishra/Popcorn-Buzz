import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
export const getNewsDetails = async () => {
   
  try {
    let number = Math.floor(Math.random() * 101);
    const requiredUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-01-14&to=2024-01-14&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    const response = await axios.get(requiredUrl);
    return response.data.articles[number];
  } catch (error) {
    console.log(error);
    toast.success("News! Something Went Wrong !", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }
}
