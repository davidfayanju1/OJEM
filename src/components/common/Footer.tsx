import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const connectLinks = [
    { name: "Become a member", href: "/membership" },
    { name: "Prayer Request", href: "/prayer" },
    { name: "First Timers", href: "/first-timers" },
    { name: "Second Timers", href: "/second-timers" },
    { name: "Online Community", href: "/community" },
    { name: "New Campus Volunteers", href: "/volunteer" },
    { name: "Welfare Request", href: "/welfare" },
  ];

  const ministriesLinks = [
    { name: "Celebration Church Worship", href: "/worship" },
    { name: "Celeb Teens", href: "/teens" },
    { name: "Celeb Kids", href: "/kids" },
    { name: "Membership Classes", href: "/membership-classes" },
    { name: "Celebrations", href: "/celebrations" },
    { name: "Pre Marital Counselling", href: "/pre-marital" },
    { name: "Post Marital Counselling", href: "/post-marital" },
  ];

  const resourcesLinks = [
    { name: "Watch Online", href: "/watch" },
    { name: "Sermons", href: "/sermons" },
    { name: "Counselling", href: "/counselling" },
  ];

  return (
    <footer className="bg-linear-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-bl from-emerald-200/20 to-teal-300/10 rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/church_official.jpg"
                alt="Only Jesus Evangelical Mission"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-green-700"
              />
            </div>
            <p className="text-emerald-800/80 mb-6 leading-relaxed text-sm">
              A community of believers dedicated to spreading God&apos;s love
              and serving our neighbors through faith, hope, and charity.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="youtube" />
              <SocialIcon href="#" icon="instagram" />
            </div>
          </div>

          {/* CONNECT Section */}
          <div>
            <h4 className="text-emerald-800 font-semibold mb-4 text-lg border-b border-emerald-200 pb-2">
              CONNECT
            </h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200 text-sm group flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MINISTRIES Section */}
          <div>
            <h4 className="text-emerald-800 font-semibold mb-4 text-lg border-b border-emerald-200 pb-2">
              MINISTRIES
            </h4>
            <ul className="space-y-2">
              {ministriesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200 text-sm group flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES Section */}
          <div>
            <h4 className="text-emerald-800 font-semibold mb-4 text-lg border-b border-emerald-200 pb-2">
              RESOURCES
            </h4>
            <ul className="space-y-2 mb-6">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200 text-sm group flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* MEDIA Section */}
            <h4 className="text-emerald-800 font-semibold mb-4 text-lg border-b border-emerald-200 pb-2">
              MEDIA
            </h4>
            <div className="space-y-2">
              <Link
                href="/sermons"
                className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200 text-sm group flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-600 transition-colors"></span>
                Sermons Archive
              </Link>
              <Link
                href="/live"
                className="text-emerald-700 hover:text-emerald-900 transition-colors duration-200 text-sm group flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 group-hover:bg-emerald-600 transition-colors"></span>
                Live Stream
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-emerald-200 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                Stay Connected
              </h4>
              <p className="text-emerald-700/80 text-sm">
                Subscribe to our newsletter for updates and events
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white border border-emerald-300 text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full sm:w-64 shadow-sm"
              />
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-emerald-700 text-sm">
              © {currentYear} Only Jesus Evangelical Mission. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-emerald-600 hover:text-emerald-800 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Updated SocialIcon component with green theme
const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
  const icons: { [key: string]: string } = {
    facebook:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    youtube:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  };

  return (
    <Link
      href={href}
      className="w-10 h-10 bg-emerald-100 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
      aria-label={icon}
    >
      <svg
        className="w-5 h-5 text-emerald-700 hover:text-white transition-colors duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={icons[icon]} />
      </svg>
    </Link>
  );
};

export default Footer;
