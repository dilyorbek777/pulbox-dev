import { useState } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    id: 0,
    title: "Savdo statistikasi",
    description: "Kundalik, haftalik va oylik tushumlarni real vaqtda kuzating.",
    image: "https://picsum.photos/290/500",
  },
  {
    id: 1,
    title: "To'lovlar nazorati",
    description: "Barcha tranzaksiyalarni bir joyda kuzating.",
    image: "https://picsum.photos/270/300",
  },
  {
    id: 2,
    title: "Qurilma holati",
    description: "Online/offline qurilmalarni monitoring qiling.",
    image: "https://picsum.photos/250/300",
  },
  {
    id: 3,
    title: "Joylashuv samaradorligi",
    description: "Qaysi joyda ko'proq daromad ekanini aniqlang.",
    image: "https://picsum.photos/210/300",
  },
];

export default function Hero3D() {
  const [active, setActive] = useState(0);

  const getPosition = (index: number) => {
    const total = items.length;

    if (index === active) return "center";

    if (index === (active - 1 + total) % total) return "left";

    if (index === (active + 1) % total) return "right";

    return "hidden";
  };

  return (
    <section className="relative min-h-screen py-[62px] bg-radial-[at_50%_70%] to-gray-100 via-white from-[#17BE86] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="text-center mb-1 max-w-2xl">
        <h1 className="text-[32px] md:text-4xl font-bold text-gray-800">
          Real vaqtda monitoring platformasi
        </h1>
        <p className="text-gray-600 mt-4 text-[16px] font-sans font-normal">
          Barcha qurilmalaringizni bitta ekranda kuzating.
          Xatoliklarni oldindan aniqlang va biznesingizni samarali boshqaring.
        </p>
      </div>

      <div className="w-full flex flex-col items-center py-16 ">

        {/* ===== CAROUSEL ===== */}
        <div className="relative my-5 w-full max-w-6xl h-[620px] flex items-center justify-center perspective">
          {items.map((item, index) => {
            const position = getPosition(index);

            return (
              <div
                key={item.id}
                className={`absolute transition-all duration-500 ease-in-out
              ${position === "center" &&
                  "z-30 scale-100 translate-x-0 rotate-y-0 opacity-100"
                  }
              ${position === "left" &&
                  "z-20 -translate-x-[280px] rotate-y-[75deg] opacity-80"
                  }
              ${position === "right" &&
                  "z-20 translate-x-[280px] rotate-y-[-75deg] opacity-80"
                  }
              ${position === "hidden" && "opacity-0 scale-75 pointer-events-none"}
              `}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[816px] h-[603px] object-cover drop-shadow-2xl"
                />
              </div>
            );
          })}
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-2xl bg-white p-6 transition-all duration-300 shadow-md
              ${active === index
                  ? " border-b-4 border-[#17BE86] scale-105 shadow-2xl"
                  : " hover:shadow-2xl"
                }
            `}
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
