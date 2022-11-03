import React, { useContext } from 'react'
import { CalendarCtx } from '../context/CalendarContext'
import styles from './Day.module.css'
import dayjs from 'dayjs'

const Day = ({ day, rowTitle }) => {
  const {
    selectedDay,
    setSelectedDay,
    tasks,
    setSelectedTask,
    setOpenModal
  } = useContext(CalendarCtx)
  const isCurrentDay = () =>
    day.format('DD--MM--YY') === dayjs().format('DD--MM--YY')
  const isCurrentMonth = () => day.format('MM YY') === dayjs().format('MM YY')

  const activeDay = isCurrentDay() ? styles.active : ''
  const notActiveMonth = isCurrentMonth() ? '' : styles.notActiveMonth
  const selected = day === selectedDay ? styles.selected : ''
  const selectDayHandler = () => {
    if (day === selectedDay) {
      setSelectedDay(null)
    } else {
      setSelectedDay(day)
    }
  }
  return (
    <>
      <div
        onClick={selectDayHandler}
        className={`${styles.day} ${activeDay} ${notActiveMonth} ${selected}`}
      >
        <header className={styles.dayLayout}>
          <p className={styles.dayNumber}>{day.format('DD')}</p>

          {tasks.map((u, idx) =>
            day.format('DD-MM-YY') ===
            dayjs(new Date(u.day)).format('DD-MM-YY') ? (
              <div
                key={idx}
                style={{ backgroundColor: `${u.labelColor}` }}
                className={styles.task}
                onClick={() => {
                  setSelectedTask(u)
                  setOpenModal(true)
                }}
              >
                <p> {u.title}</p>
              </div>
            ) : (
              ''
            )
          )}
        </header>
      </div>
    </>
  )
}

export default Day
