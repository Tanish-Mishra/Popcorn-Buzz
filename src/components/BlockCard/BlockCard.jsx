import React, { useEffect, useState } from "react";
import styles from "./BlockCard.module.css";
const BlockCard = (props) => {
  let [selected, isSelected] = useState(false);
  const addValueToCategory = (value) => {
    const existingValue = props.categoriesList.filter(
      (category) => category === value
    );
    if (!existingValue.length) {
      props.setCategory([...props.categoriesList, value]);
      props.setLengthError(false);
    } else {
      const newCategory = props.categoriesList.filter(
        (category) => category !== value
      );
      props.setCategory(newCategory);
    }
  };
  useEffect(() => {
    const isExists =
      (props.categoriesList.includes(props.genreDetails.id) === true) // includes() returns true or false
    /* if we selected the component it will remember if that components exists in array 
          it will mark isExists true if it exists in array and false if it doesn't exists in array and 
          we make is selected true or false based on isExists */
    isSelected(isExists);
  });
  return (
    <div
      className={styles.card}
      onClick={() => {
        addValueToCategory(props.genreDetails.id);
        isSelected(!selected);
      }}
      style={{
        border: ` ${selected ? "4px solid green" : "4px solid white"}`,
        background: props.genreDetails.color,
      }}
      key={props.key}
    >
      <p className={styles.heading}>{props.genreDetails.id}</p>
      <div className={styles.image_container}>{props.genreDetails.image}</div>
    </div>
  );
};

export default BlockCard;
