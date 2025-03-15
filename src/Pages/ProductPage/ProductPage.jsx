import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, PauseCircle, Send } from 'lucide-react';

// Main Product Page Component
function SolarZatkaProductPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('50+');
  const [formData, setFormData] = useState({
    farmerName: '',
    phoneNumber: '',
    landSize: ''
  });
  const videoRef = useRef(null);

  // Toggle video playback
  const toggleVideo = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const message = `नवीन ऑर्डर!\n\nशेतकरी नाव: ${formData.farmerName}\nफोन नंबर: ${formData.phoneNumber}\nजमीन आकार: ${formData.landSize} एकर\nनिवडलेला मशीन: ${selectedProduct === '50+' ? 'Agro Nirmit 50+ AC & DC' :
      selectedProduct === '30+' ? 'Agro Nirmit 30+ AC & DC' : 'Agro Nirmit 15+ AC'
      }`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8329775373?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      farmerName: '',
      phoneNumber: '',
      landSize: ''
    });
  };

  // Product data
  const products = [
    {
      id: '50+',
      name: 'Agro Nirmit 50+ AC & DC',
      coverage: '50 एकर',
      battery: '12V - 14A',
      solar: '40W',
      insulators: '130 हुक',
      corners: '20',
      solarWire: '15 फूट',
      batteryWire: '3 फूट',
      siren: '✅ होय',
      charger: '1.5A',
      price: '₹8,700',
      pricePerAcre: '₹174 प्रति एकर'
    },
    {
      id: '30+',
      name: 'Agro Nirmit 30+ AC & DC',
      coverage: '30 एकर',
      battery: '12V - 14A',
      solar: '40W',
      insulators: '130 हुक',
      corners: '20',
      solarWire: '15 फूट',
      batteryWire: '3 फूट',
      siren: '✅ होय',
      charger: '1.5A',
      price: '₹8,100',
      pricePerAcre: '₹270 प्रति एकर'
    },
    {
      id: '15+',
      name: 'Agro Nirmit 15+ AC',
      coverage: '15 एकर',
      battery: '12V - 14A',
      solar: '20W',
      insulators: '100 हुक',
      corners: '20',
      solarWire: '❌ समाविष्ट नाही',
      batteryWire: '❌ समाविष्ट नाही',
      siren: '✅ होय',
      charger: '1.5A',
      price: '₹6,500',
      pricePerAcre: '₹433 प्रति एकर'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-800 to-purple-900 text-white">
      {/* Header */}

      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.pexels.com/photos/3770775/pexels-photo-3770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="सोलर झटका मशीन" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex flex-col justify-center items-center px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">सोलर झटका मशीन</h2>
          <p className="text-xl md:text-2xl">तुमच्या शेतीसाठी अत्याधुनिक संरक्षण</p>
          <p className="mt-4 max-w-2xl text-center">आमची सोलर झटका मशीन तुमच्या पिकांना वन्यप्राण्यांपासून संरक्षण देते आणि वीज बिलात बचत करते.</p>
        </div>
      </div>

      {/* Product Benefits */}
      <section className="py-8 px-4 md:px-8 bg-white text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-6">सोलर झटका मशीनचे फायदे</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-700 mb-2">प्राणी घुसखोरी कमी करते</h3>
            <p>झटका मशीन वन्यप्राण्यांना शेतात प्रवेश करण्यापासून रोखते आणि पिकांचे नुकसान टाळते.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-700 mb-2">वीज बचत</h3>
            <p>सौर उर्जेवर चालते, म्हणून वीज बिल शून्य आणि पर्यावरण हितैषी.</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-700 mb-2">दीर्घ आयुष्य</h3>
            <p>उत्तम दर्जाच्या सामग्रीपासून बनविलेले, 10+ वर्षे टिकते.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-6">कार्य प्रात्यक्षिक</h2>
        <div className="relative aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
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
                <PauseCircle size={64} className="text-yellow-400" />
                <span className="ml-2 text-lg">व्हिडिओ थांबवा</span>
              </>
            ) : (
              <>
                <PlayCircle size={64} className="text-yellow-400" />
                <span className="ml-2 text-lg">व्हिडिओ पहा</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-8 px-4 md:px-8 bg-white text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-6">उपलब्ध मॉडेल्स</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`border-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${selectedProduct === product.id ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'
                }`}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="bg-gradient-to-r from-red-700 to-purple-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center">{product.name}</h3>
              </div>
              <div className="p-4">
                <p className="text-center font-bold text-2xl mb-2 text-red-700">{product.price}</p>
                <p className="text-center mb-4 text-gray-600">{product.pricePerAcre}</p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">क्षेत्रफळ:</span>
                    <span>{product.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">बॅटरी:</span>
                    <span>{product.battery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">सोलर पॅनेल:</span>
                    <span>{product.solar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">हुक:</span>
                    <span>{product.insulators}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">कॉर्नर:</span>
                    <span>{product.corners}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">सोलर तार:</span>
                    <span>{product.solarWire}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">बॅटरी तार:</span>
                    <span>{product.batteryWire}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">सायरन:</span>
                    <span>{product.siren}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">चार्जर:</span>
                    <span>{product.charger}</span>
                  </div>
                </div>

                <button
                  className={`mt-4 w-full py-2 rounded-lg font-bold text-white ${selectedProduct === product.id
                    ? 'bg-gradient-to-r from-red-600 to-purple-700'
                    : 'bg-gray-500'
                    }`}
                >
                  {selectedProduct === product.id ? 'निवडले आहे' : 'निवडा'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-2xl mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-700 to-purple-800 p-4">
            <h2 className="text-2xl font-bold text-white text-center">आता ऑर्डर करा</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="farmerName">
                शेतकरी नाव
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                id="farmerName"
                name="farmerName"
                value={formData.farmerName}
                onChange={handleInputChange}
                required
                placeholder="आपले नाव प्रविष्ट करा"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                फोन नंबर
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="आपला फोन नंबर प्रविष्ट करा"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="landSize">
                जमीन आकार (एकर)
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                type="number"
                id="landSize"
                name="landSize"
                value={formData.landSize}
                onChange={handleInputChange}
                required
                placeholder="आपल्या जमिनीचा आकार प्रविष्ट करा"
              />
            </div>
            <div className="mb-6">
              <p className="block text-gray-700 font-bold mb-2">निवडलेला प्रोडक्ट</p>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-300">
                {products.find(p => p.id === selectedProduct)?.name} - {products.find(p => p.id === selectedProduct)?.price}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-600 to-purple-700 text-white font-bold rounded-lg flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              व्हाट्सअॅप वर ऑर्डर करा
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 md:px-8 bg-white text-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-800 mb-6">ग्राहक अभिप्राय</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/64/64" alt="ग्राहक" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">रामेश्वर पाटील</h3>
                <p className="text-sm text-gray-600">नाशिक, महाराष्ट्र</p>
              </div>
            </div>
            <p className="italic">"सोलर झटका मशीन वापरल्यानंतर माझ्या शेतीतील वन्यप्राण्यांचा त्रास 90% कमी झाला. खूप उत्तम प्रोडक्ट!"</p>
            <div className="flex text-yellow-500 mt-2">
              ★★★★★
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/64/64" alt="ग्राहक" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">सुनील शिंदे</h3>
                <p className="text-sm text-gray-600">पुणे, महाराष्ट्र</p>
              </div>
            </div>
            <p className="italic">"माझी 30 एकर जमीन सुरक्षित झाली आहे. यापूर्वी रात्री जागून रहावे लागत असे, आता मी शांत झोपतो."</p>
            <div className="flex text-yellow-500 mt-2">
              ★★★★★
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-purple-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/64/64" alt="ग्राहक" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">अनिता जाधव</h3>
                <p className="text-sm text-gray-600">औरंगाबाद, महाराष्ट्र</p>
              </div>
            </div>
            <p className="italic">"सर्व प्रकारच्या वन्यप्राण्यांपासून संरक्षण मिळते. सेवा देखील अतिशय चांगली आहे."</p>
            <div className="flex text-yellow-500 mt-2">
              ★★★★★
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-6">सामान्य प्रश्न</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
            <button className="w-full px-6 py-4 text-left font-bold flex justify-between items-center">
              <span>सोलर झटका मशीन कशी कार्य करते?</span>
              <ChevronDown size={20} />
            </button>
            <div className="px-6 py-4 bg-gray-50">
              <p>सोलर झटका मशीन विजेचे दिवस भरण्यासाठी सौर ऊर्जेचा वापर करते. रात्री ही विजेच्या तारांमधून सौम्य झटके पाठवते जे वन्यप्राण्यांना शेतात प्रवेश करण्यापासून रोखतात.</p>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
            <button className="w-full px-6 py-4 text-left font-bold flex justify-between items-center">
              <span>इन्स्टॉलेशन कसे करावे?</span>
              <ChevronDown size={20} />
            </button>
            <div className="px-6 py-4 bg-gray-50">
              <p>आम्ही संपूर्ण इन्स्टॉलेशन सेवा प्रदान करतो. आमचे तंत्रज्ञ तुमच्या शेतात येऊन सर्व सेटअप करतील. आपण स्वतः देखील सेट करू शकता, त्यासाठी आम्ही व्हिडिओ मार्गदर्शन प्रदान करतो.</p>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
            <button className="w-full px-6 py-4 text-left font-bold flex justify-between items-center">
              <span>वॉरंटी किती वर्षांची आहे?</span>
              <ChevronDown size={20} />
            </button>
            <div className="px-6 py-4 bg-gray-50">
              <p>आम्ही सोलर झटका मशीनवर 2 वर्षांची वॉरंटी देतो. बॅटरीवर 1 वर्ष वॉरंटी आहे आणि सोलर पॅनेलवर 5 वर्षे वॉरंटी आहे.</p>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
            <button className="w-full px-6 py-4 text-left font-bold flex justify-between items-center">
              <span>देखभाल आणि दुरुस्ती कशी करावी?</span>
              <ChevronDown size={20} />
            </button>
            <div className="px-6 py-4 bg-gray-50">
              <p>दररोज तारांची तपासणी करा. वीज प्रवाह सुरू आहे याची खात्री करा. सोलर पॅनेल नियमितपणे साफ करा. कोणतीही समस्या आल्यास आमच्याशी संपर्क साधा.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default SolarZatkaProductPage;