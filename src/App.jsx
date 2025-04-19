import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import logo from './assets/logo.png';
import childBg from './assets/child-bg.png';
import { X,Menu } from 'lucide-react';

function App() {
  // Add state for donation modal
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-[#1a1a40] shadow-lg fixed w-full z-10 pb-2">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <img src={logo} width={160} className="mt-4" alt="Logo" />
      </div>

      {/* Hamburger icon (Mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-blue-300 transition">Home</Link>
        <Link to="/about" className="text-white hover:text-blue-300 transition">About</Link>
        <Link to="/programs" className="text-white hover:text-blue-300 transition">Programs</Link>
        <Link to="/contact" className="text-white hover:text-blue-300 transition">Contact</Link>
        <button
          onClick={() => setShowDonateModal(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition shadow-md"
        >
          Donate
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden mt-2 space-y-2 text-center">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-blue-300">Home</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-blue-300">About</Link>
        <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-blue-300">Programs</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-white hover:text-blue-300">Contact</Link>
        <button
          onClick={() => {
            setShowDonateModal(true);
            setMobileMenuOpen(false);
          }}
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition shadow-md"
        >
          Donate
        </button>
      </div>
    )}
  </div>
</nav>
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

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
    <footer className="bg-[#1a1a40] text-white py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-bold mb-4"><u>Contact Us</u></h3>
      <p>Founder & Managing Director: <b>Dr Mesfin Abebe</b></p>
      <p>Email: tihutchildreneducation@gmail.com</p>
      <h3>North America</h3>
      <p>Phone: +1(236)880-5448</p>
      <p>Phone: +1(647)608-0401</p>
      <h3>Ethiopian</h3>
      <p>Phone: +12368805448</p>
      <p>Phone: +251 916 822 508</p>
      <p>Phone: +251 912 970 998</p>
      <p>Addis Ababa, Ethiopia</p>
    </div>
    <div className="text-center mt-8 pt-8 border-t border-gray-700">
      <p>© 2024 Tihut Children Education and Empowerment Ethiopia. All rights reserved.</p>
    </div>
  </div>
</footer>



      </div>
    </Router>
  );
}

export default App;