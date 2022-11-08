import React from "react";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={styles.modal}>
      <header className={styles.modalHeader}>
        <h3>{props.header}</h3>
        {props.headerButton}
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={styles.modalContent}>{props.children}</div>

        <footer className={styles.modalFooter}>{props.footer}</footer>
      </form>
    </div>
  );
  return createPortal(content, document.getElementById("modalPortal"));
};
const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onClick} />}
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
