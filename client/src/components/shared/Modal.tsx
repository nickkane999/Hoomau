import React from "react";
import {
  ModalBackground,
  ModalContainer,
  TitleCloseButton,
} from "./Modal.styled";

const Modal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseButton
          onClick={() => {
            closeModal(false);
          }}
        >
          <button>X</button>
        </TitleCloseButton>
        <div className="title">
          <h1> Login Screen </h1>
        </div>
        <div className="body">asdas</div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button> Continue </button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
