import React, { useEffect,useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { getWeatherDetails } from '../../apis/weather';
import styles from './WeatherCard.module.css'

import windSpeed from '/assets/icons/wind_speed.svg'
import pressure from '/assets/icons/pressure.svg'
import humidity from '/assets/icons/humidity.svg'

const WeatherCard = () => {
    const [date,setDate] = useState()
    const [weather,setWeather] = useState([])
     useEffect(()=> {
        weatherDetails()
     },[])
    const weatherDetails = async () => {
        const result = await getWeatherDetails()
         setDate(result.location.localtime)
         setWeather(result.current)

    }
  return (
    <div className={styles.card}>
         <Toaster position="top-right" reverseOrder={false} />
        <div className={styles.card__header}>
            <h2 className={styles.card__header_time}>{date}</h2>
        </div>
        <div className={styles.card__details}>
            <div className={styles.card__details_data}>
                <img src={weather?.condition?.icon} alt='icon' />
                <span>{weather?.condition?.text}</span>
            </div>
            <span className={styles.card__details_pipe}></span>
            <div className={styles.card__details_data}>
                <span style={{fontSize: "var(--font-small)"}}>{weather?.temp_c}&deg;C</span>
                <span className={styles.card__details_pressure}><img src={pressure} alt='icon'/>{weather?.pressure_mb}mbar Pressure</span>
            </div>
            <span className={styles.card__details_pipe}></span>
            <div className={styles.card__details_data}>
            <span className={styles.card__details_windspeed}><img src={windSpeed} alt='icon'/>{weather?.gust_kph}km/h</span>
            <span className={styles.card__details_humidity}><img src={humidity} alt='icon' />{weather?.humidity}% Humidity</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard