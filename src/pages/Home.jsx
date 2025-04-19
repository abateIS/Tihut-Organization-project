import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';
import childBg from '../assets/child-bg.png';

import { X } from 'lucide-react';
function Home() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowDonateModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div    className="bg-cover bg-center bg-no-repeat text-white py-15"
    style={{
      backgroundImage: `url(${childBg})` // ✅ Backticks let JS evaluate the variable
    }}>  
      {/* Hero Section */}
      
      <div className="relative  h-[500px]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white-900">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
  Tihut Children Education and <br /> Empowerment Ethiopia
</h1>   <br />
            <p className="text-white-900">Empowering the future through education</p>
            
          </div>
        </div>
      </div>
      <button
              onClick={() => setShowDonateModal(true)}
              className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition"
            >
              Support Our Cause
            </button>
      {/* Donation Modal */}
      {showDonateModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-modal-title"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 id="donation-modal-title" className="text-2xl font-bold text-gray-800 mb-4">
              Make a Donation
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Bank Account Details</h3>
                <p className="text-gray-600">Bank: Commercial Bank of Ethiopia</p>
                <p className="text-gray-600">Account Name: TCEEE</p>
                <p className="text-gray-600">Account Number: 1000336504574</p>
              </div>
              <div className="text-center mt-6">
                <p className="text-lg text-gray-700 mb-2">Thank you for your generosity!</p>
                <p className="text-gray-600">
                  Your donation will help us continue our mission of empowering children through
                  education in Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Programs Section */}
      <div className="py-16 text-white-500">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 text-4xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Providing quality education to underprivileged children</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-4xl mb-4">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">Building confidence and life skills in young minds</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-500 text-4xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Fostering creativity and problem-solving abilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Children Educated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;