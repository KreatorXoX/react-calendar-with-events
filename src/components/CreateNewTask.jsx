import React, { useState, useContext } from 'react'
import { CalendarCtx } from '../context/CalendarContext'
import Modal from './Modal'
import taskImage from '../assets/task.png'
import tag from '../assets/tag.png'
import styles from './CreateNewTask.module.css'
const CreateNewTask = () => {
  const { selectedDay, currentDay } = useContext(CalendarCtx)
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(title, description)
    setOpenModal(false)
  }

  return (
    <React.Fragment>
      <button className={styles.button} onClick={() => setOpenModal(true)}>
        <span>Create Event</span>
        <img src={taskImage} alt='add task' width={'30'} />
      </button>
      {openModal && (
        <Modal
          date={`${selectedDay ? selectedDay : currentDay}`}
          onSubmit={handleFormSubmit}
          onClick={() => setOpenModal(false)}
          show={openModal}
          header={'Add New Task'}
          footer={
            <div className={styles.modalButton}>
              <button onClick={() => setOpenModal(false)}>Cancel</button>
              <button type='submit'>Add</button>
            </div>
          }
        >
          <div className={styles.formContent}>
            <div className={styles.formInput}>
              <label htmlFor='header'>Task Title</label>
              <input
                type='text'
                onChange={e => {
                  setTitle(e.target.value)
                }}
                id='header'
                placeholder='Task Header'
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                onChange={e => {
                  setDescription(e.target.value)
                }}
                id='description'
                placeholder='Task Description'
              />
            </div>
            <div className={styles.labels}>
              <img src={tag} alt='' width='30' height='30' />
              <span className={`${styles.color} ${styles.active}`}>1</span>
              <span className={styles.color}>1</span>
              <span className={styles.color}>1</span>
              <span className={styles.color}>1</span>
              <span className={styles.color}>1</span>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default CreateNewTask
