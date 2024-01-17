import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export const getWeatherDetails = async () => {
  const location = prompt("Enter your location")
  try {
     const reqUrl = `http://api.weatherapi.com/v1/current.json?q=${location}&key=ee1b7a2e83584fe593c110934241601`
     const response = await axios.get(reqUrl);
     return response.data;
  } catch (error) {
    console.log(error)
    toast.error("Weather! Something Went Wrong !", {
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