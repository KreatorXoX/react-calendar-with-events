import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import dayjs from "dayjs";

export const useCalendarStore = create(
  devtools(
    persist(
      (set) => ({
        currentDay: null,
        setCurrentDay: () => set({ currentDay: dayjs() }),
        monthIdx: 0,
        setMonthIdx: () => {},
        selectedDay: null,
        setSelectedDay: (day) => {},
        openModal: false,
        setOpenModal: () => {},
        selectedTask: {},
        setSelectedTask: () => {},
        tasks: [],
        taskDispatch: ({ type, payload }) => {},
      }),
      {
        name: "CalendarStore",
      }
    )
  )
);
