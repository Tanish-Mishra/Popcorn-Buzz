import React from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
export const getMoviesDetails = async () => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?&apikey=${process.env.VITE_MOVIE_API_KEY}&s=action`)
    return response.data
  } catch (error) {
    toast.error("Movies! Something Went Wrong !", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      })
  }
}
