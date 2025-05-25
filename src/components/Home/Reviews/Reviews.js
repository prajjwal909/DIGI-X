import React from "react";
import { FaBolt, FaUserCog, FaUsers, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="mt-32 font-mono px-6 lg:px-20">
      <h1 className="text-center text-4xl text-primary font-bold">
        Why <span className="text-green-600">Choose Us</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <FaBolt className="text-5xl text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fast Turnaround</h2>
          <p>
            Get a professional static website in 2 days, and dynamic sites in just 5–6 days.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <FaUserCog className="text-5xl text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Customized Solutions</h2>
          <p>
            We tailor each project to match your business goals and audience perfectly.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <FaUsers className="text-5xl text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expert Team</h2>
          <p>
            Our skilled developers combine creativity with the latest tech to deliver excellence.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl p-6 text-center">
          <FaHeadset className="text-5xl text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Reliable Support</h2>
          <p>
            From project start to post-launch, we provide clear and responsive support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
