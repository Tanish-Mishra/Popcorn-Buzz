import React,{useEffect, useState} from "react";
import styles from "./TimerCard.module.css";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Up from "/assets/icons/up.svg";
import Down from "/assets/icons/down.svg";

import Bell from '/assets/audio/ting-tong.mp3'
const TimerCard = () => {
  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [hours,setHours] = useState(0)
  const [isTimerStart, setIsTimerStart] = useState(false)
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  const bell = new Audio(Bell)
  const incrementSeconds = () => {
    if(seconds === 59){
      return
    }
    setSeconds((prev)=>(prev+1))
  }
  const incrementMinutes = () => {
    if(minutes === 59){
      return
    }
    setMinutes((prev)=>(prev+1))
  }
  const incrementHours = () => {
    setHours((prev)=>(prev+1))
  }
  const decrementSeconds = () => {
    if(seconds === 0){
      return
    }
    setSeconds((prev)=>(prev-1))
  }
  const decrementMinutes = () => {
    if(minutes === 0){
      return
    }
    setMinutes((prev)=>(prev-1))
  }
  const decrementHours = () => {
    if(hours === 0){
      return
    }
    setHours((prev)=>(prev-1))
  }

  function onComlete () {
      bell.play()
  }
  useEffect(() => {
     const secondCount = (seconds + minutes * 60 + hours * 60 * 60);
     setTimeInSeconds(secondCount)
  },[seconds,minutes,hours])
  return (
    <div className={styles.container}>
      <div className={styles.timer_container}>
      <CountdownCircleTimer
    size={119}
    isPlaying={isTimerStart}
    duration={timeInSeconds}
    onComplete={onComlete}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
      </div>
      <div className={styles.container__timerdetails}>
        <div className={styles.container__timer_text}>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
        <div className={styles.container__timer_btn}>
          <img src={Up} alt="timer" onClick={incrementHours} />
          <img src={Up} alt="timer" onClick={incrementMinutes}/>
          <img src={Up} alt="timer" onClick={incrementSeconds} />
        </div>
        <div className={styles.container__timer_score}>
          <span className={styles.score}>{hours}</span>
          <span className={styles.score}>{minutes}</span>
          <span className={styles.score_seconds}>{seconds}</span>
        </div>
        <div className={styles.container__timer_btn}>
          <img src={Down} alt="timer" onClick={decrementHours}/>
          <img src={Down} alt="timer" onClick={decrementMinutes} />
          <img src={Down} alt="timer" onClick={decrementSeconds} />
        </div>
        <button className={styles.container__timer_btn_start} onClick={()=> {
          setIsTimerStart(!isTimerStart)
        }}>{isTimerStart ? (<p onClick={()=> {
          setHours(0)
          setMinutes(0)
          setSeconds(0)
          setTimeInSeconds(0)
        }}>Pause</p>) : (<p>Start</p>)}</button>
      </div>
    </div>
  );
};

export default TimerCard;
