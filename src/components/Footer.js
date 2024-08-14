import React from "react";
import { logoLight, paymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-tittleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        {/*---------------LogoIcon Start here------------------ */}
        <div className="flex flex-col gap-7">
          <img className="w-28" src={logoLight} alt="logoLight" />

          <p className="text-white text-s tracking-wide">Pradnya Panchariya</p>
          <img className="w-40" src={paymentLogo} alt="paymentLogo" />
          <div className="flex flex-row gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/*---------------LogoIcon End here-------------------- */}
        {/*---------------LocateUs Start here------------------ */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-3">
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Mumbai Maharashtra
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsFillTelephoneFill />
              </span>
              8421627931
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <CgMail />
              </span>
              pradnyapanchariya@gmail.com
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <ImGithub />
              </span>
              https://github.com/Pradnya2611
            </p>
          </div>
        </div>

        {/*---------------LocateUs End here-------------------- */}
        {/*---------------Profile Start here------------------- */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help and Support
            </p>
          </div>
        </div>

        {/*---------------Profile End here--------------------- */}
        {/*---------------Subscribe Start here------------------ */}

        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          ></input>
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
