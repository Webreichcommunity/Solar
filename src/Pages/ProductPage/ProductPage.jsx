import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, PauseCircle } from 'lucide-react';

// Main Product Page Component
function SolarZatkaProductPage() {
  const [language, setLanguage] = useState('marathi');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const videoRef = useRef(null);

  // Calculator state
  const [landSize, setLandSize] = useState(1);
  const [voltage, setVoltage] = useState(5);
  const [solarWattage, setSolarWattage] = useState(10);
  const [price, setPrice] = useState(0);

  // Language content
  const content = {
    marathi: {
      title: "सोलर झटका मशीन",
      subtitle: "तुमच्या शेतीसाठी अत्याधुनिक संरक्षण",
      desc: "आमची सोलर झटका मशीन तुमच्या पिकांना वन्यप्राण्यांपासून संरक्षण देते आणि वीज बिलात बचत करते.",
      components: "मशीनचे भाग",
      benefits: "फायदे",
      calculator: "किंमत कॅल्क्युलेटर",
      faqs: "सामान्य प्रश्न",
      video: "कार्य प्रात्यक्षिक",
      calculate: "किंमत काढा",
      landSizeLabel: "जमिनीचे क्षेत्रफळ (एकर)",
      voltageLabel: "वोल्टेज आवश्यकता",
      solarWattageLabel: "सोलर पॅनेल वॅटेज",
      priceResult: "अंदाजे किंमत: ₹",
      watchVideo: "व्हिडिओ पहा",
      stopVideo: "व्हिडिओ थांबवा",
    },
    hindi: {
      title: "सोलर झटका मशीन",
      subtitle: "आपकी खेती के लिए आधुनिक सुरक्षा",
      desc: "हमारी सोलर झटका मशीन आपकी फसलों को जंगली जानवरों से बचाती है और बिजली के बिल में बचत करती है।",
      components: "मशीन के पार्ट्स",
      benefits: "लाभ",
      calculator: "कीमत कैलकुलेटर",
      faqs: "आम सवाल",
      video: "कार्य प्रदर्शन",
      calculate: "कीमत निकालें",
      landSizeLabel: "जमीन का क्षेत्रफल (एकड़)",
      voltageLabel: "वोल्टेज आवश्यकता",
      solarWattageLabel: "सोलर पैनल वॉटेज",
      priceResult: "अनुमानित कीमत: ₹",
      watchVideo: "वीडियो देखें",
      stopVideo: "वीडियो रोकें",
    },
    english: {
      title: "Solar Zatka Machine",
      subtitle: "Modern Protection for Your Farming",
      desc: "Our Solar Zatka Machine protects your crops from wild animals and saves on electricity bills.",
      components: "Machine Components",
      benefits: "Benefits",
      calculator: "Price Calculator",
      faqs: "Frequently Asked Questions",
      video: "Working Demonstration",
      calculate: "Calculate Price",
      landSizeLabel: "Land Size (Acres)",
      voltageLabel: "Voltage Requirement",
      solarWattageLabel: "Solar Panel Wattage",
      priceResult: "Estimated Price: ₹",
      watchVideo: "Watch Video",
      stopVideo: "Stop Video",
    }
  };

  // Machine components data
  const components = [
    {
      name: {
        marathi: "सोलर पॅनेल",
        hindi: "सोलर पैनल",
        english: "Solar Panel"
      },
      desc: {
        marathi: "सूर्यप्रकाशातून वीज निर्माण करते",
        hindi: "सूरज की रोशनी से बिजली बनाता है",
        english: "Generates electricity from sunlight"
      },
      image: "/api/placeholder/200/150"
    },
    {
      name: {
        marathi: "बॅटरी",
        hindi: "बैटरी",
        english: "Battery"
      },
      desc: {
        marathi: "वीज साठवून ठेवते आणि रात्री देखील वापर करण्यास मदत करते",
        hindi: "बिजली को स्टोर करता है और रात में भी उपयोग करने में मदद करता है",
        english: "Stores electricity and helps use even at night"
      },
      image: "/api/placeholder/200/150"
    },
    {
      name: {
        marathi: "कंट्रोलर",
        hindi: "कंट्रोलर",
        english: "Controller"
      },
      desc: {
        marathi: "वीज प्रवाह नियंत्रित करते आणि सुरक्षा प्रदान करते",
        hindi: "बिजली के प्रवाह को नियंत्रित करता है और सुरक्षा प्रदान करता है",
        english: "Controls electricity flow and provides safety"
      },
      image: "/api/placeholder/200/150"
    },
    {
      name: {
        marathi: "तारा आणि खांब",
        hindi: "तार और खंभे",
        english: "Wires and Poles"
      },
      desc: {
        marathi: "शेतीच्या सीमेवर लावले जातात",
        hindi: "खेत की सीमा पर लगाए जाते हैं",
        english: "Installed at the farm boundary"
      },
      image: "/api/placeholder/200/150"
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: {
        marathi: "प्राणी घुसखोरी कमी करते",
        hindi: "जानवरों का प्रवेश कम करता है",
        english: "Reduces Animal Intrusion"
      },
      desc: {
        marathi: "झटका मशीन वन्यप्राण्यांना शेतात प्रवेश करण्यापासून रोखते आणि पिकांचे नुकसान टाळते.",
        hindi: "झटका मशीन जंगली जानवरों को खेत में प्रवेश करने से रोकती है और फसलों के नुकसान को टालती है।",
        english: "The zatka machine prevents wild animals from entering the farm and avoids crop damage."
      }
    },
    {
      title: {
        marathi: "वीज बचत",
        hindi: "बिजली की बचत",
        english: "Saves Electricity"
      },
      desc: {
        marathi: "सौर उर्जेवर चालते, म्हणून वीज बिल शून्य आणि पर्यावरण हितैषी.",
        hindi: "सौर ऊर्जा पर चलता है, इसलिए बिजली का बिल शून्य और पर्यावरण के अनुकूल है।",
        english: "Runs on solar energy, so zero electricity bill and environmentally friendly."
      }
    },
    {
      title: {
        marathi: "दीर्घ आयुष्य",
        hindi: "लंबा जीवन",
        english: "Long Life"
      },
      desc: {
        marathi: "उत्तम दर्जाच्या सामग्रीपासून बनविलेले, 10+ वर्षे टिकते.",
        hindi: "उच्च गुणवत्ता वाली सामग्री से बना है, 10+ साल तक चलता है।",
        english: "Made from high-quality materials, lasts for 10+ years."
      }
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: {
        marathi: "सोलर झटका मशीन कसे काम करते?",
        hindi: "सोलर झटका मशीन कैसे काम करती है?",
        english: "How does the Solar Zatka Machine work?"
      },
      answer: {
        marathi: "सोलर पॅनेल सूर्यप्रकाशातून वीज निर्माण करते, जी बॅटरीमध्ये साठवली जाते. कंट्रोलर हा वीज प्रवाह नियंत्रित करतो आणि तारांना 5-12 वोल्ट वीज देतो. जेव्हा प्राणी तारेला स्पर्श करतात, तेव्हा त्यांना हलका झटका बसतो जो त्यांना दूर ठेवतो.",
        hindi: "सोलर पैनल सूरज की रोशनी से बिजली बनाता है, जो बैटरी में स्टोर होती है। कंट्रोलर बिजली के प्रवाह को नियंत्रित करता है और तारों को 5-12 वोल्ट बिजली देता है। जब जानवर तार को छूते हैं, तब उन्हें हल्का झटका लगता है जो उन्हें दूर रखता है।",
        english: "The solar panel generates electricity from sunlight, which is stored in the battery. The controller regulates the electricity flow and provides 5-12 volts to the wires. When animals touch the wire, they receive a mild shock that keeps them away."
      }
    },
    {
      question: {
        marathi: "झटका मशीन स्थापित करण्यासाठी किती खर्च येईल?",
        hindi: "झटका मशीन स्थापित करने में कितना खर्च आएगा?",
        english: "How much will it cost to install the Zatka Machine?"
      },
      answer: {
        marathi: "किंमत शेतीच्या आकारावर आणि वोल्टेज आवश्यकतेवर अवलंबून असते. 1 एकर साठी साधारण ₹10,000 ते ₹15,000 खर्च येऊ शकतो. अधिक अचूक किंमतीसाठी आमच्या कॅल्क्युलेटरचा वापर करा.",
        hindi: "कीमत खेत के आकार और वोल्टेज आवश्यकता पर निर्भर करती है। 1 एकड़ के लिए लगभग ₹10,000 से ₹15,000 का खर्च आ सकता है। अधिक सटीक कीमत के लिए हमारे कैलकुलेटर का उपयोग करें।",
        english: "The cost depends on the farm size and voltage requirements. For 1 acre, it can cost approximately ₹10,000 to ₹15,000. Use our calculator for a more accurate price."
      }
    },
    {
      question: {
        marathi: "मशीन किती काळ चालते?",
        hindi: "मशीन कितने समय तक चलती है?",
        english: "How long does the machine last?"
      },
      answer: {
        marathi: "योग्य देखभाल केल्यास, आमची सोलर झटका मशीन 10+ वर्षे चालू शकते. सोलर पॅनेल 25 वर्षे चालतात, परंतु बॅटरी 3-5 वर्षांनंतर बदलावी लागू शकते.",
        hindi: "उचित देखभाल के साथ, हमारी सोलर झटका मशीन 10+ साल तक चल सकती है। सोलर पैनल 25 साल तक चलते हैं, लेकिन बैटरी को 3-5 साल के बाद बदलना पड़ सकता है।",
        english: "With proper maintenance, our Solar Zatka Machine can run for 10+ years. Solar panels last for 25 years, but the battery might need replacement after 3-5 years."
      }
    },
    {
      question: {
        marathi: "या मशीनचे फायदे काय आहेत?",
        hindi: "इस मशीन के क्या फायदे हैं?",
        english: "What are the benefits of this machine?"
      },
      answer: {
        marathi: "सौर झटका मशीन वन्यप्राण्यांपासून पिकांचे संरक्षण करते, वीज बिलात बचत करते, पर्यावरण हितैषी आहे, आणि दीर्घकाळ टिकते. हे पारंपारिक विद्युत कुंपणांपेक्षा सुरक्षित आहे.",
        hindi: "सौर झटका मशीन जंगली जानवरों से फसलों की रक्षा करती है, बिजली के बिल में बचत करती है, पर्यावरण के अनुकूल है, और लंबे समय तक चलती है। यह पारंपरिक बिजली के बाड़ों से अधिक सुरक्षित है।",
        english: "The Solar Zatka Machine protects crops from wild animals, saves on electricity bills, is environmentally friendly, and lasts for a long time. It is safer than traditional electric fences."
      }
    }
  ];

  // Calculate price based on inputs
  useEffect(() => {
    // Base price: ₹10,000 + (land size * 5,000) + (voltage * 1,000) + (solar wattage * 500)
    const calculatedPrice = 10000 + (landSize * 5000) + (voltage * 1000) + (solarWattage * 500);
    setPrice(calculatedPrice);
  }, [landSize, voltage, solarWattage]);

  // Toggle video playback
  const toggleVideo = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Change language handler
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <select 
          value={language} 
          onChange={handleLanguageChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="marathi">मराठी</option>
          <option value="hindi">हिंदी</option>
          <option value="english">English</option>
        </select>
      </div>

      {/* Hero Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">{content[language].title}</h1>
        <h2 className="text-2xl text-green-600 mb-4">{content[language].subtitle}</h2>
        <p className="text-lg">{content[language].desc}</p>
      </div>

      {/* Components Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{content[language].components}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition duration-300">
              <img src={component.image} alt={component.name[language]} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-bold text-lg mb-2">{component.name[language]}</h3>
              <p>{component.desc[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{content[language].benefits}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-green-600 mb-2">{benefit.title[language]}</h3>
              <p>{benefit.desc[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{content[language].video}</h2>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <video 
            ref={videoRef} 
            className="w-full h-full object-cover"
            src="https://example.com/solar-zatka-demo.mp4" 
            poster="/api/placeholder/800/450"
          ></video>
          <button 
            onClick={toggleVideo} 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white"
          >
            {isVideoPlaying ? (
              <>
                <PauseCircle size={64} />
                <span className="ml-2 text-lg">{content[language].stopVideo}</span>
              </>
            ) : (
              <>
                <PlayCircle size={64} />
                <span className="ml-2 text-lg">{content[language].watchVideo}</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{content[language].calculator}</h2>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              {content[language].landSizeLabel}
            </label>
            <input 
              type="number" 
              min="1" 
              max="100"
              value={landSize} 
              onChange={(e) => setLandSize(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              {content[language].voltageLabel}
            </label>
            <select 
              value={voltage} 
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="5">5V</option>
              <option value="9">9V</option>
              <option value="12">12V</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              {content[language].solarWattageLabel}
            </label>
            <select 
              value={solarWattage} 
              onChange={(e) => setSolarWattage(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="10">10W</option>
              <option value="20">20W</option>
              <option value="30">30W</option>
              <option value="50">50W</option>
            </select>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-700">
            {content[language].priceResult}{price.toLocaleString()}
          </h3>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{content[language].faqs}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium text-lg">{faq.question[language]}</h3>
                {activeFaq === index ? (
                  <ChevronUp size={24} className="text-green-700" />
                ) : (
                  <ChevronDown size={24} className="text-green-700" />
                )}
              </div>
              {activeFaq === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer[language]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green-700 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'marathi' ? 'आज आमच्याशी संपर्क साधा' : 
           language === 'hindi' ? 'आज हमसे संपर्क करें' : 
           'Contact Us Today'}
        </h2>
        <p className="mb-6">
          {language === 'marathi' ? 'अधिक माहितीसाठी किंवा ऑर्डर करण्यासाठी कॉल करा' : 
           language === 'hindi' ? 'अधिक जानकारी के लिए या ऑर्डर करने के लिए कॉल करें' : 
           'Call for more information or to place an order'}
        </p>
        <div className="text-2xl font-bold">
          <a href="tel:+919876543210">+91 98765 43210</a>
        </div>
      </section>
    </div>
  );
}

export default SolarZatkaProductPage;