import { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Taskbar from "./components/Taskbar";

import { CalendarCtx } from "./context/CalendarContext";
import { getMonth } from "./util";

function App() {
  const { monthIdx } = useContext(CalendarCtx);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIdx));
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
