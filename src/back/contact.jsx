import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    access_key: "d11cabe4-3739-498b-9718-dc0f72b89bd3", // replace this with your Web3Forms access key
    subject: "New Submission from Web3Forms",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      if (response.status === 200) {
        setResult("✅ " + json.message);
        setFormData({
          name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
          access_key: formData.access_key,
          subject: formData.subject
        });
      } else {
        setResult("❌ " + json.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    }

    setTimeout(() => setResult(""), 5000);
  };

  return (
    <div id="Contact">   
    <div className="text-2xl text-center"><b>Contact</b> With Us</div>
    <div className="text-center">Ready to Make a Move?<br/> Let’s Build Your</div>
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto mt-[50px]"> 
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
        rows="4"
      ></textarea>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Message
      </button>

      <p className="text-sm text-gray-600">{result}</p>
    </form>
    </div>
 
  );
};

export default Contact;
