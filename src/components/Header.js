import React from "react";
import { cart, logoDark, userLogo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-tittleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-25 h-13" src={logoDark} alt="logoDark" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cart} alt="cart" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-tittleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/Login">
            <img
              className="w-7 h-7 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-tittleFont font-semibold underline underline-offset-1">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
