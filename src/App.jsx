import { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Taskbar from "./components/Taskbar";
import { useCalendarStore } from "./context/CalenderZustand";
import { CalendarCtx } from "./context/CalendarContext";
import { getMonth } from "./util";

function App() {
  const { monthIdx } = useContext(CalendarCtx);
  const setCurrentDay = useCalendarStore((state) => state.setCurrentDay);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx));
    setCurrentDay();
  }, [monthIdx]);

  return (
    <div className="container">
      <CalendarHeader />
      <div className="calendar">
        <Taskbar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
}

export default App;
