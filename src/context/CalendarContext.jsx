import { createContext } from "react";

export const CalendarCtx = createContext({
  monthIdx: 0,
  setMonthIdx: (index) => {},
  currentDay: null,
  selectedDay: null,
  setSelectedDay: (day) => {},
  taskDispatch: ({ type, payload }) => {},
  openModal: false,
  setOpenModal: () => {},
  selectedTask: {},
  setSelectedTask: () => {},
  tasks: [],
});
