import React, { useContext } from "react";
import { data } from "../../data";
import Car from "../Car/Car";
import { StyledShowcaseDiv } from "./Showcase.styles";
import Button from "./../Button/Button";
import { ModalContext } from "./../../context/ModalContext";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

const Showcase = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <StyledShowcaseDiv>
      <h3>
        15.531 ofertas <span>de coches</span> seminuevos<span> y de </span>Km 0
      </h3>
      <ul>
        {data.map(car => (
          <Car key={car.id} car={car} onClick={e => openModal(car)} />
        ))}
      </ul>
      <Button
        msg="Ver ofertas"
        icon={<IosArrowForward fontSize="2.5rem" color="#fff" />}
      />
    </StyledShowcaseDiv>
  );
};

export default Showcase;
