import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button type="submit" className={styles.btn} onClick={(e) => props.onClick(e)}>
      {props.name}
</button>
  )
}

export default Button