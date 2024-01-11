const fetchProducts = async () => {
  try {
    const response = await fetch(
      /* "http://192.168.1.22/products/1" */ /* "http://192.168.1.22:3000/products/1" */ "http://192.168.193.73:3000/products/1",
      {
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
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProducts = async () => {
  try {
    const response = await fetch(
      /* "http://192.168.1.22/products" */ /* "http://192.168.1.22:3000/products" */ "http://192.168.193.73:3000/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProduct = async (type: string) => {
  try {
    const response = await fetch(
      /* "http://192.168.99.36:3000/products/" */ /* "http://192.168.1.22:3000/products/" */ "http://192.168.193.73:3000/products/" +
        type,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateProduct = async (
  id: string,
  name: string,
  date: number,
  amount: number
) => {
  try {
    const response = await fetch(
      /* "http://192.168.99.36:3000/products/" */ /* "http://192.168.1.22:3000/products/" */ "http://192.168.193.73:3000/products/" +
        id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          date: date,
          amount: amount,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const resetProduct = async (productIDs: string[], name: string) => {
  try {
    const response = await fetch(
      /* "http://192.168.1.22:3000/products/update/" */ "http://192.168.193.73:3000/products/update/" +
        name,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIDs: productIDs,
          name: name,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProductWithName = async (name: string) => {
  try {
    const response = await fetch(
      /* "http://192.168.99.36:3000/products/name/" */ /* "http://192.168.1.22:3000/products/name/" */ "http://192.168.193.73:3000/products/name/" +
        name,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const dataWithName = await response.json();
    const productIDs = dataWithName.map((obj) => obj.productID);
    console.log(dataWithName);
    console.log(productIDs);
    return productIDs;
  } catch (error) {
    console.error("Error:", error);
  }
};

export {
  fetchProducts,
  getProducts,
  getProduct,
  updateProduct,
  getProductWithName,
  resetProduct,
};
