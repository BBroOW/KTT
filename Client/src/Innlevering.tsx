import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { getProduct, resetProduct } from "./components/functions";

interface Product {
  productID: string;
  name: string;
}

const Innlevering: React.FC = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [productIDs, setProductIDs] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (productIDs.length && name !== "") {
      const message = await resetProduct(productIDs, name);
      console.log(message);
      if (message[0] !== null) {
        setHasSubmitted(true);
      } else {
        setError(true);
        // If the update is not successful, do not navigate.
      }
    }
  };

  const handleEndClick = () => {
    navigate("/");
  };

  if (hasSubmitted === false) {
    return (
      <>
        <div className="flex justify-center mt-7 font-body text-4xl">
          <h1>Innlevering</h1>
        </div>

        <div className="flex justify-center h-fit mt-5 mb-5">
          <div className="flex flex-col justify-center bg-grey w-[700px] h-[600px] rounded-md">
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">
                Nummer på utstyret som skal leveres
              </h1>
              <input
                type="text"
                placeholder="Skriv komma mellom hvert nummer"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
                min="0"
                value={productIDs}
                onChange={(e) => setProductIDs(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Lærer</h1>
              <input
                type="text"
                placeholder="Skriv navn til ansvarlig lærer"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="">
              <Button
                contents="Send inn"
                buttonType="secondary"
                type="submit"
                onClick={(e) => handleSubmitClick(e)}
              />
            </div>
            {error && (
              <div className="flex justify-center font-body bg-red w-full text-2xl text-center items-center rounded-md">
                <div className="w-[360px] h-12 bg-red-500 font-bold items-center flex justify-center rounded-md">
                  <h1>Noe gikk feil! grr</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center w-full">
          <div className="flex justify-center flex-col">
            <h1 className="flex text-center justify-center mt-5 font-body text-3xl"></h1>
            <div className="flex justify-center items-center w-[800px] h-[500px] bg-grey mt-5 mb-10 rounded-md">
              <div className="flex w-[800px] h-[500px] bg-grey mt-5 mb-10 rounded-md flex-col ">
                <h1 className="text-center itmes-center mt-32 mb-[270px] text-3xl font-body font-bold">
                  Utstyret er levert
                </h1>
                <div className="flex items-end ml-2 ">
                  <Button
                    contents="Avslutt"
                    buttonType="secondary"
                    type="submit"
                    onClick={handleEndClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Innlevering;
