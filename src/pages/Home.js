import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);
  return (
    <div>
      <Banner />
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};
export default Home;
