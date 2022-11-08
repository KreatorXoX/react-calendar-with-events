// import React, { useState, useReducer, useEffect } from "react";
// import dayjs from "dayjs";
// import { CalendarCtx } from "./CalendarContext";

// const taskReducer = (state, { payload, type }) => {
//   switch (type) {
//     case "ADD_TASK":
//       return [...state, payload];
//     case "UPDATE_TASK":
//       return state.map((task) => (task.id === payload.id ? payload : task));
//     case "REMOVE_TASK":
//       return state.filter((task) => task.id !== payload);
//     default:
//       throw new Error("Invalid type");
//   }
// };

// // const taskInit = () => {
// //   const storageTasks = localStorage.getItem('savedTasks')
// //   const parsedTasks = storageTasks ? JSON.parse(storageTasks) : []
// //   return parsedTasks
// // }

// const CalendarProvider = (props) => {
//   //const [monthIdx, setMonthIdx] = useState(dayjs().month());
//   // const [selectedDay, setSelectedDay] = useState(null)
//   // const [openModal, setOpenModal] = useState(false)
//   // const [selectedTask, setSelectedTask] = useState(null)

//   // const [tasks, taskDispatch] = useReducer(taskReducer, [], taskInit);

//   return (
//     <CalendarCtx.Provider
//       value={
//         {
//           // monthIdx,
//           // setMonthIdx,
//           // selectedDay,
//           // setSelectedDay,
//           // taskDispatch,
//           // tasks
//           // openModal,
//           // setOpenModal,
//           // selectedTask,
//           // setSelectedTask
//         }
//       }
//     >
//       {props.children}
//     </CalendarCtx.Provider>
//   );
// };

// export default CalendarProvider;
