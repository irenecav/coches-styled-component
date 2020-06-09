import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { StyledModalContainer } from "./CarModal.styles";
import MdClose from "react-ionicons/lib/MdClose";
import image from "./../../assets/images/pill-image.jpg";

const CarModal = () => {
  const { showModal, modalCar, closeModal } = useContext(ModalContext);

  return (
    <StyledModalContainer
      isOpen={showModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{ overlay: { backgroundColor: "rgba(0,0,0,0.75)" } }}
    >
      <div>
        <MdClose
          fontSize="1.6rem"
          color="#292929"
          onClick={e => closeModal()}
        />
        <h2>
          {modalCar && modalCar.title}
          <span>{modalCar && modalCar.gas}</span>
        </h2>
        <img src={image} alt={modalCar && modalCar.title} />
      </div>
    </StyledModalContainer>
  );
};

export default CarModal;
