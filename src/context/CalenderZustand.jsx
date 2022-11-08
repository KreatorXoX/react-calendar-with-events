import { useEffect } from "react";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import dayjs from "dayjs";

const initialMonth = dayjs().month();

// const taskInit = () => {
//   const storageTasks = localStorage.getItem("savedTasks");
//   const parsedTasks = storageTasks ? JSON.parse(storageTasks) : [];
//   return parsedTasks;
// };

export const useCalendarStore = create(
  devtools(
    persist(
      (set) => ({
        currentDay: null,
        setCurrentDay: () => set({ currentDay: dayjs() }),
        monthIdx: initialMonth,
        setMonthIdx: (value) => set({ monthIdx: value }),
        selectedDay: null,
        setSelectedDay: (day) => set({ selectedDay: day }),
        openModal: false,
        setOpenModal: (value) => set({ openModal: value }),
        selectedTask: null,
        setSelectedTask: (task) => set({ selectedTask: task }),
        tasks: [],
        addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
        updateTask: (updatedTask) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            ),
          })),
        deleteTask: (id) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          })),
      }),
      {
        name: "CalendarStore",
      }
    )
  )
);
