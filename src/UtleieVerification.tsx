import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const UtleieVerification = () => {
  const [sendInn, setSendInn] = useState(false);
  const handleExitClick = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    console.log(sendInn);
  }, [sendInn]);

  if (sendInn === false) {
    return (
      <>
        <div className="flex justify-center mt-7 font-body text-4xl">
          <h1>Utlån av X</h1>
        </div>

        <div className="flex justify-center mt-5 mb-5">
          <div className="flex flex-col justify-center bg-grey w-[700px] h-[600px] rounded-md">
            <div className="flex justify-center text-center  ">
              <h1 className="font-body w-[120px] bg-white rounded-md">
                Det er X ledige
              </h1>
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Antall</h1>
              <input
                type="text"
                placeholder="Skriv antall her"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
              />
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Dato</h1>
              <input
                type="date"
                placeholder="Skriv datoen til dagen du henter utstyret"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
              />
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Lærer</h1>
              <input
                type="text"
                placeholder="Skriv navn til ansvarlig lærer"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
              />
            </div>
            <div className="">
              <Button
                contents="Send inn"
                buttonType="secondary"
                type="submit"
                onClick={() => {
                  setSendInn(true);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  if (sendInn === true) {
    return (
      <>
        <h1>YIPPIE</h1>
      </>
    );
  }
};

export default UtleieVerification;
