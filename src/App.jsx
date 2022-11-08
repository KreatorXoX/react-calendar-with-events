import { useState, useEffect } from "react";

import { getMonth } from "./util";
import { useCalendarStore } from "./context/CalenderZustand";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Taskbar from "./components/Taskbar";

function App() {
  const monthIdx = useCalendarStore((state) => state.monthIdx);
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
