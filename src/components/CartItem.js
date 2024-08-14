import React from "react";
import { FaTrash } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazaar.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-tittleFont text-2xl">Shopping Cart</h2>
      </div>

      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <FaTrash
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
            </div>
            <img
              className="w-max h-32 object-cover  gap-2"
              src={item.image}
              alt="productImg"
            />

            <div>
              <h2 className="w-52 font-semibold">{item.title}</h2>
              <p className="w-58 text-sm gap-5 text-gray-900">
                {item.description}
              </p>
              <p className="w-10 text-orange-500">₹{item.price.toFixed(2)}</p>
            </div>

            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <span
                onClick={() =>
                  dispatch(
                    decrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </span>
              {item.quantity}
              <span
                onClick={() =>
                  dispatch(
                    increamentQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </span>
            </div>

            <p className="w-14">₹{item.quantity * item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
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

export default CartItem;
