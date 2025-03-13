import React from 'react'
import { useState } from 'react';

const Footer = () => {
    const [language, setLanguage] = useState('marathi');
    const translations = {
        marathi: {
          heroTitle: "सोलार झटका मशीन - शेतकऱ्यांसाठी आदर्श समाधान",
          heroSubtitle: "जनावरे आणि वन्य प्राण्यांपासून आपल्या पिकांचे संरक्षण करा",
          whyNeed: "शेतकऱ्यांना याची का आवश्यकता आहे",
          benefit1: "पिकांचे संरक्षण",
          benefit2: "वीज बिलात बचत",
          benefit3: "पर्यावरण अनुकूल",
          benefit4: "सरकारी अनुदान उपलब्ध",
          calculate: "किंमत काढा",
          farmSizeLabel: "शेत आकार (एकर)",
          voltageLabel: "आवश्यक व्होल्टेज",
          lowVoltage: "कमी (छोट्या क्षेत्रासाठी)",
          mediumVoltage: "मध्यम (मध्यम क्षेत्रासाठी)",
          highVoltage: "उच्च (मोठ्या क्षेत्रासाठी)",
          priceResult: "अंदाजे किंमत:",
          testimonials: "ग्राहकांचे अनुभव",
          contactUs: "आमच्याशी संपर्क साधा",
          whatsappButton: "व्हाट्सअॅपवर विचारा",
          cta: "आज आपले सोलार झटका मशीन मिळवा",
          watchVideo: "व्हिडिओ पहा",
          features: "वैशिष्ट्ये",
          feature1: "सौर ऊर्जेवर चालते - वीज बिल नाही",
          feature2: "सहज स्थापना आणि देखभाल",
          feature3: "दीर्घकाळ टिकणारे आणि मजबूत",
          feature4: "स्मार्टफोन नियंत्रण पर्याय"
        },
        hindi: {
          heroTitle: "सोलर झटका मशीन - किसानों के लिए आदर्श समाधान",
          heroSubtitle: "जानवरों और जंगली जानवरों से अपनी फसलों की रक्षा करें",
          whyNeed: "किसानों को इसकी क्यों जरूरत है",
          benefit1: "फसल सुरक्षा",
          benefit2: "बिजली बिल में बचत",
          benefit3: "पर्यावरण अनुकूल",
          benefit4: "सरकारी सब्सिडी उपलब्ध",
          calculate: "कीमत की गणना करें",
          farmSizeLabel: "खेत का आकार (एकड़)",
          voltageLabel: "आवश्यक वोल्टेज",
          lowVoltage: "कम (छोटे क्षेत्र के लिए)",
          mediumVoltage: "मध्यम (मध्यम क्षेत्र के लिए)",
          highVoltage: "उच्च (बड़े क्षेत्र के लिए)",
          priceResult: "अनुमानित कीमत:",
          testimonials: "ग्राहकों के अनुभव",
          contactUs: "हमसे संपर्क करें",
          whatsappButton: "व्हाट्सएप पर पूछें",
          cta: "आज अपना सोलर झटका मशीन प्राप्त करें",
          watchVideo: "वीडियो देखें",
          features: "विशेषताएँ",
          feature1: "सौर ऊर्जा से चलता है - बिजली बिल नहीं",
          feature2: "आसान स्थापना और रखरखाव",
          feature3: "लंबे समय तक चलने वाला और मजबूत",
          feature4: "स्मार्टफोन नियंत्रण विकल्प"
        },
        english: {
          heroTitle: "Solar Zatka Machine - Ideal Solution for Farmers",
          heroSubtitle: "Protect your crops from animals and wildlife",
          whyNeed: "Why Farmers Need This",
          benefit1: "Crop Protection",
          benefit2: "Electricity Bill Savings",
          benefit3: "Environmentally Friendly",
          benefit4: "Government Subsidies Available",
          calculate: "Calculate Price",
          farmSizeLabel: "Farm Size (Acres)",
          voltageLabel: "Required Voltage",
          lowVoltage: "Low (For Small Areas)",
          mediumVoltage: "Medium (For Medium Areas)",
          highVoltage: "High (For Large Areas)",
          priceResult: "Estimated Price:",
          testimonials: "Customer Testimonials",
          contactUs: "Contact Us",
          whatsappButton: "Ask on WhatsApp",
          cta: "Get Your Solar Zatka Machine Today",
          watchVideo: "Watch Video",
          features: "Features",
          feature1: "Runs on Solar Power - No Electricity Bills",
          feature2: "Easy Installation and Maintenance",
          feature3: "Long-lasting and Durable",
          feature4: "Smartphone Control Option"
        }
      };
    
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Solar Zatka Machine</h3>
                        <p className="text-gray-300">
                            {language === 'marathi' && "शेतीसाठी अत्याधुनिक सौर संरक्षण उपाय"}
                            {language === 'hindi' && "खेती के लिए अत्याधुनिक सौर सुरक्षा समाधान"}
                            {language === 'english' && "Advanced solar protection solution for farming"}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            {language === 'marathi' && "संपर्क माहिती"}
                            {language === 'hindi' && "संपर्क जानकारी"}
                            {language === 'english' && "Contact Information"}
                        </h3>
                        <p className="text-gray-300">
                            {language === 'marathi' && "फोन: +91 98765 43210"}
                            {language === 'hindi' && "फोन: +91 98765 43210"}
                            {language === 'english' && "Phone: +91 98765 43210"}
                        </p>
                        <p className="text-gray-300">
                            {language === 'marathi' && "ईमेल: info@solarzatka.com"}
                            {language === 'hindi' && "ईमेल: info@solarzatka.com"}
                            {language === 'english' && "Email: info@solarzatka.com"}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            {language === 'marathi' && "आमच्या बद्दल"}
                            {language === 'hindi' && "हमारे बारे में"}
                            {language === 'english' && "About Us"}
                        </h3>
                        <p className="text-gray-300">
                            {language === 'marathi' && "आम्ही भारतीय शेतकऱ्यांना नवीनतम तंत्रज्ञानासह सक्षम बनवण्यासाठी समर्पित आहोत"}
                            {language === 'hindi' && "हम भारतीय किसानों को नवीनतम तकनीक से सशक्त बनाने के लिए समर्पित हैं"}
                            {language === 'english' && "We are dedicated to empowering Indian farmers with the latest technology"}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>&copy; 2025 Solar Zatka Machine.
                        {language === 'marathi' && " सर्व हक्क राखीव."}
                        {language === 'hindi' && " सभी अधिकार सुरक्षित।"}
                        {language === 'english' && " All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer