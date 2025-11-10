"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonies = () => {
  const [activeTestimony, setActiveTestimony] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const testimonies = [
    {
      content:
        "Before OJEM, I was searching for meaning in all the wrong places. The moment I stepped into this church, the tangible presence of the Holy Spirit touched me in ways I cannot explain. My life has never been the same since.",
      yoruba:
        "Ṣaaju OJEM, mo n wa itumọ ni gbogbo awọn ibi ti ko tọ. Ni igba ti mo gunlẹ si inu ilejọsìn yii, iwọlẹ ti Ẹmi Mimo kan mi ni ọna ti emi ko le ṣalaye. Aye mi ko ti jẹ bẹ mọ.",
      scripture: "John 4:14",
    },
    {
      content:
        "I was struggling with financial breakthrough for years. After Papa OJEM prayed for me, contracts I had been waiting for started coming in. God used OJEM to open doors man could not shut.",
      yoruba:
        "Mo ti n jagun pẹlu isunu ọrọ owó fun ọdun. Lẹhin ti Papa OJEM gbadura fun mi, awọn adehun ti mo ti n reti bẹrẹ si wọle. Ọlọrun lo OJEM lati ṣii awọn ilẹkun ti eniyan ko le pa.",
      scripture: "Malachi 3:10",
    },
    {
      content:
        "After counseling with Papa OJEM about my marriage, God restored what was broken. My wife and I found love again. The Holy Spirit gave us wisdom to rebuild our home.",
      yoruba:
        "Lẹhin iforokan si Papa OJEM nipa igbeyawo mi, Ọlọrun tun ṣe ohun ti o fọ. Aya mi ati ema ṣe ifẹ lẹẹkansi. Ẹmi Mimo fun wa ni oye lati tun ile wa sẹ.",
      scripture: "1 Peter 4:8",
    },
    {
      content:
        "I had a dream where Papa OJEM was praying for me. When I came to church the next day, he called me out and prayed the exact prayer from my dream. That was my turning point.",
      yoruba:
        "Mo ni ala kan nibiti Papa OJEM n gbadura fun mi. Nigbati mo de ilejọsìn ni ọjọ keji, o pe mi jade o si gbadura gangan adura naa lati inu ala mi. Iyen ni aaye iyipada mi.",
      scripture: "Joel 2:28",
    },
    {
      content:
        "My business was failing for 3 years. After attending OJEM's business breakthrough service, God gave me divine strategies. Now I have multiple branches across Ibadan.",
      yoruba:
        "Iṣẹ ọjà mi ti n ṣẹnu fun ọdun 3. Lẹhin ti mo lọ si iṣẹ isunu ọjà OJEM, Ọlọrun fun mi ni awọn ilana iṣẹ ọrun. Bayi mo ni awọn ẹka pupọ kariaye Ibadan.",
      scripture: "Deuteronomy 28:8",
    },
    {
      content:
        "I was barren for 8 years. The night Papa OJEM laid hands on me during vigil, I felt something leave my body. Today I'm holding my twin babies - miracles from God through OJEM.",
      yoruba:
        "Mo jẹ alaini ọmọ fun ọdun 8. Ni alẹ ti Papa OJEM fi ọwọ kan mi nigba aṣẹ, mo lero nkan kan ti o fi mi silẹ. Loni mo ti mu awọn ọmọ meji mi - awọn iyanu lati Ọlọrun nipasẹ OJEM.",
      scripture: "1 Samuel 1:27",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimony((prev) => (prev + 1) % testimonies.length);
      setShowTranslation(false); // Reset translation when changing testimony
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonies.length]);

  const currentTestimony = testimonies[activeTestimony];

  return (
    <section className="py-20 bg-linear-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full translate-x-48 translate-y-48"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Divine Encounters
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              God's <span className="text-emerald-600">Testimonies</span> at
              OJEM
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories of divine intervention, healing, and breakthrough
              through encounters at OJEM. From counseling sessions to powerful
              prayers, witness how God is moving in our midst.
            </p>
          </motion.div>
        </div>

        {/* Main Testimony Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative">
            {/* Translation Toggle */}
            <div className="absolute -top-4 -right-4 flex flex-col space-y-2">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {showTranslation ? "English" : "Yorùbá"}
              </button>
              <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                {showTranslation ? "Yorùbá" : "English"}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimony}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="mb-8">
                  <svg
                    className="w-12 h-12 text-emerald-400/60 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Testimony Content */}
                <blockquote className="mb-8">
                  <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light italic">
                    "
                    {showTranslation
                      ? currentTestimony.yoruba
                      : currentTestimony.content}
                    "
                  </p>
                </blockquote>

                {/* Scripture Reference */}
                <div className="inline-block bg-amber-50 border border-amber-200 rounded-full px-6 py-3">
                  <p className="text-amber-800 font-semibold text-sm">
                    {currentTestimony.scripture}
                  </p>
                </div>

                {/* Language Indicator */}
                <div className="mt-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {showTranslation
                      ? "Translated to Yorùbá"
                      : "Original in English"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {testimonies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimony(index);
                    setShowTranslation(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimony
                      ? "bg-emerald-500 scale-125"
                      : "bg-emerald-200 hover:bg-emerald-300"
                  }`}
                  aria-label={`Go to testimony ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-700 text-lg mb-6">
              Has God done something remarkable in your life through OJEM?
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl shadow-emerald-200">
              Share Your Testimony
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
