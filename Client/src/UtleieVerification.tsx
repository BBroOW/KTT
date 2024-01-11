import { useEffect, useState } from "react";
import Button from "./components/Button";
import {
  getProduct,
  getProductWithName,
  updateProduct,
} from "./components/functions";

interface Product {
  productID: string;
  name: string;
  date: number;
}

const UtleieVerification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sendInn, setSendInn] = useState(false);
  const [item, setItem] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const [ending, setEnding] = useState("er");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productsNameFilter, setProductsNameFilter] = useState<Product[]>([]);

  useEffect(() => {
    if (item === "Pc") {
      setEnding("er");
    }
    if (item === "VR") setEnding("-briller");
    if (item === "3Dprinter") setEnding("e");
  });

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

  const handleExitClick = async () => {
    if (
      products.length >= amount &&
      name !== "" &&
      date !== "" &&
      amount !== 0
    ) {
      setError(false);
      await updateProduct(item, name, date, parseInt(amount));
      setSendInn(true);
      const product = await getProductWithName(name);
      console.log(product.productID);
    } else {
      setError(true);
    }
  };

  if (sendInn === false) {
    return (
      <>
        <div className="flex justify-center mt-7 font-body text-4xl">
          <h1>Utlån av {item + ending}</h1>
        </div>

        <div className="flex justify-center h-fit mt-5 mb-5">
          <div className="flex flex-col justify-center bg-grey w-[700px] h-[600px] rounded-md">
            <div className="flex justify-center text-center  ">
              <h1 className="font-body w-[120px] bg-white rounded-md">
                Det er{" "}
                {products?.filter((product) => product.name === "").length || 0}{" "}
                ledige {item + ending} til utlån
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
                min="0"
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
                onClick={handleExitClick}
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
  }

  if (sendInn === true) {
    return (
      <>
        <div className="flex justify-center w-full">
          <div className="flex justify-center flex-col">
            <h1 className="flex text-center justify-center mt-5 font-body text-3xl">
              Dine {item + ending}
            </h1>
            <div className="flex justify-center items-center w-[800px] h-[500px] bg-grey mt-5 mb-10 rounded-md">
              <div>
                <div className="flex justify-center w-full">
                  <div className="flex justify-center flex-col">
                    <h1 className="flex text-center justify-center mt-5 font-body text-3xl">
                      Dine {item + ending}
                    </h1>
                    <div className="flex justify-center items-center w-[800px] h-[500px] bg-grey mt-5 mb-10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UtleieVerification;
