'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_kdcv7jp',
          'template_z8umoyh',
          formRef.current,
          'RgJZVyKThcV4jluMs'
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus({
              message: '성공적으로 이메일이 전송되었습니다!',
              isError: false,
            });
            if (formRef.current) formRef.current.reset();
          },
          (error) => {
            console.error(error.text);
            setStatus({
              message: '이메일 전송에 실패했습니다. 다시 시도해주세요.',
              isError: true,
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const inputClasses =
    'w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  return (
    <motion.div
      className="email-form-container bg-gray-900 p-8 rounded-lg max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Send me a message</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            이름
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="이름을 입력하세요"
            autoComplete="off"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            이메일
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="이메일을 입력하세요"
            autoComplete="off"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            메시지
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="메시지를 입력하세요"
            required
            className={`${inputClasses} h-32 resize-none`}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.div
              className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <>
              <Send className="mr-2" size={18} />
              전송
            </>
          )}
        </motion.button>
      </form>
      {status && (
        <motion.div
          className={`mt-4 p-3 rounded-lg ${
            status.isError
              ? 'bg-red-900 text-red-200'
              : 'bg-green-900 text-green-200'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="flex items-center">
            {status.isError ? (
              <XCircle className="mr-2" size={18} />
            ) : (
              <CheckCircle className="mr-2" size={18} />
            )}
            {status.message}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EmailForm;
