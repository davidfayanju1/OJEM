"use client";

import React from "react";
import Link from "next/link";

const News = () => {
  // Function to handle Add to Calendar
  const handleAddToCalendar = () => {
    // Create calendar event data
    const eventData = {
      title: "ORU IRANTI - Night of Remembrance",
      description:
        "A sacred night of reflection, worship, and remembrance as we celebrate God's faithfulness throughout the years.",
      location:
        "OJEM Headquarters, 123 Salvation Street, Molete, Ibadan, Oyo State",
      startTime: "2025-11-14T23:00:00", // November 14, 2025, 11:00 PM
      endTime: "2025-11-15T05:00:00", // November 15, 2025, 5:00 AM
    };

    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventData.title
    )}&dates=20251114T230000/20251115T050000&details=${encodeURIComponent(
      eventData.description
    )}&location=${encodeURIComponent(eventData.location)}`;

    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, "_blank");
  };

  // Function to handle Share Event
  const handleShareEvent = async () => {
    const shareData = {
      title: "ORU IRANTI - Night of Remembrance",
      text: "Join us for ORU IRANTI - Night of Remembrance at OJEM Headquarters on November 14, 2025, 11:00 PM - 5:00 AM",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Use Web Share API if available (mobile devices)
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.text} - ${shareData.url}`
        );
        alert("Event details copied to clipboard!");
      } else {
        // Final fallback: Open share dialog
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareData.text
        )}&url=${encodeURIComponent(shareData.url)}`;
        window.open(twitterUrl, "_blank", "width=600,height=400");
      }
    } catch (error) {
      console.log("Error sharing:", error);
      // Fallback to clipboard if Web Share API fails
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `${shareData.text} - ${shareData.url}`
        );
        alert("Event details copied to clipboard!");
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Church <span className="text-emerald-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for transformative worship experiences and community
            gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Mobile-optimized image container */}
              <div className="relative w-full h-[300px] md:h-[500px]">
                <img
                  src="/images/OJEM.jpg"
                  alt="ORU IRANT - Night of Remembrance"
                  className="w-full h-full object-contain md:object-cover bg-white"
                />

                {/* Gradient Overlay - Only on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent hidden md:block"></div>

                {/* Date Badge - Repositioned for mobile */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg">
                  <div className="text-emerald-600 font-bold text-xl md:text-2xl">
                    14
                  </div>
                  <div className="text-gray-900 font-semibold text-xs md:text-sm">
                    NOV
                  </div>
                  <div className="text-gray-500 text-xs">2025</div>
                </div>

                {/* Mobile Info Overlay - Shows key info on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                  <h3 className="text-white font-bold text-lg mb-1">
                    ORU <span className="text-emerald-300">IRANTI</span>
                  </h3>
                  <p className="text-emerald-200 text-sm font-semibold">
                    Night of Remembrance
                  </p>
                  <p className="text-white text-xs mt-1">
                    Nov 14, 2025 • 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400/10 rounded-full hidden md:block"></div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-8">
            {/* Section Title - Hidden on mobile since it's in the image overlay */}
            <div className="hidden md:block">
              <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Upcoming Event
              </span>

              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ORU <span className="text-emerald-600">IRANTI</span>
              </h3>

              <p className="text-2xl text-emerald-700 font-semibold mb-6">
                Night of Remembrance
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                A sacred night of reflection, worship, and remembrance as we
                celebrate God's faithfulness throughout the years. Join us for
                an evening of powerful testimonies, heartfelt prayers, and
                spiritual renewal.
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              {/* Time */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    Time
                  </h4>
                  <p className="text-gray-700">Friday, 14th November 2025</p>
                  <p className="text-emerald-600 font-medium">
                    11:00 PM - 5:00 AM
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    Location
                  </h4>
                  <p className="text-gray-700">OJEM Headquarters</p>
                  <p className="text-emerald-600 font-medium">
                    123 Salvation Street, Molete, Ibadan, Oyo State
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCalendar}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl shadow-emerald-200"
              >
                Add to Calendar
              </button>
              <button
                onClick={handleShareEvent}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-200"
              >
                Share Event
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="text-emerald-800 text-sm">
                <strong>Note:</strong> This event is open to all. Come with a
                heart ready to worship and receive from God. Special prayer
                sessions will be available for those seeking spiritual guidance
                and breakthrough.
              </p>
            </div>
          </div>
        </div>

        {/* View All Events Link */}
        <div className="text-center mt-16">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors group"
          >
            View All Church Events
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
