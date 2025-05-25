import React from "react";
import "./Banner.css";
import banner from "../../../components/../images/logos/Frame.png";
import {Link} from "react-router-dom"
const Banner = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-20 items-center py-36">
        <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
          <h1 className="text-5xl font-semibold">
            Let’s Grow Your Brand To The Next Level
        </h1>
          <p className="text-xl  pt-3">
           we specialize in delivering innovative digital solutions tailored to your business needs. From web development services, we empower growth through technology and creativity.
          </p>
         <Link to="/contact">
          <button className="mt-8 rounded px-10 py-4 bg-primary text-white text-lg font-semibold">
            HIRE US
          </button>
         </Link> 
        </div>
        <div className="banner-image flex-1 ">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
