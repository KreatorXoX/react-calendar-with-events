import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { CalendarCtx } from "../context/CalendarContext";
import Modal from "./Modal";
import taskImage from "../assets/task.png";
import tag from "../assets/tag.png";
import time from "../assets/time.png";
import styles from "./CreateNewTask.module.css";
import dayjs from "dayjs";
const CreateNewTask = () => {
  const {
    selectedDay,
    currentDay,
    taskDispatch,
    openModal,
    setOpenModal,
    selectedTask,
    setSelectedTask,
  } = useContext(CalendarCtx);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labelSelected, setLabelSelected] = useState(
    selectedTask ? selectedTask.labelColor : "#FF006E"
  );

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setLabelSelected(selectedTask.labelColor);
    }
  }, [selectedTask]);

  const showDate = `${
    selectedDay
      ? selectedDay.format("ddd - D MMMM - YYYY")
      : selectedTask
      ? dayjs(new Date(selectedTask.day)).format("ddd - D MMMM - YYYY")
      : currentDay.format("ddd - D MMMM - YYYY")
  }`;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskOBJ = {
      title: title,
      description: description,
      day: selectedTask
        ? selectedTask.day.valueOf()
        : selectedDay
        ? selectedDay.valueOf()
        : currentDay.valueOf(), // because dayjs object cannot be stringified
      labelColor: labelSelected,
      id: selectedTask ? selectedTask.id : Date.now(), // some unique id
    };
    if (selectedTask) {
      taskDispatch({
        type: "UPDATE_TASK",
        payload: taskOBJ,
      });
    } else {
      taskDispatch({
        type: "ADD_TASK",
        payload: taskOBJ,
      });
    }

    setTitle("");
    setDescription("");
    setLabelSelected("#FF006E");
    setSelectedTask(null);
    setOpenModal(false);
  };

  const deleteHandler = (id) => {
    taskDispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
    setTitle("");
    setDescription("");
    setLabelSelected("#FF006E");
    setSelectedTask(null);
    setOpenModal(false);
  };
  const labelColors = [
    "#FF006E",
    "#FB5607",
    "#3A86FF",
    "#8338EC",
    "#E70E02",
    "#1F1300",
  ];

  return (
    <React.Fragment>
      <button className={styles.button} onClick={() => setOpenModal(true)}>
        <span>Create Event</span>
        <img src={taskImage} alt="add task" width={"30"} />
      </button>
      {openModal && (
        <Modal
          onSubmit={handleFormSubmit}
          onClick={() => {
            setSelectedTask(null);
            setTitle("");
            setDescription("");
            setLabelSelected("#FF006E");
            setOpenModal(false);
          }}
          show={openModal}
          header={selectedTask ? "Update Task" : "Add New Task"}
          headerButton={
            <>
              <button
                onClick={() => {
                  if (!selectedTask) return;
                  deleteHandler(selectedTask.id);
                }}
                className={styles.deleteBtn}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </>
          }
          footer={
            <div className={styles.modalButton}>
              <button
                onClick={() => {
                  setSelectedTask(null);
                  setTitle("");
                  setDescription("");
                  setLabelSelected("#FF006E");
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          }
        >
          <div className={styles.formContent}>
            <div className={styles.formInput}>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Task Header"
              />
            </div>
            <div className={styles.formInput}>
              <textarea
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Task Description"
                rows={4}
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
