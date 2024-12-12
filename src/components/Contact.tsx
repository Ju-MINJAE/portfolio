'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactText } from '@/constants/layout';
import { Mail, Phone, Linkedin, Copy, ExternalLink } from 'lucide-react';
import ContactPopup from './ContactPopup';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const handleAction = (action: string, info: string) => {
    switch (action) {
      case 'copy':
        navigator.clipboard.writeText(info);
        break;
      case 'email':
        setIsPopupOpen(true);
        break;
      case 'link':
        if (info !== 'Not Yet') {
          window.open(info, '_blank');
        } else {
          alert('LinkedIn URL not available.');
        }
        break;
      default:
        console.warn('Unknown action:', action);
    }
  };

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'email':
        return <Mail className="w-8 h-8" />;
      case 'phone':
        return <Phone className="w-8 h-8" />;
      case 'linkedin':
        return <Linkedin className="w-8 h-8" />;
      default:
        return null;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'copy':
        return <Copy className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'link':
        return <ExternalLink className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="Contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Contact</h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactText.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full md:w-1/3 max-w-sm"
            >
              <div className="bg-gray-800 rounded-lg p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-gray-700 hover:shadow-xl transform hover:-translate-y-2 relative">
                <div className="text-blue-400 mb-4">
                  {getIcon(contact.title)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-400 mb-4">{contact.info}</p>
                <button
                  onClick={() => handleAction(contact.onClick, contact.info)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
                >
                  {getActionIcon(contact.onClick)}
                  <span className="ml-2">{contact.btnText}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default Contact;
