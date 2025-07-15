"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "@/data/aboutme";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-blue-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Drop me a line anytime
              </p>
              <a
                href={`mailto:${aboutMeData.email}`}
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                {aboutMeData.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <Phone
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Let's have a conversation
              </p>
              <a
                href={`tel:${aboutMeData.phone}`}
                className="font-medium text-green-600 hover:underline dark:text-green-400"
              >
                {aboutMeData.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <MapPin
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Location
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Come say hello
              </p>
              <span className="font-medium text-purple-600 dark:text-purple-400">
                {aboutMeData.location}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href={`mailto:${aboutMeData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
          >
            <Mail size={20} className="mr-2" />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
