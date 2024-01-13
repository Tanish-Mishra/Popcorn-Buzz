import React from 'react'
import styles from './Home.module.css'

import ProfileCard from '../ProfileCard/ProfileCard'
import NotesCard from '../NotesCard/NotesCard'
const Home = () => {
  return (
     <div className={styles.home}>
      <ProfileCard/>
      <NotesCard/>
     </div>
  )
}

export default Home