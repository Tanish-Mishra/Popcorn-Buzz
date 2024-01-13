import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Genre.module.css'

import Action from '/assets/images/action.png'
import Drama from '/assets/images/drama.png'
import Fantasy from '/assets/images/fantasy.png'
import Fiction from '/assets/images/fiction.png'
import Horror from '/assets/images/horror.png' 
import Music from '/assets/images/music.png'
import Romance from '/assets/images/romance.png' 
import Thriller from '/assets/images/thriller.png'
import Western from '/assets/images/western.png'
import Required from '/assets/icons/required.svg'
import BlockCard from '../BlockCard/BlockCard'
import Button from '../Button/Button'

const DEFAULT_GENRE = [
  {
    id: "Action",
    color:"#FF5209",
    image: <img src={Action} alt='action' />
  },
  {
    id: "Drama",
    color:"#D7A4FF",
    image: <img src={Drama} alt='drama'/>
  },
  {
    id: "Romance",
    color:"#041e01",
    image: <img src={Romance} alt='romance'/>
  },
  {
    id: "Thriller",
    color:"#84C2FF",
    image: <img src={Thriller} alt='thriller'/>
  },
  {
    id: "Western",
    color:"#902500",
    image: <img src={Western} alt='western'/>
  },
  {
    id: "Horror",
    color:"#7358FF",
    image: <img src={Horror} alt='horror'/>
  },
  {
    id: "Fantasy",
    color:"#FF4ADE",
    image: <img src={Fantasy} alt='fantasy'/>
  },
  {
    id: "Music",
    color:"#E61E32",
    image: <img src={Music} alt='music'/>
  },
  {
    id: "Fiction",
    color:"#6CD061",
    image: <img src={Fiction} alt='fiction'/>
  }

]

const Genre = () => {
  const navigate = useNavigate()
  const [category,setCategory] = useState([])
  const [lengthError,setLengthError] = useState(false)

//  useEffect(() => {
//   console.log(category)
//  },[category]) 
const removeCategory = (value) => {
 const newCategoryList = category.filter((category) => category !== value)
 setCategory(newCategoryList)
}

const handleSubmit = () => {
  if(category.length<=2) {
    setLengthError(true)
    return
  }
  localStorage.setItem("category",category)
  navigate('/home')
}
  return (
    <div className={styles.container} > 
      <div className={styles.sub_container}>
         <h1 className={styles.logo_text}>Super App</h1>
         <h3 className={styles.sub_heading}>Choose your entertainment category</h3>
      {lengthError && <p className={styles.error} style={{color: "red", marginLeft: "-4rem"} }><img src={Required} alt='none' style={{height: "1.5rem", width: "1.7rem", marginRight: "0.5rem"}}/>Minimum 3 Category Required !</p>  }
            <div className={styles.category_container}>
             {category.map((category,index) => (
              <div className={styles.category_wrapper} key={category.id}>
              <p className={styles.category} style={{color: "#fff"}} >{category}</p>
              <button className={styles.remove_category} onClick={()=>{removeCategory(category)}}>X</button>
              </div>
              
             ))}
             
           </div>
      
      </div>
      <div className={styles.genre_container}>
        {DEFAULT_GENRE.map((genre,index)=> (
          <BlockCard
           key={genre.id}
           genreDetails={genre}
           categoriesList={category}
           setCategory={setCategory}
           removeCategory={removeCategory}
           setLengthError={setLengthError}
          /> 
        ))}
        <div className={styles.btn_container}>
         <Button onClick={handleSubmit} name='Next Page'/>
         </div>
      </div>
    </div>
  )
}

export default Genre