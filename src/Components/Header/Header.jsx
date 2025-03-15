import React, { useState } from 'react';
import { Menu, X, Sun, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('marathi');

  // Content translations
  const content = {
    marathi: {
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

  return (
    <div className=" text-white w-full">

      <header className="bg-gradient-to-r from-red-800 to-purple-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="bg-yellow-400 rounded-full p-2 mr-2">
              <svg className="w-6 h-6 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">अँग्रो निर्मित</h1>
              <p className="text-sm text-yellow-200">सोलार झटका मशीन</p>
            </div>
          </div>
          <div className="mt-2 md:mt-0 flex flex-col md:flex-row items-center">
            <div className="mr-4 flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="font-medium">8329775373 / 8999718846</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="font-medium">एस.टी. ऑफिस समोर, मनिजा अपार्टमेंट, अकोला</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;