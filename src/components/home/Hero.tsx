"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  overlay: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Initialize video refs
  if (videoRefs.current.length === 0) {
    videoRefs.current = [null, null, null];
  }

  // Church-themed slides
  const slides: Slide[] = [
    {
      title: "Experience God's Presence",
      text: "Join our vibrant community where faith is awakened and miracles happen. Come worship with us in spirit and truth.",
      buttonText: "Join Us",
      buttonLink: "/visit",
      mediaType: "image",
      mediaSrc: "/images/prayer.jpg",
      overlay: "bg-gradient-to-r from-gray-900/70 to-gray-900/40",
    },
    {
      title: "",
      text: "",
      buttonText: "Pray With Us",
      buttonLink: "/prayer",
      mediaType: "image",
      mediaSrc: "/images/OJEM.jpg",
      overlay: "bg-gradient-to-r from-amber-900/40 to-gray-900/60",
    },
    {
      title: "",
      text: "",
      buttonText: "Get Prayer",
      buttonLink: "/prayer-request",
      mediaType: "image",
      mediaSrc: "/images/OJEM2.jpg",
      overlay: "bg-gradient-to-r from-gray-900/80 to-amber-900/30",
    },
  ];

  // Handle slide progression
  useEffect(() => {
    if (isPlaying) {
      // Reset and start progress animation
      if (progressRef.current) {
        progressRef.current.style.animation = "none";
        // Trigger reflow
        progressRef.current.getBoundingClientRect();
        progressRef.current.style.animation = "progress 7s linear forwards";
      }

      progressInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      if (progressRef.current) {
        progressRef.current.style.animationPlayState = "paused";
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, slides.length, currentSlide]);

  // Handle video playback
  useEffect(() => {
    slides.forEach((slide, index) => {
      const videoRef = videoRefs.current[index];
      if (slide.mediaType === "video" && videoRef) {
        if (index === currentSlide && isPlaying) {
          videoRef.play().catch(console.error);
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentSlide, isPlaying, slides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(true);
  };

  // Set video ref function
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Slider container */}
      <div className="slider-container relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Media content */}
            <div className="media-container h-full w-full">
              {slide.mediaType === "image" ? (
                <img
                  src={slide.mediaSrc}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={setVideoRef(index)}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop"
                >
                  <source src={slide.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Overlay */}
            <div className={`absolute inset-0 ${slide.overlay}`}></div>

            {/* Text content */}
            <div className="text-container absolute inset-0 h-full w-full flex flex-col items-center justify-center px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {slide.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-xl md:text-2xl mx-auto text-center md:w-[60%] w-full mb-8 leading-relaxed"
              >
                {slide.text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href={slide.buttonLink}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl shadow-amber-500/25 inline-block"
                >
                  {slide.buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Indicators and controls */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4 z-20 bg-black/30 backdrop-blur-sm rounded-full pl-4 pr-2 py-2 border border-white/20">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            onClick={nextSlide}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-green-400 scale-125"
                    : "bg-gray-400 hover:bg-gray-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress circle and play/pause */}
          <div className="relative">
            <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="#4A4A4A"
                strokeWidth="2"
              />
              <circle
                key={currentSlide}
                ref={progressRef}
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="#0f8e4b"
                strokeWidth="2"
                strokeDasharray="88"
                strokeDashoffset="88"
                style={{
                  animation: isPlaying ? "progress 7s linear forwards" : "none",
                }}
              />
            </svg>
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex cursor-pointer items-center justify-center text-white"
              aria-label={isPlaying ? "Pause slider" : "Play slider"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Service times overlay */}
        <div className="absolute top-8 left-8 z-20 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <h3 className="text-green-400 font-semibold text-lg mb-2">
            Service Times
          </h3>
          <div className="text-white text-sm space-y-1">
            <div className="flex justify-between gap-4">
              <span>Sunday:</span>
              <span>7:00 AM & 10:00 AM</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Tuesday:</span>
              <span>5:30 PM</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Thursday:</span>
              <span>10:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes progress {
          0% {
            stroke-dashoffset: 88;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .slide {
          transition: opacity 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
