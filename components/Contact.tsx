"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully! I'll get back to you soon.", {
          description: "Thank you for reaching out!",
        });
        setEmail("");
      } else {
        toast.error(data.error || "Failed to send email. Please try again.", {
          description: "Please check your connection and try again.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.", {
        description: "Network error occurred. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-28 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl space-y-3 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
          Contact
        </h1>
        <div className="space-y-4">
          <p className="text-zinc-500 dark:text-zinc-400">
            Drop your email, and I will reach out to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mx-auto h-full w-full rounded-lg border border-neutral-300 bg-neutral-100 p-4 dark:border-zinc-700 dark:bg-transparent">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Place your email here"
                  className="w-full rounded-md border border-zinc-400 p-2 outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-transparent dark:text-white dark:focus:ring-zinc-700"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-zinc-900 px-4 py-2 text-white hover:cursor-pointer hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <div className="mt-5 flex items-center justify-center gap-4">
            <Link
              href="https://x.com/JAY_VEGAD_"
              className="rounded-md border p-2 font-bold text-black dark:text-white"
            >
              @JAY_VEGAD_
            </Link>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <Link
              href="https://github.com/Vegadjay/developer-portfolio"
              className="group flex items-center gap-2 rounded-md border p-2 font-bold text-black dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 transition-all duration-200"
              >
                <path
                  className="transition-all duration-200 group-hover:fill-yellow-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.25l-5.197 3.102 1.486-6.36-4.789-4.14 6.364-.548L12 3.75l2.136 5.554 6.364.548-4.789 4.14 1.486 6.36z"
                />
              </svg>
              Star on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
