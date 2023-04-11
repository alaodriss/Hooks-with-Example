import axios from "./axios";
import React, { useEffect, useState } from "react";

const fetchwithaxios = () => {
  const [products, setProducts] = useState([]);
  const [error, setEerror] = useState("");
  
  useEffect(() => {
    getProducts();
    // With normle axios get 

    // axios
    //   .get("/products")
    //   .then((res) => setProducts(res.data.products))
    //   .catch((error) => setEerror(error.message))
  }, []);


// With async axios get 

  async function getProducts() {
    try {
      const response = await axios.get("/products");
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      setEerror(error.message);
    }
  }

  return (
    <div>
      {error !== "" && error}
      {products.map((product, index) => {
        return (
          <h4 key={index}>
            {product.title} -- ${product.price}
          </h4>
        );
      })}
    </div>
  );
};

export default fetchwithaxios;
