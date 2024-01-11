import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button type="submit" onClick={(e) => props.onClick(e)}>
    SIGN UP
</button>
  )
}

export default Button