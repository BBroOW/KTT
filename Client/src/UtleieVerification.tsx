import { useEffect, useState } from "react";
import Button from "./components/Button";
import { getProduct, handleUpdate } from "./components/functions";

const UtleieVerification = () => {
  const [sendInn, setSendInn] = useState(false);

  const handleExitClick = () => {
    if (amount <= products.length) {
      setSendInn(true);
      setError(false);
      handleUpdate("Pc");
    } else {
      setError(true);
    }
  };
  const [item, setItem] = useState("");
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get("item") || "";
    setItem(item);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (item) {
        const data = await getProduct(item);
        setProducts(data);
      }
    };
    getData();
  }, [item]);

  if (sendInn === false) {
    return (
      <>
        <div className="flex justify-center mt-7 font-body text-4xl">
          <h1>Utlån av {item}</h1>
        </div>

        <div className="flex justify-center h-fit mt-5 mb-5">
          <div className="flex flex-col justify-center bg-grey w-[700px] h-[600px] rounded-md">
            <div className="flex justify-center text-center  ">
              <h1 className="font-body w-[120px] bg-white rounded-md">
                Det er {products?.length || 0} ledige {item} til utlån
              </h1>
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Antall</h1>
              <input
                type="number"
                placeholder="Skriv antall her"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col p-4 mt-5">
              <h1 className="font-body text-2xl">Dato</h1>
              <input
                type="date"
                placeholder="Skriv datoen til dagen du henter utstyret"
                className="w-[600px] h-[50px] border-2 border-black p-2 mt-2 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                onClick={() => {
                  handleExitClick();
                }}
              />
            </div>
            {error && (
              <div className="flex justify-center font-body bg-red w-full text-2xl text-center items-center rounded-md">
                <div className="w-[360px] h-12 bg-red-500 font-bold items-center flex justify-center rounded-md">
                  <h1>Det er ikke så mange {item} igjen.</h1>
                </div>
              </div>
            )}
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
