import React, { useEffect, useState } from "react";
import styles from "./NotesCard.module.css";
import { useSearchParams } from "react-router-dom";
const NotesCard = () => {
  const [notesData, setNotesData] = useState();
  const handleNotes = (event) => {
    setNotesData(event.target.value);
    localStorage.setItem("notesData", JSON.stringify(notesData));
  };
  useEffect(() => {
    const savedNotes = localStorage.getItem("notesData");
    if(savedNotes) {
      setNotesData(JSON.parse(savedNotes));
    }
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>All Notes</h2>
      <textarea
        className={styles.notes_area}
        value={notesData}
        onChange={handleNotes}
      />
    </div>
  );
};

export default NotesCard;
