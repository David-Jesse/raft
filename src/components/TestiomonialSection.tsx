"use client"

import React, { useState } from "react";
import Image from "next/image";
import smallLeftArrow from "../assets/images/smallLeftArrow.png";
import smallRightArrow from "../assets/images/smallRightArrow.png";

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonialPages = [
    [
      {
        id: 1,
        text: "RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
        name: "Robert Fox",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 2,
        text: "I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
        name: "Cameron Williamson",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 3,
        text: "RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
        name: "Esther Howard",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      },
    ],
    [
      {
        id: 4,
        text: "The investment opportunities through RAFT have exceeded my expectations. Their platform is intuitive and their customer service is exceptional. I've seen consistent growth in my portfolio since joining.",
        name: "Sarah Johnson",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 5,
        text: "RAFT's automated investing features have simplified my financial life tremendously. The AI-driven recommendations are spot-on, and I love how transparent everything is. Highly recommend to anyone serious about their financial future.",
        name: "Michael Chen",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1507464175227-c2b6c39e1a0b?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 6,
        text: "What sets RAFT apart is their commitment to education. They don't just manage your money; they teach you how to make better financial decisions. The resources and webinars have been incredibly valuable.",
        name: "Lisa Rodriguez",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      },
    ],
    [
      {
        id: 7,
        text: "The retirement planning services at RAFT have given me confidence about my golden years. Their advisors took time to understand my unique situation and created a comprehensive strategy that aligns with my retirement goals.",
        name: "David Thompson",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 8,
        text: "RAFT's mobile app is a game-changer. I can monitor my investments, make transfers, and get insights on the go. The real-time notifications keep me informed without being overwhelming. It's financial management made simple.",
        name: "Jennifer Lee",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      },
      {
        id: 9,
        text: "The tax optimization strategies RAFT implemented have saved me thousands of dollars. Their holistic approach to wealth management considers every aspect of my financial life. I'm grateful for their expertise and dedication.",
        name: "Mark Wilson",
        title: "Happy RAFT User",
        avatar:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      },
    ],
  ];

  const totalPages = testimonialPages.length;
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-green-400 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-7xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Join over 3 million
            <br />
            members
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {testimonialPages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex-shrink-0 flex flex-col lg:flex-row"
              >
                {page.map((testimonial, index) => (
                  <div key={testimonial.id} className="flex-1 flex">
                    {/* Testimonial Card */}
                    <div className="flex-1 p-6 lg:p-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 rounded-lg">
                      {/* Testimonial Text */}
                      <div className="mb-8">
                        <p className="text-gray-900 text-2xl lg:text-lg leading-relaxed font-medium">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* User info */}
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={20}
                            height={20}
                            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-bold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-700 text-sm font-medium">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    {index < page.length - 1 && (
                      <div className="hidden lg:block">
                        <div className="w-px bg-gray-800 bg-opacity-30 h-full mx-4"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Bottom Right */}
        <div className="flex justify-end mt-12 space-x-4">
            <button
                onClick={prevPage}
                className="bg-white rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-lg"
                disabled={currentPage === 0}
            >
                <Image 
                    src={smallLeftArrow}
                    alt="Left Arrow"
                    width={12}
                    height={12}
                />
            </button>
            <button
                onClick={nextPage}
                className="bg-white rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus: ring-gray-300 shadow-lg"
                disabled={currentPage === totalPages - 1}
            >
                <Image 
                    src={smallRightArrow}
                    alt="Right Arrow"
                    width={12}
                    height={12}
                />
            </button>   
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;