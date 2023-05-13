import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Something went Wrong')
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="bg-gray-100 py-10" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="contact" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">Get in touch</h2>
          <p className="text-gray-700 mb-4">Fill out the form below to send us a message and we'll get back to you as soon as possible!</p>
          <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} 
              className="shadow-sm block w-full sm:text-sm py-1 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} 
              className="shadow-sm block w-full sm:text-sm py-1 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} 
              className="shadow-sm py-1 px-2 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
