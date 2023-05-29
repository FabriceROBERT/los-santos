import React from "react";
import Container from "./Container";
import Span from "../Titles/Span";
import Salon1 from "../Images/Salons/hmrvganu5cuvgnylcuzj.webp";

export default function Barbershop() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-x-10 pb-40">
        <div className="relative  rounded-md bg-neutral-800 shadow-2xl shadow-neutral-400  h-96">
          <img
            className=" absolute z-1 w-full h-full object-cover"
            src={Salon1}
            alt=""
          />
          <Span
            theme="soustitre"
            className=" z-10 mt-5 py-5"
            variant=""
            alignement="center"
          >
            Barber shop
          </Span>
          <Span theme="titre" className="z-10 " variant="" alignement="center">
            LOS SANTOS PARIS 14
          </Span>
        </div>

        <div className="rounded-md bg-neutral-800 h-96 shadow-2xl shadow-neutral-400">
          <Span
            theme="soustitre"
            className=" mt-5 py-5"
            variant=""
            alignement="center"
          >
            Barber shop
          </Span>
          <Span theme="titre" className=" " variant="" alignement="center">
            LOS SANTOS PARIS 11
          </Span>
        </div>
        <div className="rounded-md bg-neutral-800 h-96 shadow-2xl shadow-neutral-400">
          <div className="relative  ">
            <Span
              theme="soustitre"
              className=" mt-5 py-5"
              variant=""
              alignement="center"
            >
              Tattoo shop
            </Span>
            <Span theme="titre" className=" " variant="" alignement="center">
              LOS SANTOS TATTOO
            </Span>
          </div>
        </div>
      </div>
    </Container>
  );
}
