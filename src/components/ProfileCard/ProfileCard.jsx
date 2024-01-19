import React, { useEffect } from 'react'
import styles from './ProfileCard.module.css'
import Profile from '/assets/images/profile.png'
const ProfileCard = () => {
    let userDetails = localStorage.getItem("userData")
    if(userDetails){
      userDetails = JSON.parse(userDetails);
   }
    let genreDetails = localStorage.getItem("category")
    let genreValues = [];
    if(genreDetails){
        genreValues = genreDetails.split(",")
    }    
  return (
    <div className={styles.profile_container}>
            <img src={Profile} alt='profile' />
            <div className={styles.user_details}>
                <p className={styles.user_name}>{userDetails?.name}</p>
                <p className={styles.user_email}>{userDetails?.email}</p>
                <p className={styles.user_name_unique}>{userDetails?.userName}</p>
                <div className={styles.genre_cont}>
               {genreValues.map((genre,index)=>(
                <p key={genre}>{genre}</p>
               ))}
                </div>
            </div>
    </div>
  )
}

export default ProfileCard