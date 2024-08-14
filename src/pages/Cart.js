import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);

  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in before Proceeding");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs-tinysrgb&w-1260&h-750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-tittleFont font-bold text-lg">
                Rs {totalAmt}
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              Shipping <span>sector 20</span>
            </p>
          </div>
          <p className="font-tittleFont font-semibold flex justify-between mt-6">
            {" "}
            Total
            <span className="text-xl font-bold">Rs {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to Buy
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="..."
                name="Bazaar Online Shopping" // the pop-in header title
                amount={totalAmt * 100} // cents
                Label="Pay to bazaar" // prepended to the amount in the bottom pay button
                description={`Your Payment amount is Rs ${totalAmt}`} // the pop-in header subtitle
                email={userInfo.email}
              />
            </div>
          )}
        </div>
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

export default Cart;
