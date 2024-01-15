import React from 'react'
import styles from './Home.module.css'

import ProfileCard from '../ProfileCard/ProfileCard'
import NotesCard from '../NotesCard/NotesCard'
import NewsCard from '../NewsCard/NewsCard'
const Home = () => {
  return (
     <div className={styles.home}>
     <div className={styles.home__container}>
      <div className={styles.home__heading}>
      <ProfileCard/>
     </div>
     <div className={styles.home__notes}>
     <NotesCard/>
     </div>
      </div>
     <div className={styles.home__weather}>
     <NewsCard/>
     </div>
     </div>
  )
}

export default Home