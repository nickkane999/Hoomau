import React from "react";
import {
  ModalBackground,
  ModalContainer,
  TitleCloseButton,
  Title,
  Body,
  Footer,
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
        <Title>
          <h1> Login Screen </h1>
        </Title>
        <Body>
          <p>asdas</p>
        </Body>
        <Footer>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button> Continue </button>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
