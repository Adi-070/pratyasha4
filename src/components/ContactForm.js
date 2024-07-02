// components/ContactForm.js
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xqazkpyb" // Replace with your Formspree endpoint
      method="POST"
      className="ml-auto space-y-4 w-full sm:w-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
      />
      <input
        type="text"
        name="number"
        placeholder="Your contact or email"
        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="6"
        className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3"
      ></textarea>
      <br /><br /><br />
      <button
        type="submit"
        className="text-white times-roman-like bg-black hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
      >
        Send
      </button>
      {status === 'SUCCESS' && <p className="text-green-500">Thanks! Your message has been sent.</p>}
      {status === 'ERROR' && <p className="text-red-500">Oops! There was an error.</p>}
    </form>
  );
}
