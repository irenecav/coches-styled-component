import React from "react";
import {
  StyledCarCard,
  StyledCarWrapperPrice,
  StyledCarWrapperkm,
  StyledCarWrapperImage,
} from "./Car.styles";
import image from "./../../assets/images/pill-image.jpg";
import MdHeart from "react-ionicons/lib/MdHeart";
import MdCalendar from "react-ionicons/lib/MdCalendar";

const Car = ({ car, onClick }) => {
  return (
    <StyledCarCard onClick={onClick}>
      <StyledCarWrapperImage>
        <img src={image} alt={car.title} />
      </StyledCarWrapperImage>

      <StyledCarWrapperPrice>
        <MdHeart fontSize="1.6rem" color="#DBDBDB" />
        <p>{car.price}</p>
      </StyledCarWrapperPrice>
      <h2>
        {car.title}
        <span>{car.gas}</span>
      </h2>
      <StyledCarWrapperkm>
        <p>{car.km}</p>

        <div>
          <MdCalendar fontSize="1rem" color="#DBDBDB" className="calendar" />
          <p>{car.year}</p>
        </div>
      </StyledCarWrapperkm>
    </StyledCarCard>
  );
};

export default Car;
