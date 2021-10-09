import { useState } from "react";
import Modal from "#root/src/components/shared/modal/Modal";
import { useSessionData } from "#root/src/components/session/SessionContext";

const Modals = () => {
  const { loginModal } = useSessionData();
  const { openLoginModal, setOpenLoginModal } = loginModal;

  return <>{openLoginModal && <Modal closeModal={setOpenLoginModal} />}</>;
};

export default Modals;
