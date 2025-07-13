"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '@/data/aboutme';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Email</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Drop me a line anytime</p>
                <a
                  href={`mailto:${aboutMeData.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {aboutMeData.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Phone</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Let's have a conversation</p>
                <a
                  href={`tel:${aboutMeData.phone}`}
                  className="text-green-600 dark:text-green-400 hover:underline font-medium"
                >
                  {aboutMeData.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Location</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Come say hello</p>
                <span className="text-purple-600 dark:text-purple-400 font-medium">
                  {aboutMeData.location}
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <motion.a
              href={`mailto:${aboutMeData.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} className="mr-2" />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Navigation />
    </main>
  );
}