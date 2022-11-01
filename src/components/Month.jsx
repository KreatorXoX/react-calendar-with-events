import React from "react";
import Day from "./Day";
import styles from "./Month.module.css";
const Month = ({ month }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className={styles.monthLayout}>
      {days.map((day, idx) => (
        <h5 key={idx} className={styles.dayNames}>
          {day}
        </h5>
      ))}
      {month.map((row, idx) => {
        return (
          <React.Fragment key={idx}>
            {row.map((day, i) => {
              return <Day day={day} key={i} rowTitle={idx} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
