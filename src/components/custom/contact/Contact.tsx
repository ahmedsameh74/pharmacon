/* eslint-disable prettier/prettier */
'use client';
import axios from 'axios';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  // FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  // FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
    case 'firstName':
      return value.trim() === '' ? 'First name is required' : '';
    case 'lastName':
      return value.trim() === '' ? 'Last name is required' : '';
    case 'email':
      if (value.trim() === '') {
        return 'Email is required';
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Email address is invalid';
      }
      return '';
    case 'phone':
      return value.trim() === '' ? 'Phone number is required' : '';
    case 'message':
      return value.trim() === '' ? 'Message is required' : '';
    default:
      return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate field on input change
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields before submitting
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    const isValid = !Object.values(newErrors).some((error) => error);

    if (isValid) {
      try {
        const response = await axios.post(
          'https://pharmacon-server.vercel.app/send-email',
          formData
        );
        setLoading(true);
        if (response.status === 200) {
          toast.success('Email sent successfully');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
          setLoading(false);
        }
      } catch (error) {
        toast.error('Failed to send email');
        setLoading(false);
      }
    } else {
      toast.error('Please fill all required data');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-12 flex flex-col lg:flex-row">
      {/* Left Column - Contact Information */}
      <div className="relative bg-[#01547E] text-white p-10 lg:w-1/2 rounded-l-lg flex flex-col justify-between space-y-8">
        {/* Circles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-60 h-60 bg-white opacity-10 rounded-full bottom-[-40px] right-[-40px]"></div>
          <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full bottom-20 right-20"></div>
        </div>

        <div className="relative">
          <h2 className="text-3xl font-semibold mb-8">{t('contactInfo')}</h2>
          <div className="space-y-6">
            {/* Email */}
            <a href="mailto:info@pharmaconeg.com" className="flex items-center">
              <div className="text-xl">
                <FaEnvelope className={`${locale === 'ar' ? 'ml-4' : 'mr-4'}`} />
              </div>
              <p>info@pharmaconeg.com</p>
            </a>
            {/* Address */}
            <div className="flex items-center">
              <div className="text-xl">
                <FaMapMarkerAlt className={`${locale === 'ar' ? 'ml-4' : 'mr-4'}`} />
              </div>
              <p>
          2 Mohamed Abdelhalim Abdullah, From Hassanen Hekal St, From Abbas El Akkad St,
          Beside Dar El Hekma Hospital, 5th Floor, Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        <div className={`flex ${locale === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'} mt-8 relative z-20`}>
          {/* Social Links */}
          <a href="https://www.facebook.com/pharmaconEgypt" target='_blank' className="text-2xl" rel="noreferrer" aria-label='Facebook'>
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/pharmacon-pharmaceuticals/" target='_blank' className="text-2xl" rel="noreferrer" aria-label='Linkedin'>
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@pharmaconpharmaceuticals6630" target='_blank' className="text-2xl" rel="noreferrer" aria-label='Youtube'>
            <FaYoutube />
          </a>
        </div>
      </div>


      {/* Right Column - Contact Form */}
      <div className="bg-white shadow-lg rounded-r-lg lg:w-1/2 p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                {t('firstName')}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border-b-2 p-3 rounded-sm focus:outline-none focus:ring-2 ${
                  errors.firstName ? 'border-red-500' : 'border-black'
                }`}
                placeholder="First Name"
                id="firstName"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                {t('lastName')}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border-b-2 p-3 rounded-sm focus:outline-none focus:ring-2 ${
                  errors.lastName ? 'border-red-500' : 'border-black'
                }`}
                placeholder="last Name"
                id="lastName"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border-b-2 p-3 rounded-sm focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500' : 'border-black'
                }`}
                placeholder="mail@example.com"
                id="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                {t('phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border-b-2 p-3 rounded-sm focus:outline-none focus:ring-2 ${
                  errors.phone ? 'border-red-500' : 'border-black'
                }`}
                placeholder="+20123456789"
                id="phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              {t('message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full border-b-2 p-3 rounded-sm focus:outline-none focus:ring-2 ${
                errors.message ? 'border-red-500' : 'border-black'
              }`}
              rows={4}
              placeholder={t('message') + '...'}
              id="message"
              style={{ resize: 'none' }}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="text-right">
            <button
              disabled={loading}
              className="bg-[#01547E] text-white py-3 px-8 rounded-lg hover:bg-blue-900 transition"
              type="submit"
            >
              {t('send')}
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
