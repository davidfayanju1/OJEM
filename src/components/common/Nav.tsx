"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Ministries", href: "/ministries" },
    { label: "Events", href: "/events" },
    { label: "Sermons", href: "/sermons" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show small navbar when scrolled past 100px
      if (currentScrollY > 100) {
        setIsScrolled(true);
      }
      // Show big navbar when at the very top
      else if (currentScrollY <= 10) {
        setIsScrolled(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Handle mobile menu state
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // Big Navbar (shown at top of page)
  const BigNavbar = () => (
    <motion.nav
      initial={{ y: 0 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-emerald-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/images/church_official.jpg"
                alt="Only Jesus Evangelical Mission"
                className="h-16 w-16 rounded-full border-2 border-emerald-600"
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-900">
                Only Jesus
              </h1>
              <p className="text-sm text-emerald-700 font-medium">
                Evangelical Mission
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item.href} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className="text-emerald-800 hover:text-emerald-700 font-medium transition-colors text-[15px]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-emerald-200"
            >
              Visit Us
            </motion.button>
          </div>

          {/* Mobile Menu Button - Hidden in big navbar */}
          <button
            className="md:hidden flex flex-col w-6 h-6 justify-between items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-emerald-700"></span>
            <span className="w-6 h-0.5 bg-emerald-700"></span>
            <span className="w-6 h-0.5 bg-emerald-700"></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );

  // Small Navbar (appears when scrolled)
  const SmallNavbar = () => (
    <motion.nav
      initial={{ y: -100, scale: 0.9 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ y: -100, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/45 backdrop-blur-md border border-emerald-200 rounded-2xl z-50 shadow-lg"
      style={{ width: "fit-content" }}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between space-x-8">
          {/* Logo - Compact */}
          <Link href="/" className="shrink-0 flex items-center space-x-3">
            <img
              src="/images/church_official.jpg"
              alt="Only Jesus Evangelical Mission"
              className="h-10 w-10 rounded-full border-2 border-emerald-600"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-emerald-900">Only Jesus</h1>
            </div>
          </Link>

          {/* Navigation Links - Compact */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.slice(0, 4).map((item) => (
              <motion.div key={item.href} whileHover={{ y: -1 }}>
                <Link
                  href={item.href}
                  className="text-emerald-800 hover:text-emerald-700 font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Compact */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-700 md:block hidden hover:bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-emerald-200"
            >
              Visit Us
            </motion.button>

            {/* Mobile Menu Button for Small Navbar */}
            <button
              className="md:hidden flex flex-col w-5 h-5 justify-between items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 bg-emerald-700"></span>
              <span className="w-5 h-0.5 bg-emerald-700"></span>
              <span className="w-5 h-0.5 bg-emerald-700"></span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );

  // Mobile Menu (shared for both states)
  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-emerald-100 overflow-hidden z-40"
    >
      <div className="px-6 py-6">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="block text-emerald-800 hover:text-emerald-700 font-medium py-3 text-lg border-b border-emerald-50 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-6">
          <button
            onClick={handleLinkClick}
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-xl font-medium text-lg transition-colors shadow-emerald-200"
          >
            Visit Us
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Big Navbar - Shown at top of page */}
      <motion.div
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="fixed top-0 w-full z-40"
      >
        <BigNavbar />

        {/* Mobile Menu for Big Navbar */}
        <AnimatePresence>
          {isMenuOpen && !isScrolled && <MobileMenu />}
        </AnimatePresence>
      </motion.div>

      {/* Small Navbar - Appears when scrolled */}
      <AnimatePresence mode="wait">
        {isScrolled && (
          <>
            <SmallNavbar />

            {/* Mobile Menu for Small Navbar */}
            <AnimatePresence>
              {isMenuOpen && isScrolled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-lg z-40"
                >
                  <MobileMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
