import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  title: "string",
  description: "string",
  phone_image: "string",
  desktop_image: "string",
  is_active: true
}


export default function Hero3D() {

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [active, setActive] = useState(0);

  const getPosition = (index: number) => {
    const total = items.length;

    if (index === active) return "center";

    if (index === (active - 1 + total) % total) return "left";

    if (index === (active + 1) % total) return "right";

    return "hidden";
  };

  useEffect(() => {
    axios
      .get("/api/v1/carousels/")
      .then((res) => {
        setItems(res.data.results);

      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(error);


  return (
    <section className="relative min-h-screen py-[62px] bg-radial-[at_50%_70%] to-gray-100 via-white from-[#17BE86] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="text-center font-inter  mb-1 max-w-2xl">
        <h1 className="text-[32px] md:text-4xl tracking-wider font-bold text-gray-800">
          Real vaqtda monitoring platformasi
        </h1>
        <p className="text-gray-600 mt-4 text-[16px] font-sans font-normal">
          Barcha qurilmalaringizni bitta ekranda kuzating.
          Xatoliklarni oldindan aniqlang va biznesingizni samarali boshqaring.
        </p>
      </div>


      <div className="w-full flex flex-col max-md:gap-8 items-center py-16 ">

        {/* ===== CAROUSEL ===== */}
        <div className="relative max-md:hidden my-5 w-full max-w-6xl h-[620px] max-lg:h-[300px] flex items-center justify-center perspective">
          {items.map((item, index) => {
            const position = getPosition(index);

            return (
              <div

                onClick={() => setActive(index)}
                key={item.title}
                className={`absolute  transition-all duration-500 ease-in-out
              ${position === "center" &&
                  "z-30 scale-100 translate-x-0 rotate-y-0 opacity-100"
                  }
              ${position === "left" &&
                  "z-20 -translate-x-[500px] max-lg:-translate-x-[200px] rotate-y-[75deg] opacity-50"
                  }
              ${position === "right" &&
                  "z-20 translate-x-[500px] max-lg:translate-x-[200px] rotate-y-[-75deg] opacity-50"
                  }
              ${position === "hidden" && "opacity-0 scale-75 pointer-events-none"}
              `}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={item.desktop_image}
                  alt={item.title}
                  className={`max-w-[816px] max-lg:h-[300px] overflow-hidden h-[603px] object-cover drop-shadow-2xl ${loading ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'}`}
                />
              </div>
            );
          })}
        </div>

        <div className="relative md:hidden my-5 w-full max-w-6xl h-[620px] max-lg:h-[300px] flex items-center justify-center perspective">
          {items.map((item, index) => {
            const position = getPosition(index);

            return (
              <div

                onClick={() => setActive(index)}
                key={item.title}
                className={`absolute  transition-all duration-500 ease-in-out
              ${position === "center" &&
                  "z-30 scale-100 translate-x-0 rotate-y-0 opacity-100"
                  }
              ${position === "left" &&
                  "z-20 -translate-x-[500px] max-lg:-translate-x-[200px] rotate-y-[75deg] opacity-50"
                  }
              ${position === "right" &&
                  "z-20 translate-x-[500px] max-lg:translate-x-[200px] rotate-y-[-75deg] opacity-50"
                  }
              ${position === "hidden" && "opacity-0 scale-75 pointer-events-none"}
              `}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={item.phone_image}
                  alt={item.title}
                  className={`max-w-[816px] max-lg:h-[450px]   overflow-hidden h-[603px] object-cover drop-shadow-2xl ${loading ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'}`}
                />
              </div>
            );
          })}
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid max-[625px]:grid-cols-1 grid-cols-2 md:grid-cols-4 my-5 gap-6 mt-12 max-w-5xl">
          {items.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-2xl bg-white p-6 transition-all duration-300 shadow-md
              ${active === index
                  ? " border-b-4 border-[#17BE86] scale-105 shadow-2xl"
                  : " hover:shadow-2xl"
                }
            `}
            >
              <h3 className="font-bold text-lg mb-2 tracking-wider font-inter">{item.title}</h3>
              <p className="text-sm opacity-80 font-inter tracking-wide">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 my-10 ">
          {items.map((i, index) => (
            <div key={i.title}
              onClick={() => setActive(index)} className={`flex w-3 h-3 rounded-full ${active === index ? " bg-[#17BE86E8]" : "bg-[#D9D9D9]"}`}>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
