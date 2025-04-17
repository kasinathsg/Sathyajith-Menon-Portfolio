"use client"

import React, { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:sathyajithmenon0208@gmail.com?subject=New message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Email: ${email}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };
  

  return (
    <div className="bg-black scale-[0.85] text-white min-h-screen flex items-center justify-center font-inter px-6 py-16">
      <div className="container px-6 lg:px-20 mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <p className="text-2xl text-neutral-400 mb-2">Let's Connect</p>
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-neutral-300 mb-6">
            Feel free to reach out! I'm always open to discussing new projects, collaborations, or just a friendly chat about technology and design. Let's explore opportunities together.
          </p>
          <div className="space-y-2 text-neutral-400 text-lg">
            <p>📞 +91 8078119557</p>
            <p>✉️ sathyajithmenon0208@gmail.com</p>
            <p>📍 Kerala, India</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 lg:pl-12 w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-4 text-lg border border-neutral-700 bg-black text-white rounded outline-none focus:border-red-700 transition-all duration-200"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-4 text-lg border border-neutral-700 bg-black text-white rounded outline-none focus:border-red-700 transition-all duration-200"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write something."
                className="w-full p-4 text-lg border border-neutral-700 bg-black text-white rounded h-32 resize-none outline-none focus:border-red-700 transition-all duration-200"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 transition-all duration-200 text-white py-3 px-6 rounded text-lg"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
