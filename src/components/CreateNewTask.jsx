import React from "react";

const CreateNewTask = () => {
  const styles = {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: "0.2rem",
    width: "90%",
    height: "2rem",
    placeItems: "center",
    placeContent: "center",
    fontSize: "0.7rem",
    fontWeight: "bold",
    marginTop: "0.6rem",
    color: "rgb(97,97,97)",
  };
  return <button style={styles}>Create Event +</button>;
};

export default CreateNewTask;
