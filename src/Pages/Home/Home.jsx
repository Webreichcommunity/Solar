import React, { useState, useRef, useEffect } from 'react';

const LandingPage = () => {
    const [farmSize, setFarmSize] = useState(1);
    const [voltage, setVoltage] = useState('low');
    const [price, setPrice] = useState(0);
    const videoRef = useRef(null);

    // Calculate price based on farm size and voltage
    useEffect(() => {
        const basePricePerAcre = 5000;
        const voltageFactor = {
            low: 1,
            medium: 1.5,
            high: 2
        };

        const calculatedPrice = basePricePerAcre * farmSize * voltageFactor[voltage];
        setPrice(calculatedPrice);
    }, [farmSize, voltage]);

    // Testimonials data
    const testimonials = [
        {
            name: "सुनील पाटील, पुणे",
            text: "मी गेल्या वर्षी सोलर झटका मशीन विकत घेतली आणि माझ्या शेतातील नुकसान ९०% कमी झाले आहे. उत्तम गुंतवणूक!"
        },
        {
            name: "राजेश शिंदे, नाशिक",
            text: "सोलर झटका मशीन स्थापित केल्यापासून, मला वन्य प्राण्यांपासून होणारे नुकसान थांबवण्यात मदत झाली आहे. मी याशिवाय शेती करू शकत नाही."
        },
        {
            name: "अनिता देशमुख, कोल्हापूर",
            text: "वीज बिलात बचत आणि पिकांचे संरक्षण - दोन्ही फायदे एकाच उत्पादनात. सरकारी अनुदानामुळे किंमत परवडणारी आहे."
        }
    ];

    return (
        <div className="font-sans bg-amber-50">

            {/* Hero Section with Video */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="/bgvideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <div className="bg-yellow-500 text-black rounded-full inline-block px-8 py-2 mb-4 transform -rotate-2">
                        <h2 className="text-xl font-bold">अँग्रो निर्मित</h2>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">सोलार झटका मशीन</h1>
                    <p className="text-xl md:text-2xl mb-8 bg-black bg-opacity-30 inline-block px-4 py-2 rounded-lg">
                        जनावरे आणि वन्य प्राण्यांपासून आपल्या पिकांचे <span className="text-yellow-300 font-bold">१००% संरक्षण</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                            आज आपले सोलार झटका मशीन मिळवा
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                            व्हिडिओ पहा
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-8 bg-red-600 inline-block px-4 py-1 rounded-lg transform rotate-2 animate-pulse">
                        <p className="text-white font-bold">५०% सरकारी अनुदान उपलब्ध</p>
                    </div>
                </div>
            </div>

            {/* Why Farmers Need This Section */}
            <div className="py-16 bg-gradient-to-b from-amber-50 to-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-2 text-green-800">शेतकऱ्यांना याची का आवश्यकता आहे</h2>
                        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-b-4 border-green-600 transform hover:-translate-y-1 duration-300">
                            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 border-4 border-green-200">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-800">पिकांचे संरक्षण</h3>
                            <p className="text-gray-700">धान्य, फळे आणि भाज्या जनावरांपासून सुरक्षित ठेवा</p>
                            <div className="mt-4 h-1 w-12 bg-green-600 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-b-4 border-blue-600 transform hover:-translate-y-1 duration-300">
                            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 border-4 border-blue-200">
                                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">वीज बिलात बचत</h3>
                            <p className="text-gray-700">सौर ऊर्जा वापरून शून्य वीज खर्च</p>
                            <div className="mt-4 h-1 w-12 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-b-4 border-yellow-600 transform hover:-translate-y-1 duration-300">
                            <div className="bg-yellow-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 border-4 border-yellow-200">
                                <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-yellow-800">सरकारी अनुदान</h3>
                            <p className="text-gray-700">५०% सरकारी अनुदान सह खरेदी करण्यास परवडणारे</p>
                            <div className="mt-4 h-1 w-12 bg-yellow-600 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-b-4 border-red-600 transform hover:-translate-y-1 duration-300">
                            <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 border-4 border-red-200">
                                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-red-800">पर्यावरण हितैषी</h3>
                            <p className="text-gray-700">शाश्वत शेती आणि पर्यावरण संरक्षणास समर्थन</p>
                            <div className="mt-4 h-1 w-12 bg-red-600 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Features Section with Animation */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-2 text-green-800">सोलार झटका मशीनची वैशिष्ट्ये</h2>
                        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">आधुनिक तंत्रज्ञान आणि सौर ऊर्जेचा वापर करून आपल्या पिकांचे १००% संरक्षण करा</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-green-600 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-green-800 mb-1">सौर ऊर्जेवर चालणारे</h3>
                                            <p className="text-gray-700">कोणताही वीज खर्च नाही. दिवसभर सौर ऊर्जा साठवून रात्रीही कार्यरत राहते.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-yellow-500 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-yellow-800 mb-1">लहान विद्युत झटके</h3>
                                            <p className="text-gray-700">जनावरांना हानिकारक नसलेले पण प्रभावी असे लहान विद्युत झटके देते.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-blue-800 mb-1">सुरक्षित आणि टिकाऊ</h3>
                                            <p className="text-gray-700">उच्च गुणवत्तेचे सामग्री वापरून निर्माण केलेले, कमीत कमी ५ वर्षे टिकाऊ.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-red-600 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-red-800 mb-1">स्वयंचलित</h3>
                                            <p className="text-gray-700">एकदा स्थापित केल्यावर कोणत्याही मानवी हस्तक्षेपाशिवाय काम करते.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-transform hover:scale-102">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0638/0529/2758/articles/zatka-machine.jpg?v=1679305928"
                                    alt="सोलार झटका मशीन"
                                    className="w-full h-auto rounded-3xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/600x400/f0fdf4/166534?text=सोलार+झटका+मशीन";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-3xl"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="bg-green-700 text-white inline-block px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse">
                                        नवीन मॉडेल २०२४
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">अँग्रो निर्मित सोलार झटका मशीन</h3>
                                    <p className="text-gray-200">उच्च क्षमता आणि सरकारी अनुदानासह</p>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full px-4 py-2 font-bold shadow-lg transform rotate-12 animate-bounce z-10">
                                बेस्ट सेलर
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Calculator */}
            <div className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="bg-gradient-to-br from-green-700 to-green-900 p-8 text-white">
                                <h2 className="text-3xl font-bold mb-6">आपली स्वतःची मशीन मिळवा</h2>
                                <p className="mb-8 text-green-100">शेतीसाठी आवश्यक उपकरण, अत्याधुनिक तंत्रज्ञान आणि ५०% सरकारी अनुदानासह.</p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>शेतीची सुरक्षा १००% सुनिश्चित</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>५ वर्षे वॉरंटी</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>मोफत स्थापना आणि प्रशिक्षण</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>२४/७ ग्राहक सेवा</span>
                                    </div>
                                </div>

                                <div className="mt-10 p-4 bg-white bg-opacity-10 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-green-200">अनुदानापूर्वीची किंमत</p>
                                            <p className="text-3xl font-bold line-through decoration-2">₹{Math.round(price)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-green-200">अनुदानानंतर फक्त</p>
                                            <p className="text-4xl font-bold text-yellow-400">₹{Math.round(price * 0.5)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">आपल्या गरजेनुसार निवडा</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">शेताचा आकार (एकर)</label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="10"
                                            value={farmSize}
                                            onChange={(e) => setFarmSize(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="flex justify-between mt-1 text-sm text-gray-600">
                                            <span>1 एकर</span>
                                            <span>{farmSize} एकर</span>
                                            <span>10 एकर</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">व्होल्टेज निवडा</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <button
                                                className={`py-2 px-4 rounded-lg border-2 transition ${voltage === 'low' ? 'bg-green-600 text-white border-green-700' : 'border-gray-300 hover:border-green-500'}`}
                                                onClick={() => setVoltage('low')}
                                            >
                                                कमी
                                            </button>
                                            <button
                                                className={`py-2 px-4 rounded-lg border-2 transition ${voltage === 'medium' ? 'bg-green-600 text-white border-green-700' : 'border-gray-300 hover:border-green-500'}`}
                                                onClick={() => setVoltage('medium')}
                                            >
                                                मध्यम
                                            </button>
                                            <button
                                                className={`py-2 px-4 rounded-lg border-2 transition ${voltage === 'high' ? 'bg-green-600 text-white border-green-700' : 'border-gray-300 hover:border-green-500'}`}
                                                onClick={() => setVoltage('high')}
                                            >
                                                उच्च
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-gray-600">एकूण खर्च:</p>
                                                <p className="text-2xl font-bold text-gray-800">₹{Math.round(price * 0.5)}</p>
                                                <p className="text-sm text-red-600">५०% सरकारी अनुदानानंतर</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-gray-600">मासिक बचत:</p>
                                                <p className="text-xl font-bold text-green-700">₹{Math.round(price * 0.1)}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center gap-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd"></path>
                                        </svg>
                                        आता ऑर्डर करा
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-16 bg-gradient-to-br from-amber-50 to-green-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-2 text-green-800">शेतकऱ्यांचे अनुभव</h2>
                        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">आमच्या ग्राहकांना सोलार झटका मशीन वापरून काय फायदे झाले ते ऐका</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="bg-green-700 h-3"></div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 rounded-full p-2 mr-3">
                                            <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    </div>
                                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                                    <div className="mt-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                            </svg>
                            अधिक अनुभव पहा
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-2 text-green-800">सामान्य प्रश्न</h2>
                        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                {
                                    q: "सोलार झटका मशीन स्थापित करण्यासाठी किती जागा लागते?",
                                    a: "एक एकर शेतीसाठी साधारण १० ते १५ पोल लागतात. प्रत्येक पोल साठी १ स्क्वेअर फूट जागा पुरेशी आहे."
                                },
                                {
                                    q: "मशीन पावसाळ्यात योग्य प्रकारे कार्य करते का?",
                                    a: "होय, आमचे सर्व उपकरण वॉटरप्रूफ आहेत आणि कोणत्याही हवामानात सुरक्षित आणि प्रभावीपणे कार्य करतात."
                                },
                                {
                                    q: "मशीनची देखभाल कशी करावी?",
                                    a: "किमान देखभाल आवश्यक आहे. फक्त सौर पॅनेल वेळोवेळी साफ करा आणि कनेक्शन तपासा. आम्ही स्थापनेसह संपूर्ण मार्गदर्शनही प्रदान करतो."
                                },
                                {
                                    q: "५०% सरकारी अनुदान मिळवण्यासाठी काय करावे लागेल?",
                                    a: "आम्ही सर्व आवश्यक कागदपत्रे आणि अर्ज प्रक्रियेसाठी मदत करतो. तुम्हाला फक्त आपल्या शेतीची कागदपत्रे, आधार कार्ड आणि बँक तपशील प्रदान करावे लागतील."
                                },
                                {
                                    q: "हे वन्य प्राण्यांसाठी हानिकारक आहे का?",
                                    a: "नाही, मशीन फक्त हलके विद्युत झटके देते जे प्राण्यांना हानिकारक नाहीत. ते त्यांना फक्त दूर ठेवण्यासाठी पुरेसे आहेत."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-green-50 rounded-lg border border-green-200 p-5 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                        </svg>
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-700 pl-8">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-lg text-gray-700 mb-4">अजून प्रश्न आहेत?</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1H4v8a1 1 0 001 1h10a1 1 0 001-1V6zM4 4a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
                                </svg>
                                आम्हाला संपर्क करा
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">आज अँग्रो निर्मित सोलार झटका मशीन मिळवा</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">५०% सरकारी अनुदान, मोफत स्थापना आणि तांत्रिक सहाय्य, ५ वर्षे वॉरंटीसह</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            आता कॉल करा: 8329775373
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            ई-मेल द्वारे संपर्क करा
                        </button>
                    </div>

                    <div className="mt-12 bg-white bg-opacity-10 max-w-4xl mx-auto rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-500 rounded-full p-4 mb-3">
                                    <svg className="w-8 h-8 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-1">५०% अनुदान</h3>
                                <p className="text-center text-green-100">सरकारी योजनेंतर्गत आर्थिक लाभ</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-500 rounded-full p-4 mb-3">
                                    <svg className="w-8 h-8 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-1">मोफत स्थापना</h3>
                                <p className="text-center text-green-100">तज्ञ द्वारे सेटअप आणि प्रशिक्षण</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-500 rounded-full p-4 mb-3">
                                    <svg className="w-8 h-8 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-1">कार्यक्षम सेवा</h3>
                                <p className="text-center text-green-100">२४x७ ग्राहक सहाय्य उपलब्ध</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;