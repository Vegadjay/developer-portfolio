"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Clock = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted || !time) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-4 left-4 z-50 text-left"
    >
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 space-y-1">
        <motion.div
          key={formatTime(time)}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300"
        >
          {formatTime(time)}
        </motion.div>
        <motion.div
          key={formatDate(time)}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="text-xs text-zinc-500 dark:text-zinc-400"
        >
          {formatDate(time)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Clock;