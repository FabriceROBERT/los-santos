import React from "react";
import LosSantos from "../Images/Logo/4LRnVEv.png";

export default function Header() {
  return (
    <div className="relative flex justify-center">
      <img
        className=" absolute w-auto h-72"
        src={LosSantos}
        alt="logo Los Santos"
      />
    </div>
  );
}
