import React from "react";
import dayjs from "dayjs";

import { useCalendarStore } from "../context/CalenderZustand";

import styles from "./Day.module.css";

const Day = ({ day, isSelected }) => {
  const { selectedDay, setSelectedDay, setOpenModal, setSelectedTask, tasks } =
    useCalendarStore((state) => state, shallow);

  const isCurrentDay = () =>
    day.format("DD--MM--YY") === dayjs().format("DD--MM--YY");
  const isCurrentMonth = () => day.format("MM YY") === dayjs().format("MM YY");

  const activeDay = isCurrentDay() ? styles.active : "";
  const notActiveMonth = isCurrentMonth() ? "" : styles.notActiveMonth;
  const selected = isSelected
    ? styles.selected
    : day === selectedDay
    ? styles.selected
    : "";

  const selectDayHandler = () => {
    if (day === selectedDay) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };
  return (
    <>
      <div
        onClick={selectDayHandler}
        className={`${styles.day} ${activeDay} ${notActiveMonth} ${selected}`}
      >
        <header className={styles.dayLayout}>
          <p className={styles.dayNumber}>{day.format("DD")}</p>

          {tasks.map((u, idx) =>
            day.format("DD-MM-YY") ===
            dayjs(new Date(u.day)).format("DD-MM-YY") ? (
              <div
                key={idx}
                style={{ backgroundColor: `${u.labelColor}` }}
                className={styles.task}
                onClick={() => {
                  setSelectedTask(u);
                  setOpenModal(true);
                }}
              >
                <span> {u.title}</span>
              </div>
            ) : (
              ""
            )
          )}
        </header>
      </div>
    </>
  );
};

export default Day;
