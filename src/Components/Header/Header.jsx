import React, { useState } from 'react';
import { Menu, X, Sun, Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('marathi');

  // Content translations
  const content = {
    marathi: {
      name: "शेखर आमले",
      tagline: "तुमचे पीक संरक्षित करा, तुमचे उत्पन्न वाचवा!",
      whatsapp: "व्हॉट्सअॅप वर संपर्क करा",
      menu: {
        home: "मुख्यपृष्ठ",
        product: "उत्पादन",
        pricing: "किंमत",
        stories: "शेतकरी अनुभव",
        contact: "संपर्क"
      },
      cta: "आज मिळवा",
      langSelector: "भाषा:"
    },
    hindi: {
      name: "शेखर आमले",
      tagline: "अपनी फसल की रक्षा करें, अपनी आय बचाएं!",
      whatsapp: "व्हाट्सएप पर संपर्क करें",
      menu: {
        home: "होम",
        product: "उत्पाद",
        pricing: "मूल्य",
        stories: "किसान के अनुभव",
        contact: "संपर्क"
      },
      cta: "आज ही प्राप्त करें",
      langSelector: "भाषा:"
    },
    english: {
      name: "Shekhar Amale",
      tagline: "Protect Your Farm, Save Your Income!",
      whatsapp: "Contact on WhatsApp",
      menu: {
        home: "Home",
        product: "Product",
        pricing: "Pricing",
        stories: "Farmer Stories",
        contact: "Contact"
      },
      cta: "Get It Today",
      langSelector: "Language:"
    }
  };

  const activeText = content[language];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="text-white w-full">
      {/* Top Info Bar */}
      <div className="bg-green-800 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Phone size={16} className="mr-2" />
            <span className="font-medium mr-4">8329775373 / 8999718846</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span className="font-medium">एस.टी. ऑफिस समोर, मनिजा अपार्टमेंट, अकोला</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-red-700 via-red-800 to-purple-900 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          {/* Mobile view header row */}
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-2 mr-2 shadow-md">
                <Sun className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <div className="flex items-center">
                  <h1 className="text-xl sm:text-2xl font-bold">अँग्रो निर्मित</h1>
                  <span className="ml-2 text-yellow-200 border-l-2 border-yellow-200 pl-2 text-sm sm:text-base">{activeText.name}</span>
                </div>
                <p className="text-xs sm:text-sm text-yellow-200 italic">सोलार झटका मशीन</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md bg-red-700 hover:bg-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">


              {/* Language selector */}


              {/* CTA Button */}
              <Link to="/product">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-4 rounded-full shadow-md transition-all transform hover:scale-105 flex items-center">
                  <MessageCircle size={16} className="mr-1" />
                  {activeText.cta}
                </button>
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-2 pt-2 border-t border-red-600">
              <div className="flex flex-col space-y-3">


                {/* Mobile Language selector */}


                {/* Mobile CTA Button */}
                <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-4 rounded-full shadow-md transition-all flex items-center justify-center mt-2">
                  <MessageCircle size={16} className="mr-1" />
                  {activeText.cta}
                </button>
              </div>
            </div>
          )}


        </div>
      </header>
    </div>
  );
};

export default Header;