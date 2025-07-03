import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-3 text-center">Contact Us</h2>
      <p className="text-gray-600 text-center mb-6">
        Have a question about your order or our products? Fill out the form below and we’ll get back to you shortly.
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 px-4 py-2 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded-md"
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="border border-gray-300 px-4 py-2 rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
