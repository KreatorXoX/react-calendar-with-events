import React, { useContext } from "react";
import { CalendarCtx } from "../context/CalendarContext";
import styles from "./Day.module.css";
import dayjs from "dayjs";

const Day = ({ day, rowTitle }) => {
  const { selectedDay, setSelectedDay } = useContext(CalendarCtx);
  const isCurrentDay = () =>
    day.format("DD--MM--YY") === dayjs().format("DD--MM--YY");
  const isCurrentMonth = () => day.format("MM") === dayjs().format("MM");

  const activeDay = isCurrentDay() ? styles.active : "";
  const notActiveMonth = isCurrentMonth() ? "" : styles.notActiveMonth;
  const selected = day === selectedDay ? styles.selected : "";
  const selectDayHandler = () => {
    setSelectedDay(day);
  };
  return (
    <>
      <div
        onClick={selectDayHandler}
        className={`${styles.day} ${activeDay} ${notActiveMonth} ${selected}`}
      >
        <header className={styles.dayLayout}>
          <p className={styles.dayNumber}>{day.format("DD")}</p>
        </header>
      </div>
    </>
  );
};

export default Day;
