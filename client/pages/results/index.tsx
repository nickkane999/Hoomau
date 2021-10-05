import { useState } from "react";
import Modal from "#root/src/components/shared/Modal";

const Results = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h1>My Results</h1>
      <p>Add my results here</p>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
};

export default Results;
