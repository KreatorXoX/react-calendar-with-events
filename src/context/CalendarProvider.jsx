import React, { useState } from "react";
import dayjs from "dayjs";
import { CalendarCtx } from "./CalendarContext";

const CalendarProvider = (props) => {
  const [monthIdx, setMonthIdx] = useState(dayjs().month());

  return (
    <CalendarCtx.Provider value={{ monthIdx, setMonthIdx }}>
      {props.children}
    </CalendarCtx.Provider>
  );
};

export default CalendarProvider;
