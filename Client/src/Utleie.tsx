import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import Printer from "./assets/printer.png";
import Pc from "./assets/pc.png";
import Vr from "./assets/vr.webp";

// type Props = {
//   item: string;
//   setItem: (item: string) => void;
// };

const Utleie = () => {
  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  const navigate = useNavigate();
  const HandleSelect = (item: string) => {
    navigate("/Utleie/Godkjennelse?item=" + item + "");
  };

  return (
    <>
      <div className="h-full flex flex-row  justify-between mt-[100px] mb-[300px]">
        <div
          className="flex flex-col text-center align-middle ml-[100px] hover:scale-125 transition-[1s]"
          onClick={() => {
            HandleSelect("3DPrinter");
          }}
        >
          <img src={Printer} className="w-[300px] h-[200px] " />
          <h1 className="text-4xl font-bold text-center font-body mt-2">
            3D Printer
          </h1>
        </div>
        <div
          className="flex flex-col text-center align-middle hover:scale-125 transition-[1s] "
          onClick={() => {
            HandleSelect("Pc");
          }}
        >
          <img src={Pc} className="w-[300px] h-[200px] " />
          <h1 className="text-4xl font-bold text-center font-body mt-3">Pc</h1>
        </div>
        <div
          className="flex flex-col text-center align-middle mr-[100px] hover:scale-125 transition-[1s] "
          onClick={() => {
            HandleSelect("VR");
          }}
        >
          <img src={Vr} className="w-[300px] h-[200px]" />
          <h1 className="text-4xl font-bold text-center font-body mt-2">VR</h1>
        </div>
      </div>
    </>
  );
};

export default Utleie;
