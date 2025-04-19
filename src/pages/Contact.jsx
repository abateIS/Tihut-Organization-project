import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions about our programs,
            volunteering opportunities, or how you can support our cause.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 text-xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 text-xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                  <h3>North America</h3>
      <p>Phone: +1(236)880-5448</p>
      <p>Phone: +1(647)608-0401</p>
      <h3>Ethiopian</h3>
      <p>Phone: +12368805448</p>
      <p>Phone: +251 916 822 508</p>
      <p>Phone: +251 912 970 998</p>

                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 text-xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">tihutchildreneducation@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 text-xl mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Volunteer With Us</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for passionate volunteers to join our cause. Whether you're
                interested in teaching, organizing events, or providing administrative support,
                there's a place for you in our team.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Support Our Cause</h3>
              <p className="text-gray-600 mb-4">
                Your support can make a difference in a child's life. Learn about our donation
                programs and how you can contribute to our mission of empowering children through
                education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;