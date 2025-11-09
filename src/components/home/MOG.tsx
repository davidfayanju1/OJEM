"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOG = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const founderImages = [
    {
      src: "/images/papa.jpg",
      alt: "Rev. John Omotayo Olubukun preaching",
    },
    {
      src: "/images/papanmama.jpg",
      alt: "Rev. John Omotayo Olubukun in prayer",
    },
    {
      src: "/images/prayer.jpg",
      alt: "Rev. John Omotayo Olubukun with congregation",
    },
    {
      src: "/images/papa2.jpg",
      alt: "Rev. John Omotayo Olubukun portrait",
    },
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % founderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [founderImages.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % founderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + founderImages.length) % founderImages.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Shows first on mobile */}
        <div className="lg:hidden mb-12">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Man of <span className="text-emerald-600">God</span>
            </h2>

            <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto lg:mx-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Image Carousel */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Display */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={founderImages[currentImageIndex].src}
                  alt={founderImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-800">
                {currentImageIndex + 1} / {founderImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 mt-6">
              {founderImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex
                      ? "ring-2 ring-emerald-500 scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-16 h-16 object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-emerald-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Section Header - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Foundation
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Man of <span className="text-emerald-600">God</span>
              </h2>

              <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Only Jesus Evangelical Mission was founded by God through{" "}
                <strong className="text-emerald-700">
                  Rev. John Omotayo Olubukun
                </strong>{" "}
                in January 1999 in the ancient city of Ibadan.
              </p>

              <p>
                From humble beginnings, the church has been a beacon of hope and
                transformation in the heart of Oyo State. Through seasons of
                growth and challenges, one constant has remained - the
                unwavering love of God manifested through the dedication of our
                founder.
              </p>

              <p>
                The journey hasn't been without its tests. Like any work of God,
                OJEM has faced numerous challenges that threatened its
                existence. Yet through every storm, the church stood firm,
                anchored by divine purpose and the shepherd's heart of Rev. John
                Omotayo Olubukun.
              </p>

              <p className="bg-emerald-50 border-l-4 border-emerald-500 pl-4 py-2 italic">
                "One thing has held this ministry at its core through every
                season - the{" "}
                <strong className="text-emerald-700">love of God</strong> and
                the compassionate{" "}
                <strong className="text-emerald-700">
                  love of our founder
                </strong>
                , Rev. John Omotayo Olubukun. His life has been a living
                testament of 1 Corinthians 13:13 - 'And now these three remain:
                faith, hope and love. But the greatest of these is love.'"
              </p>

              <p>
                Today, OJEM stands as a testimony to God's faithfulness, a
                community where lives are transformed, destinies are discovered,
                and the love of Christ is made manifest to all who enter its
                doors.
              </p>
            </div>

            {/* Signature Quote */}
            <div className="pt-8 border-t border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center lg:text-left"
              >
                <p className="text-2xl md:text-3xl font-light text-gray-800 italic mb-4">
                  "I love you all"
                </p>
                <p className="text-emerald-700 font-semibold">
                  - Rev. John Omotayo Olubukun
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MOG;
