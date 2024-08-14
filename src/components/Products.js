import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-black text-center text-bold gap-2 text-[19px]">
          If you can't stop thinking about it just...... <br />
          <p className="text-2xl hover:text-gray-700">BUY IT</p>
          <p className="text-pretty text-[20px]">
            💥Hurry up, limited time offer just grab it💥
          </p>
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
