"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function () {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I create an account with RAFT?",
      answer:
        "Creating an account with RAFT is simple and straightforward. Visit our website or download our mobile app, click on 'Sign Up', and follow the guided process. You'll need to provide basic information like your email, phone number, and verify your identity. The entire process typically takes less than 5 minutes.",
    },
    {
      question: "How does RAFT ensure the security of my financial data?",
      answer:
        "RAFT takes security seriously and employs multiple layers of protection. We use bank-level 256-bit SSL encryption, two-factor authentication, and store your data in secure, FDIC-insured partner banks. We never store your banking credentials directly and use read-only connections to access your account information.",
    },
    {
      question: "What types of transactions can I perform with RAFT?",
      answer:
        "With RAFT, you can perform various financial transactions including automated savings transfers, investment purchases, bill payments, peer-to-peer transfers, and portfolio rebalancing. You can also set up recurring transactions and customize your financial goals through our intuitive platform.",
    },
    {
      question: "What benefits does RAFT offer for wealth management?",
      answer:
        "RAFT offers comprehensive wealth management benefits including automated portfolio diversification, low-cost ETF investments, tax-loss harvesting, personalized financial planning, and 24/7 access to your financial dashboard. Our robo-advisor technology helps optimize your investments while keeping fees minimal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen text-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-8xl md:text-6xl font-light mb-8 md:mb-16 leading-tight">
          Frequently asked <br />
          questions
        </h2>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div className="border-b border-gray-800" key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-betwween items-center py-6 md:py-8 text-left hover:bg-gray-900/20 transition-colors duration-200"
              >
                <span className="text-lg md:text-xl font-loght pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ml-auto md:w-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max0h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 md:pb-8 text-gray-300 text-base md:text-lg font-light leading-relaxed pr-8 md:pr-12">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
