import React from "react";
import "../css/index.css";
import Illustration from "../Images/Background/photo-1578399339237-a9f7e41789e7.avif";
import Container from "../Components/Container";
import Header from "../Components/Header";

export default function Homepage() {
  return (
    <div>
      <div className=" w-full pb-20 ">
        <div
          className=" bg-repeat object-cover w-full pb-40 h-96 opacity-95"
          style={{ backgroundImage: ` url(${Illustration})` }}
        >
          <Container className=" Z-12 text-black bg-yellow-500">
            <Header />
          </Container>
        </div>
      </div>
    </div>
  );
}
