import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    // Only using Marathi language since that's the requirement
    const marathi = {
        companyName: "अँग्रो निर्मित सोलर झटका मशीन",
        tagline: "शेतीसाठी अत्याधुनिक सौर संरक्षण उपाय",
        contactInfo: "संपर्क माहिती",
        phoneLabel: "फोन नंबर",
        phone1: "8329775373",
        phone2: "8999718846",
        whatsappMsg: "सोलर झटका मशीन बद्दल माहिती हवी आहे",
        addressLabel: "पत्ता",
        address: "अँग्रो निर्मित, एस.टी. ऑफिस समोर, मनिजा अपार्टमेंट, अकोला, महाराष्ट्र 444001",
        socialMedia: "सोशल मीडिया",
        followUs: "आमच्या सोशल मीडिया वर फॉलो करा",
        instagramHandle: "@solarzatkamachine7",
        youtubeChannel: "सोलर झटका मशीन",
        aboutUs: "आमच्याबद्दल",
        aboutText: "आम्ही भारतीय शेतकऱ्यांना जनावरे आणि वन्य प्राण्यांपासून पिकांचे संरक्षण करण्यासाठी सौर ऊर्जेवर चालणारे अत्याधुनिक तंत्रज्ञान पुरवतो. शेतीसाठी वीज बिलाची बचत करा आणि वन्यजीवांपासून पिकांचे रक्षण करा.",
        copyright: "सर्व हक्क राखीव",
        callNow: "आता कॉल करा"
    };

    // Function to open WhatsApp with predefined message
    const openWhatsApp = (phoneNumber) => {
        const message = encodeURIComponent(marathi.whatsappMsg);
        window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <footer className="bg-gray-950 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Company Name and Tagline */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-yellow-400">{marathi.companyName}</h2>
                    <p className="text-gray-300 mt-1">{marathi.tagline}</p>
                </div>

                {/* Main Content - Stack on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact Information */}
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-3 flex items-center">
                            <FaPhone className="mr-2 text-green-400" /> {marathi.contactInfo}
                        </h3>

                        {/* Phone Numbers with Call Button */}
                        <div className="mb-3">
                            <p className="text-gray-300 font-semibold">{marathi.phoneLabel}:</p>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-gray-300">{marathi.phone1}</span>
                                <a
                                    href={`tel:+91${marathi.phone1}`}
                                    className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center"
                                >
                                    <FaPhone className="mr-1" size={12} /> {marathi.callNow}
                                </a>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-300">{marathi.phone2}</span>
                                <a
                                    href={`tel:+91${marathi.phone2}`}
                                    className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center"
                                >
                                    <FaPhone className="mr-1" size={12} /> {marathi.callNow}
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mt-4">
                            <p className="text-gray-300 font-semibold flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-red-400" /> {marathi.addressLabel}:
                            </p>
                            <p className="text-gray-300 text-sm mt-1">{marathi.address}</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-3">{marathi.socialMedia}</h3>
                        <p className="text-gray-300 text-sm mb-3">{marathi.followUs}</p>

                        {/* Social icons with links */}
                        <div className="flex flex-col space-y-3">
                            {/* WhatsApp */}
                            <button
                                onClick={() => openWhatsApp(marathi.phone1)}
                                className="bg-green-600 text-white rounded-md py-2 px-4 flex items-center justify-center"
                            >
                                <FaWhatsapp className="mr-2" size={20} />
                                <span>WhatsApp वर संपर्क करा</span>
                            </button>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/solarzatkamachine7?igsh=M3BzcnNmZmczNDVp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md py-2 px-4 flex items-center justify-center"
                            >
                                <FaInstagram className="mr-2" size={20} />
                                <span>{marathi.instagramHandle}</span>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@agronirmitsolarzatkamachine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 text-white rounded-md py-2 px-4 flex items-center justify-center"
                            >
                                <FaYoutube className="mr-2" size={20} />
                                <span>{marathi.youtubeChannel}</span>
                            </a>

                            {/* facebook */}
                            <a
                                href="https://www.facebook.com/people/Agro-Nirmit/pfbid02reXMNfVnmMX74bY18HfxBCDSZFGvrzPJSZ8ppStDiwBb5hYsxnkDgx5nMFiTqxFfl/?rdid=jKFI7KR5ZAafGKl2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16GURmUCkX%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white rounded-md py-2 px-4 flex items-center justify-center transition duration-300 hover:bg-blue-700 shadow-lg transform hover:scale-105"
                            >
                                <FaFacebook className="mr-2" size={20} />
                                <span>आमचे फेसबुक पेज पहा</span>
                            </a>

                        </div>
                    </div>

                    {/* About Us */}
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-3">{marathi.aboutUs}</h3>
                        <p className="text-gray-300 text-sm">{marathi.aboutText}</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} अँग्रो निर्मित सोलर झटका मशीन. {marathi.copyright}.
                    </p>
                </div>

                <div className=" mt-3 flex flex-col items-center text-gray-400 text-center">
                    <img
                        className="w-8 h-8 mb-0"
                        src="https://webreich.vercel.app/logo.png"
                        alt="Webreich Logo"
                    />
                    <a
                        href="https://webreich.vercel.app/"
                        className="text-orange-600 font-bold hover:text-orange-700 transition-colors duration-300 text-md"
                    >
                        Webreich Technologies
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;