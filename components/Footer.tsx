// components/Footer.tsx
"use client";

import { FC } from "react";
import {
  FaLinkedin,
  FaGoogle,
  FaTiktok,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const footerSections = [
  {
    title: "Categories",
    links: [
      "App Development",
      "Programming & Tech",
      "UI Design",
      "Video & Animation",
      "Writing & Translation",
      "Music & Audio",
      "Digital Marketing",
      "AI Services",
      "Consulting",
      "Bike",
      "Automation",
      "Mechanic",
      "Photography",
    ],
  },
  {
    title: "For Clients",
    links: [
      "Your UpPhoto account",
      "Careers",
      "Press & News",
      "Partnerships",
      "Intellectual property claims",
      "Test",
    ],
  },
  {
    title: "Company",
    links: [
      "Contact",
      "Invite a Friend",
      "Privacy Policy",
      "Terms of Service",
      "Upphoto Guides",
      "Help & Support",
    ],
  },
  {
    title: "For Freelancers",
    links: ["Trust & safety", "Buying on UpPhoto", "Selling on UpPhoto"],
  },
  {
    title: "Business Solutions",
    links: ["Events", "Community Standards", "Podcast"],
  },
];

// Animation Variants
const columnVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" as const, delay: i * 0.1 },
  }),
};

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {footerSections.map((section, idx) => (
          <motion.div
            key={section.title}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <h3 className="font-semibold mb-3 text-gray-800">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative hover:text-green-600 transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="text-xs text-gray-500">UpPhoto International Ltd. 2025</p>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-gray-500">
            {[
              { Icon: FaLinkedin, color: "hover:text-blue-600" },
              { Icon: FaGoogle, color: "hover:text-red-500" },
              { Icon: FaTiktok, color: "hover:text-black" },
              { Icon: FaPinterest, color: "hover:text-red-600" },
              { Icon: FaFacebook, color: "hover:text-blue-500" },
            ].map(({ Icon, color }, i) => (
              <Icon
                key={i}
                className={`cursor-pointer transition-transform duration-300 transform hover:scale-110 ${color}`}
              />
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex gap-2 text-xs">
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline transition-all"
            >
              English
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:underline hover:text-green-600 transition-all"
            >
              Arabic
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
