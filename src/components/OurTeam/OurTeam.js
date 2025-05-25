import React from 'react';
import abt from './../../images/icons/about.jpg';
import './team.css';
import Contact from '../Contact/Contact';

const OurTeam = () => {
  return (

    <>
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8 font-mono">
      <div className="md:w-1/2">
        <img src={abt} alt="About DigiX" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 text-justify">
        <p className="mb-6">
          At <strong>DIGI'X</strong>, we are committed to transforming the digital landscape with smart,
          scalable, and innovative solutions tailored for modern businesses. Founded with a vision to bridge
          the gap between technology and everyday business needs, we offer a full suite of digital services
          including web development, mobile app solutions, digital marketing, and branding.
        </p>
        <p>
          Our team of creative thinkers, developers, and strategists work collaboratively to build digital
          experiences that drive growth, enhance user engagement, and deliver measurable results. Whether
          you're a startup or an established brand, <strong>digiX</strong> is your trusted partner on the
          journey to success.
        </p>
        <p className="mt-4">
          Driven by a passion for innovation and a deep understanding of emerging trends, we stay ahead of
          the curve. With a client-first approach, transparency, and performance at our core—you're not just
          getting a service provider, you're gaining a partner. Let’s create something remarkable together.
        </p>
      </div>
     
    </div>

     <Contact/>
     </>
  );
};

export default OurTeam;
