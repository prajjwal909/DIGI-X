import React, { useEffect } from "react";
import logo from "../../../images/logos/icon.png";
import wtsp from "../../../images/whatsappImg.png";
import call from "../../../images/talkToUsImg.png";
import './Footer.css';
import { FaArrowUpLong } from "react-icons/fa6";
const Footer = () => {
  // Optional: Scroll-to-top button show/hide
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
        btn?.classList.add('show');
      } else {
        btn?.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <footer className="footer p-10 text-base-content font-mono footer-info text-center bg-primary">
        <div className="md:pl-20 pl-4 mx-auto " style={{width:"20%"}}>
          <img className="" src={logo} alt="Logo" style={{width:"67%" ,background:"white",borderRadius:'100px'}}/>
          <p className="text-2xl font-semibold text-secondary">Creative Agency</p>
          <p>Your New Smile Starts Here</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">Services</span>
          <p className="text-xl text-white">Branding</p>
          <p className="text-xl text-white">Design</p>
          <p className="text-xl text-white">Marketing</p>
          <p className="text-xl text-white">Advertisement</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">Company</span>
          <p className="text-xl text-white">About us</p>
          <p className="text-xl text-white">Contact</p>
          <p className="text-xl text-white">Jobs</p>
          <p className="text-xl text-white">Press kit</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">Legal</span>
          <p className="text-xl text-white">Terms of use</p>
          <p className="text-xl text-white">Privacy policy</p>
          <p className="text-xl text-white">Cookie policy</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <span className="fixed-talk">
        <a
          href="https://wa.me/7424941148?text=Welcome to%20DIGI'X%20We%20Provide%20web%20Services%20to%20grow%20your%20business"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wtsp} alt="WhatsApp Icon" />
        </a>
      </span>

      {/* Call Button */}
      <span className="fixed-whatsapp">
        <a href="tel:+7424941148">
          <img src={call} alt="Call Icon" />
        </a>
      </span>

      {/* Back to Top */}
      <button  onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <FaArrowUpLong />
      </button>
    </div>
  );
};

export default Footer;

