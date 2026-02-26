// 'use client'; // Agar Next.js bo'lsa majburiy

// import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Card {
  id: number;
  title: string;
  description: string;
  // icon yoki image qo'shishingiz mumkin
}

const cards: Card[] = [
  { id: 1, title: "Card 1", description: "Bu birinchi cardning tavsifi" },
  { id: 2, title: "Card 2", description: "Ikkinchi card haqida batafsil" },
  { id: 3, title: "Card 3", description: "Uchinchi variant juda yaxshi" },
  { id: 4, title: "Card 4", description: "To'rtinchi cardning afzalliklari" },
  { id: 5, title: "Card 5", description: "Beshinchi card – eng zo'ri" },
  { id: 6, title: "Card 6", description: "Oxirgi card, lekin cheksiz!" },
];

// type CarouselAlign = 'start' | 'center' | 'end' | 'start-left' | 'start-right';

// const alignValue: CarouselAlign = 'start'; // yoki propsdan kelgan qiymat

export default function CardsCarousel() {
  const OPTIONS = {
    loop: true,           // Cheksiz aylanish – asosiy narsa shu!
    // align: alignValue,       // chapdan boshlanadi
    dragFree: false,      // to'liq snap bo'ladi (drag qilganda to'xtaydi)
    slidesToScroll: 1,    // har safar 1 ta card o'tadi
  };

  const [emblaRef] = useEmblaCarousel(OPTIONS);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {cards.map((card) => (
          <div
            key={card.id}
            className="embla__slide flex-[0_0_33.333%] min-w-0 pl-4" // 3 ta ko'rinadi (33.3%)
            // Responsive qilish uchun: md:flex-[0_0_50%] lg:flex-[0_0_33.333%]
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              {/* Agar icon/image bo'lsa shu yerga qo'shing */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}