import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const terms = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using our services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using our services.',
  },
  {
    title: 'Use of Services',
    content:
      'You agree to use our website and services only for lawful purposes. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content, trademarks, service marks, trade names, logos, and graphics on this site are the property of Mumbling Monkeys Media or its licensors. You may not use, reproduce, distribute, or create derivative works of our content without express written permission.',
  },
  {
    title: 'User Content',
    content:
      'By submitting any content to our website, you grant Mumbling Monkeys Media a perpetual, non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and distribute your content in any media.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'In no event shall Mumbling Monkeys Media be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services, including, but not limited to, reliance by a user on any information obtained from Mumbling Monkeys Media.',
  },
  {
    title: 'Changes to Terms',
    content:
      'Mumbling Monkeys Media reserves the right to modify these Terms of Use at any time. We will notify users of any changes by posting the new terms on our website. Your continued use of the services following the posting of changes constitutes your acceptance of such changes.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms shall be governed and construed in accordance with the laws of Bengaluru, without regard to its conflict of law principles.',
  },
];
const TermsOfUse = () => {
    return (
        <>
        <div className="min-h-screen   bg-gray-100 py-6 pt-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <h1 className="md:text-3xl font-bold mb-8 text-center">Terms of Use</h1>
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <h2 className="md:text-xl font-semibold mb-2">{term.title}</h2>
                <p className="text-gray-700 md:text-base xs:text-xs">{term.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
     
            </>
      );
}

export default TermsOfUse