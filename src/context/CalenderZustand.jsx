import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import dayjs from 'dayjs'

const initialMonth = dayjs().month()

export const useCalendarStore = create(
  devtools(
    persist(
      set => ({
        currentDay: null,
        setCurrentDay: () => set({ currentDay: dayjs() }),
        monthIdx: initialMonth,
        setMonthIdx: value => set({ monthIdx: value }),
        selectedDay: null,
        setSelectedDay: day => set({ selectedDay: day }),
        openModal: false,
        setOpenModal: value => set({ openModal: value }),
        selectedTask: null,
        setSelectedTask: task => set({ selectedTask: task }),
        tasks: [],
        taskDispatch: ({ type, payload }) => {}
      }),
      {
        name: 'CalendarStore'
      }
    )
  )
)
