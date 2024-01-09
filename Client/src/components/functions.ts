const fetchProducts = async () => {
  try {
    const response = await fetch("http://192.168.1.22:3000/products/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "asd",
        productID: "1",
        name: "asd",
        date: "today",
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProducts = async () => {
  try {
    const response = await fetch("http://192.168.1.22:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProduct = async (type: string) => {
    try {
      const response = await fetch("http://192.168.1.22:3000/products/"+type, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
        },
      });
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = (type: string) => {
    const filter = { type: "Pc", name: "" };
    const update = { name, date };

    fetch("http://192.168.1.22:3000/products/"+type, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filter, update }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  






export { fetchProducts, getProducts, getProduct, handleUpdate   };
