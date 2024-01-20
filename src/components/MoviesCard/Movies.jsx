import React,{useState,useEffect} from 'react'
import styles from './Movies.module.css'
import Card from '../Card/Card'
import {Link} from 'react-router-dom'
import { getMoviesDetails } from '../../apis/movies'

import Profile from '/assets/icons/profile.png'

const Movies = () => {
    // useEffect(()=>{
    //       movieDetails()
    //  },[])
    const userGenre = localStorage.getItem('category')
    let genreDetails = []
    if(genreDetails){
       genreDetails = userGenre.split(',')
    }
  
  return (
    <div className={styles.container}>
    <div className={styles.header}>
        <div className={styles.header__text}>Super App</div>
        <div className={styles.header__profile}>
          <Link to='/'> <img src={Profile} className={styles.header__profile_img} alt='profile'/> </Link>
        </div>
    </div>
    <div className={styles.container__moviecard}>
    <h3 className={styles.container__moviecard_header}>Entertainment according to your choice</h3>
    { 
    genreDetails.map((genre)=> {
        return (
            <Card genreDetail={genre} key={genre}/>
        )
    })}
    </div>
    </div>
  )
  }

export default Movies