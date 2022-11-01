import React from "react";
import styles from "./Day.module.css";
import dayjs from "dayjs";
const Day = ({ day, rowTitle }) => {
  const isCurrentDay = () =>
    day.format("DD--MM--YY") === dayjs().format("DD--MM--YY");
  const isCurrentMonth = () => day.format("MM") === dayjs().format("MM");

  let activeDay = isCurrentDay() ? styles.active : "";
  let notActiveMonth = isCurrentMonth() ? "" : styles.notActiveMonth;

  return (
    <>
      <div className={`${styles.day} ${activeDay} ${notActiveMonth}`}>
        <header className={styles.dayLayout}>
          <p className={styles.dayNumber}>{day.format("DD")}</p>
        </header>
      </div>
    </>
  );
};

export default Day;
