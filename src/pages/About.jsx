import React from 'react';
import { FaHeart, FaHandsHelping, FaStar } from 'react-icons/fa';

function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6"> About Our Organization </h1>
          <p className="text-2xl text-purple-600 max-w-3xl mx-auto">
          ትሁት ችልድረን ኢዱኬሽን ኤንድ ኢምፓወርመንት ኢትዮጲያ
          </p>
          <p className="text-2xl text-blue-600 max-w-3xl mx-auto">
          Tihut Childern Education and Empowerment Ethiopia
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
            TCEE is a biblically mandated Christian organization whose purpose is directed in James 1:27, which states
"Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress."  
TCEE addresses the physical, mental, social and spiritual needs of orphans, vulnerable children, and their guardians within their 1  community. TCEE's specific aims are twofold.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
            We are inspired by the vision of:
Orphans and vulnerable children with spiritual, physical, mental, social and economic well-being
Nurtured by loving and supportive guardians
Living in empowered communities
Contributing to the development of a prosper and stronger nation of Ethiopia.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-500 text-4xl mb-4 flex justify-center">
                <FaHeart />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
              To show Christ-like love and encouragement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
              To develop sustainable community participation  
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-500 text-4xl mb-4 flex justify-center">
                <FaStar />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
              To focus on the welfare of the child, with impartiality and respect for all
              </p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
          Tihut Children Education and Empowerment Ethiopia (TCEE) is a local Christian, charitable, non-denominational, non-profit, non-government organization established on May 6,2010 in Ethiopia.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
          Tihut Children Education and Empowerment -Ethiopia has been registered and recorded legal personality as local organization in accordance with Ethiopian Civic Society Organization proclamations No 1113/2019. TCEE is an acronym for "Tihut Children Education and Empowerment ", and was founded from the desire to bring the light of Christ's hope to orphans, vulnerable children, and their guardians. We work with communities to support orphans and vulnerable children to reach their full potential as productive members of society.  

          </p>
        </div>
      </div>
    </div>
  );
}

export default About;