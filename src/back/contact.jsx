import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    access_key: "d11cabe4-3739-498b-9718-dc0f72b89bd3",
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
    <div id="Contact" className="px-4 py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Contact <span className="font-normal">With Us</span></h2>
        <p className="text-gray-600 mt-2">Ready to Make a Move?<br /> Let’s Build Your Vision</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition duration-200"
        >
          Send Message
        </button>

        <p className="text-center text-sm text-gray-600">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
