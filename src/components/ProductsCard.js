import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazaarSlice";
import { toast, ToastContainer } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;

  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div className="font-tittleFont text-base font-bold">
            <h2>{product.title}</h2>
            <div className="flex gap-2 relative overflow-hidden w-30 text-sm">
              <p className="line-through text-gray-500 gap-5">
                ₹{product.oldPrice}
              </p>
              <p className="font-semibold">₹{product.price.toFixed(2)}</p>
            </div>
            <div className="text-sm text-gray-500 gap-5">(20%`to 30% Off!)</div>
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              ) & toast.success(`${product.title} is added`)
            }
            className="text-sm w-full h-9 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div>
        <p>{product.category}</p>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
