import React from "react";
import Link from "next/link";

const About = () => {
  const branches = [
    {
      name: "OJEM Headquarters",
      location: "Bembo, Ibadan",
      address:
        "22, Benbo, Taiwo street off poly road, Sango, ibadan, Oyo State",
      serviceTimes: ["Sunday: 7:00 AM & 10:00 AM", "Wednesday: 5:30 PM"],
      image: "/images/outsidechurch.jpg",
    },
    {
      name: "OJEM Dugbe Branch",
      location: "Dugbe Central",
      address: "456 Grace Avenue, Dugbe",
      serviceTimes: ["Sunday: 8:00 AM & 11:00 AM", "Friday: 6:00 PM"],
      image: "/images/church.jpg",
    },
    {
      name: "OJEM Bodija Branch",
      location: "Bodija Estate",
      address: "789 Faith Boulevard, Bodija",
      serviceTimes: ["Sunday: 9:00 AM", "Tuesday: 5:00 PM"],
      image: "/images/church2.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill Badge - Left Aligned */}
        <div className="mb-12">
          <span className="bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
            Our Branches
          </span>
        </div>

        {/* Main Title - Left Aligned */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-emerald-600">OJEM</span>
          </h1>
          <p className="text-md text-gray-600 leading-relaxed">
            Walk into any of our 3 branches across Ibadan, Oyo state. Experience
            the same spirit of worship and community at each location.
          </p>
        </div>

        {/* Branch Cards - Full Image with Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Church Image */}
              <div className="absolute inset-0">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

                {/* Additional Gradient for Depth */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-900/10 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {/* Location Badge */}
                <div className="mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/30">
                    {branch.location}
                  </span>
                </div>

                {/* Branch Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {branch.name}
                  </h3>

                  <p className="text-emerald-100 text-sm font-medium opacity-90">
                    {branch.address}
                  </p>

                  {/* Service Times */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">
                      Service Times
                    </h4>
                    <div className="space-y-1">
                      {branch.serviceTimes.map((time, timeIndex) => (
                        <p
                          key={timeIndex}
                          className="text-white/90 text-sm font-light"
                        >
                          {time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visit Button */}
                <button className="mt-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100 translate-y-4">
                  Visit This Branch
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
