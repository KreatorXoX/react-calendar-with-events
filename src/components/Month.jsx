import React from "react";
import Day from "./Day";
import styles from "./Month.module.css";
import { useCalendarStore } from "../context/CalenderZustand";
import dayjs from "dayjs";
const Month = ({ month }) => {
  const selectedDay = useCalendarStore((state) => state.selectedDay);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className={styles.monthLayout}>
      {days.map((day, idx) => (
        <div key={idx} className={styles.dayNames}>
          <h5>{day}</h5>
        </div>
      ))}

      {month.map((row, idx) => {
        return (
          <React.Fragment key={idx}>
            {row.map((day, i) => {
              const isSelected = dayjs(selectedDay).format() === day.format();
              return <Day day={day} key={i} isSelected={isSelected} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
