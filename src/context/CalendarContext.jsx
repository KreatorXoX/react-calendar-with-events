import { createContext } from "react";

export const CalendarCtx = createContext({
  monthIdx: 0,
  setMonthIdx: (index) => {},
});
