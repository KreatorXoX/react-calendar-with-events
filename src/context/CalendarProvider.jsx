import React, { useState } from "react";
import dayjs from "dayjs";
import { CalendarCtx } from "./CalendarContext";

const CalendarProvider = (props) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentDay] = useState(dayjs());
  return (
    <CalendarCtx.Provider
      value={{ monthIdx, setMonthIdx, selectedDay, setSelectedDay, currentDay }}
    >
      {props.children}
    </CalendarCtx.Provider>
  );
};

export default CalendarProvider;
