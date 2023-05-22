import React from "react";
import logo from "../assets/images/logo/logo2.png";
import p1 from "../assets/images/payment/cod.png";
import p2 from "../assets/images/payment/visa.png";
import p3 from "../assets/images/payment/mastercard.png";
import p4 from "../assets/images/payment/americanexpress.png";
import p5 from "../assets/images/payment/bkash.png";
import p6 from "../assets/images/payment/nagad.png";
import p7 from "../assets/images/payment/rocket.png";
import s1 from "../assets/images/icon/s-fb.png";
import s2 from "../assets/images/icon/s-insta.png";
import s3 from "../assets/images/icon/s-twitter.png";
import s4 from "../assets/images/icon/s-yt.png";
import s5 from "../assets/images/icon/s-linkedin.png";
import s6 from "../assets/images/icon/s-github.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-[#222222] text-white">
      <div className="max-w-[1280px] mx-auto px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6">
          <div className="">
            <img className="w-[100px] py-3" src={logo} alt="" />
            <h1 className="text-xl mb-3">Payment methods</h1>
            <div className="flex justify-start">
              <div className="grid grid-cols-3 gap-[4px]">
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className=" w-[80%] h-[90%]" src={p1} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className=" w-[80%] h-[90%]" src={p2} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className="  w-[80%] h-[90%]" src={p3} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className="  w-[80%] h-[90%]" src={p4} alt="" />
                </div>
                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className="  w-[80%] h-[90%]" src={p5} alt="" />
                </div>

                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className="  w-[80%] h-[90%]" src={p6} alt="" />
                </div>

                <div className="flex justify-center items-center p-2 bg-white w-[50px] h-[30px] rounded-sm">
                  {" "}
                  <img className="  w-[80%] h-[100%]" src={p7} alt="" />
                </div>



              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl mb-3">Customer care</h1>
            <p className="text-[#afafaf] mb-1">Help Center</p>
            <p className="text-[#afafaf] mb-1">How to Buy</p>
            <p className="text-[#afafaf] mb-1">Returns and Refunds</p>
            <p className="text-[#afafaf] mb-1">Contact Us</p>
            <p className="text-[#afafaf] mb-1">Terms & Conditions</p>
          </div>

          <div className="">
            <h1 className="text-xl mb-3">About</h1>
            <p className="text-[#afafaf] mb-1">About Us</p>
            <p className="text-[#afafaf] mb-1">Digital Payments</p>
            <p className="text-[#afafaf] mb-1">Privacy Policy</p>
          </div>

          <div className="">
            <h1 className="text-xl mb-3">Find us</h1>
            <div className="flex">
            <div className="grid grid-cols-3 gap-2">
              <Link target="_blank" to='https://www.facebook.com/sboy.showrav'><img className="w-[30px]" src={s1} alt="fb" /></Link>
              <Link target="_blank" to='https://www.instagram.com/shazzad.srv/'><img className="w-[30px]" src={s2} alt="fb" /></Link>
              <Link target="_blank" to=''><img className="w-[30px]" src={s3} alt="fb" /></Link>
              <Link target="_blank" to='https://www.youtube.com/channel/UCEKGNMd1yhaSZHV8c5vynqg'><img className="w-[30px]" src={s4} alt="fb" /></Link>
              <Link target="_blank" to='https://www.linkedin.com/in/shazzad-hossen-b87ab7260/'><img className="w-[30px]" src={s5} alt="fb" /></Link>
              <Link target="_blank" to='https://github.com/Shazzad-Hossen'><img className="w-[30px]" src={s6} alt="fb" /></Link>

            </div>
            </div>
          </div>

          
        </div>
      </div>

      <div className="text-center p-2  text-white border-t-[1px] border-[#000000] bg-[#1b1b1b]">
        © Copyright 2023 | Alrights reserved by SPEEDY MINI
      </div>
    </div>
  );
};

export default Footer;
