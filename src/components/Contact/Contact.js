  // src/components/Contact/Contact.js
  import React, { useState } from "react";
  import { ref, push } from "firebase/database";
  import { database } from "../../firebase.init";

  const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(""); // ✅ new state for contact number
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !name || !phone || !message) {
        alert("Please fill all fields.");
        return;
      }

      // ✅ Basic phone number validation
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      try {
        await push(ref(database, "contacts"), {
          email,
          name,
          phone, // ✅ include phone in Firebase
          message,
          timestamp: new Date().toISOString(),
        });
        alert("Message submitted successfully!");
        setEmail("");
        setName("");
        setPhone(""); // ✅ reset phone
        setMessage("");
        setStatus("");
      } catch (error) {
        console.error("Error saving contact:", error);
        setStatus("Failed to submit message.");
      }
    };

    return (
      <div id="contact" className="font-mono bg-secondary mt-20 py-10">
        <h1 className="text-4xl font-semibold text-center text-secondary">
          Contact Us
        </h1>
        <h1 className="text-4xl font-semibold text-primary text-center">
          Stay connected with us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:px-0 px-20 md:w-4/12 mx-auto mt-8"
        >
          <input
            className="mb-4 py-4 px-4 rounded"
            type="email"
            placeholder="Enter Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mb-4 py-4 px-4 rounded"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 py-4 px-4 rounded"
            type="text"
            placeholder="Contact Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            className="py-4 px-4 rounded"
            placeholder="Your Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-10 rounded px-8 py-4 w-36 mx-auto bg-gradient-to-r from-primary to-secondary text-lg font-semibold text-white"
          >
            Submit
          </button>
          {status && <p className="text-center mt-4 text-white">{status}</p>}
        </form>
      </div>
    );  
  };

  export default Contact;
