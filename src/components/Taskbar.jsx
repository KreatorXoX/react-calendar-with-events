import React from "react";
import CreateNewTask from "./CreateNewTask";
import styles from "./Taskbar.module.css";
const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <CreateNewTask />
    </div>
  );
};

export default Taskbar;
