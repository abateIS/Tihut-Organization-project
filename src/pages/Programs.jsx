import React from 'react';
import { FaBook, FaLaptop, FaPalette, FaUsers, FaChalkboardTeacher, FaHandHoldingHeart } from 'react-icons/fa';

function Programs() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive educational and empowerment programs designed to nurture the
            potential of every child and create lasting positive impact in their lives.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">
              <FaBook />
            </div>
            <h2 className="text-2xl font-bold mb-4">Basic Education Support</h2>
            <p className="text-gray-600 mb-4">
              Our foundational program ensures children have access to quality basic education.
              We provide:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>School supplies and materials</li>
              <li>Tutoring and homework assistance</li>
              <li>Reading and writing workshops</li>
              <li>Mathematics and science support</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaLaptop />
            </div>
            <h2 className="text-2xl font-bold mb-4">Digital Literacy</h2>
            <p className="text-gray-600 mb-4">
              Preparing children for the digital age through:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Basic computer skills training</li>
              <li>Internet safety education</li>
              <li>Coding workshops for beginners</li>
              <li>Access to educational software</li>
            </ul>
          </div>
        </div>

        {/* Additional Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-yellow-500 text-3xl mb-4">
              <FaPalette />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Arts</h3>
            <p className="text-gray-600">
              Fostering creativity and self-expression through art, music, and drama programs.
              These activities help develop confidence and emotional intelligence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-500 text-3xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
            <p className="text-gray-600">
              Building future leaders through workshops, mentorship programs, and community
              service projects that develop essential leadership skills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-purple-500 text-3xl mb-4">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-xl font-semibold mb-2">Life Skills Training</h3>
            <p className="text-gray-600">
              Teaching practical life skills including financial literacy, communication,
              and problem-solving through interactive workshops.
            </p>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-4xl text-green-500 mb-6">
            <FaHandHoldingHeart />
          </div>
          <h2 className="text-3xl font-bold mb-6">Community Impact</h2>
          <p className="text-gray-600 mb-4">
            Our programs extend beyond individual children to create lasting impact in communities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Parent Engagement</h3>
              <p className="text-gray-600 mb-4">
                We work closely with parents through regular workshops and meetings to ensure
                they can support their children's educational journey effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
              <p className="text-gray-600 mb-4">
                Regular community events and awareness programs help create a supportive
                environment for children's education and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;