import React from "react";
//import { CalendarCtx } from '../context/CalendarContext'
import { useCalendarStore } from "../context/CalenderZustand";
import dayjs from "dayjs";
import logo from "../assets/react.svg";
import styles from "./CalendarHeader.module.css";

const CalendarHeader = () => {
  //const { monthIdx, setMonthIdx } = useContext(CalendarCtx)
  const monthIdx = useCalendarStore((state) => state.monthIdx);
  const setMonthIdx = useCalendarStore((state) => state.setMonthIdx);

  const handleMonthChange = (value) => {
    console.log(value);
    if (value === 0) {
      return setMonthIdx(dayjs().month());
    }
    console.log(monthIdx);
    setMonthIdx(monthIdx + value);
  };
  return (
    <header className={styles.header}>
      <img src={logo} alt="react logo" />
      <h1 className={styles.calendarTitle}>Calendar</h1>
      <div className={styles.calendarSettings}>
        <div className={styles.calendarActions}>
          <button
            className={styles.today}
            onClick={handleMonthChange.bind(null, 0)}
          >
            Today
          </button>
          <div>
            <button
              className={styles.setButtons}
              onClick={handleMonthChange.bind(null, -1)}
            >
              &#60;
            </button>
            <button
              className={styles.setButtons}
              onClick={handleMonthChange.bind(null, 1)}
            >
              &#62;
            </button>
          </div>
        </div>
        <div className={styles.currentMonth}>
          <h2>
            {dayjs(new Date(dayjs().year(), monthIdx)).format("YYYY MMMM")}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;
