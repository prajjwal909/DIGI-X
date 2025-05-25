import React from "react";
import Graphic from "../../../src/images/icons/service1.png";
import WebDesign from "../../../src/images/icons/service3.png";
import Development from "../../../src/images/icons/service4.png";
import Contact from "../Contact/Contact";
const Service = () => {
  return (
    <>
    <div className="mt-36 font-mono px-4 lg:px-20 mb-5">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Provide awesome <span className="text-green-600">services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Web & Mobile Design */}
        <div className="card w-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <figure className="pt-6">
            <img className="w-28" src={WebDesign} alt="Web Design" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Web & Mobile Design</h2>
            <p>
              Engaging UI/UX for websites and mobile apps, tailored to user
              behavior and brand identity.
            </p>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="card w-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <figure className="pt-6">
            <img className="w-28" src={Graphic} alt="Graphic Design" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Graphic Design</h2>
            <p>
              Creative designs for branding, social media, and marketing to
              make your business visually stand out.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="card w-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300">
          <figure className="pt-6">
            <img className="w-28" src={Development} alt="Web Development" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Web Development</h2>
            <p>
              Fast, responsive, and scalable websites built using modern
              technologies to power your business online.
            </p>
          </div>
        </div>
      </div>

   
    </div>
       <Contact/>
       </>
  );
};

export default Service;
