import React from "react";
import { useState } from "react";

export const ModalContext = React.createContext();

function ModalProvider(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalCar, setModalCar] = useState(null);

  const openModal = car => {
    setShowModal(true);
    setModalCar(car);
    console.log(car);
  };

  const closeModal = car => {
    setShowModal(false);
    setModalCar(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        showModal,
        modalCar,
        closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
