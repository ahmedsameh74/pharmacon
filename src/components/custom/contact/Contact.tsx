'use client';
import axios from 'axios';
import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://pharmacon-server.vercel.app/send-email',
        formData
      );
      if (response.status === 200) {
        toast.success('Email sent successfully');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send email');
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-12 flex flex-col lg:flex-row">
      {/* Left Column - Contact Information */}
      <div className="bg-[#3B5998] text-white p-10 lg:w-1/2 rounded-l-lg flex flex-col justify-between space-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
          <div className="space-y-6">
            <a href="tel:+201094743313" className="flex items-center">
              <FaPhoneAlt className="text-xl mr-4" />
              <p>+201094743313</p>
            </a>
            <a href="mailto:demo@gmail.com" className="flex items-center">
              <FaEnvelope className="text-xl mr-4" />
              <p>demo@gmail.com</p>
            </a>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl mr-4" />
              <p>
                132 Dartmouth Street Boston,
                <br />
                Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-8">
          <a href="#" className="text-2xl">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-white shadow-lg rounded-r-lg lg:w-1/2 p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-b-2 border-black p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ahmed"
                id="firstName"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-b-2 border-black p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sameh"
                id="lastName"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b-2 border-black p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="asameh1500@gmail.com"
                id="email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border-b-2 border-black p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+201094743313"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Write your message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b-2 border-black p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Write your message.."
              id="message"
              style={{ resize: 'none' }}
            ></textarea>
          </div>

          <div className="text-right">
            <button
              className="bg-[#3B5998] text-white py-3 px-8 rounded-lg hover:bg-blue-900 transition"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}
