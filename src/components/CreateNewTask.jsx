import React, { useState, useContext } from "react";
import { CalendarCtx } from "../context/CalendarContext";
import Modal from "./Modal";
import taskImage from "../assets/task.png";
import tag from "../assets/tag.png";
import time from "../assets/time.png";
import styles from "./CreateNewTask.module.css";
const CreateNewTask = () => {
  const { selectedDay, currentDay } = useContext(CalendarCtx);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labelSelected, setLabelSelected] = useState("#FF97C1");

  const showDate = `${
    selectedDay
      ? selectedDay.format("dddd MMMM YYYY")
      : currentDay.format("dddd MMMM YYYY")
  }`;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    setOpenModal(false);
  };

  const labelColors = ["#FF97C1", "#FEB139", "#583D72", "#829460", "#D61C4E"];

  return (
    <React.Fragment>
      <button className={styles.button} onClick={() => setOpenModal(true)}>
        <span>Create Event</span>
        <img src={taskImage} alt="add task" width={"30"} />
      </button>
      {openModal && (
        <Modal
          onSubmit={handleFormSubmit}
          onClick={() => setOpenModal(false)}
          show={openModal}
          header={"Add New Task"}
          footer={
            <div className={styles.modalButton}>
              <button onClick={() => setOpenModal(false)}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          }
        >
          <div className={styles.formContent}>
            <div className={styles.formInput}>
              <label htmlFor="header">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="header"
                placeholder="Task Header"
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                id="description"
                placeholder="Task Description"
              />
            </div>
            <div className={styles.details}>
              <img src={time} alt="" width="30" height="30" />
              <p>{showDate}</p>
            </div>
            <div className={styles.details}>
              <img src={tag} alt="" width="30" height="30" />
              {labelColors.map((color, idx) => {
                const colorSelected =
                  labelSelected === color
                    ? `${styles.color} ${styles.active}`
                    : `${styles.color}`;
                return (
                  <span
                    key={idx}
                    style={{ backgroundColor: `${color}` }}
                    className={colorSelected}
                    onClick={() => setLabelSelected(color)}
                  ></span>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CreateNewTask;
