import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Container from "./Container";
import Image0 from "../Images/Freshcut/0.jpg";
import Image1 from "../Images/Freshcut/1.jpg";
import Image2 from "../Images/Freshcut/2.jpg";
import Image3 from "../Images/Freshcut/3.jpg";
import Image4 from "../Images/Freshcut/4.jpg";
import Image5 from "../Images/Freshcut/5.jpg";
import Image6 from "../Images/Freshcut/6.jpg";
import Image7 from "../Images/Freshcut/7.jpg";
import Image8 from "../Images/Freshcut/8.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className=""
    src={Image1}
    mouseTracking
    disableButtonsControls
    autoPlayInterval="3000"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img src={Image0} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image2} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image3} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image4} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image5} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image6} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image7} onDragStart={handleDragStart} role="presentation" />,
  <img src={Image8} onDragStart={handleDragStart} role="presentation" />,
];
export default function Carousel() {
  return (
    <Container>
      <AliceCarousel autoPlay infinite mouseTracking items={items} />
    </Container>
  );
}
