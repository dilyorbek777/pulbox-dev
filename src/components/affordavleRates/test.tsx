// InfiniteCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  color: string; // gradient uchun misol
}

const items: CarouselItem[] = [
  { id: 1, title: 'Element 1', color: 'from-red-500 to-pink-600' },
  { id: 2, title: 'Element 2', color: 'from-blue-500 to-cyan-600' },
  { id: 3, title: 'Element 3', color: 'from-green-500 to-emerald-600' },
  { id: 4, title: 'Element 4', color: 'from-yellow-500 to-amber-600' },
  { id: 5, title: 'Element 5', color: 'from-purple-500 to-indigo-600' },
  { id: 6, title: 'Element 6', color: 'from-orange-500 to-red-600' },
  { id: 7, title: 'Element 7', color: 'from-teal-500 to-cyan-600' },
  { id: 8, title: 'Element 8', color: 'from-fuchsia-500 to-pink-600' },
  // istasangiz yana qo‘shing...
];

const VISIBLE_COUNT = 3;

const InfiniteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_COUNT);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Cheksiz aylanish uchun: asl + old + keyin klonlar
  const extendedItems = [
    ...items.slice(-VISIBLE_COUNT),     // oxirgi 3 ta boshiga
    ...items,                           // asl ro‘yxat
    ...items.slice(0, VISIBLE_COUNT),   // boshidagi 3 ta oxiriga
  ];

  const totalSlides = items.length;
  const slideWidthPercent = 100 / VISIBLE_COUNT;

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Transition tugagach cheksiz aylanishni ta'minlash
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Cheksiz aylanish logikasi
      if (currentIndex >= VISIBLE_COUNT + totalSlides) {
        // oxiriga yetdi → boshiga sakrash (transition yo‘q)
        track.style.transition = 'none';
        setCurrentIndex(VISIBLE_COUNT);
      } else if (currentIndex < VISIBLE_COUNT) {
        // boshiga yetdi → oxiriga sakrash
        track.style.transition = 'none';
        setCurrentIndex(VISIBLE_COUNT + totalSlides - VISIBLE_COUNT);
      }
    };

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => track.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, totalSlides]);

  // Boshlang‘ich joylashuv (transition yo‘q)
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Cheksiz Karusel (React + TS + Tailwind)
      </h2>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
            transition: isTransitioning
              ? 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
              : 'none',
          }}
        >
          {extendedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <div
                className={`h-64 flex items-center justify-center text-white text-3xl font-bold
                  bg-gradient-to-br ${item.color} shadow-inner`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">{item.id}</div>
                  <div>{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chap strelka */}
        <button
          onClick={goToPrev}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white 
            w-12 h-12 rounded-full flex items-center justify-center text-3xl transition-all 
            hover:scale-110 disabled:opacity-40 disabled:hover:scale-100 z-10"
          aria-label="Oldingi"
        >
          ‹
        </button>

        {/* O‘ng strelka */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white 
            w-12 h-12 rounded-full flex items-center justify-center text-3xl transition-all 
            hover:scale-110 disabled:opacity-40 disabled:hover:scale-100 z-10"
          aria-label="Keyingi"
        >
          ›
        </button>
      </div>

      <p className="text-center mt-6 text-gray-600">
        Strelkalarni bosing yoki klaviaturada ← → tugmalarini ishlating
      </p>
    </div>
  );
};

export default InfiniteCarousel;