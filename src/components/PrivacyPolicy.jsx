import React from 'react';
import { motion } from 'framer-motion';

const privacyPolicies = [
    {
        title: 'Information We Collect',
        content: (
            <ul className="list-disc list-inside">
                <li>
                    <strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and other contact details when you register on our site, subscribe to our newsletter, or fill out a form.
                </li>
                <li>
                    <strong>Usage Data:</strong> We collect information about how you use our website, such as your IP address, browser type, pages visited, and the time and date of your visit.
                </li>
            </ul>
        ),
    },
    {
        title: 'Use of Information',
        content: (
            <ul className="list-disc list-inside">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Develop new products, services.</li>
            </ul>
        ),
    },
];

const PrivacyPolicy = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 pt-[110px] py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
                >
                    <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
                    {privacyPolicies.map((policy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-6"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{policy.title}</h2>
                            <div className="text-gray-700">{policy.content}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </>
    )
}

export default PrivacyPolicy