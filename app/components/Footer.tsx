import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/yourusername",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/yourusername",
    },
    {
      id: 3,
      title: "Email",
      icon: <FaEnvelope />,
      link: "mailto:your@email.com",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center border">
      <div className="flex items-center justify-center gap-6">
        {data.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-zinc-800"
            aria-label={item.title}
          >
            <span className="text-2xl">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
