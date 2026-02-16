import type { FC } from "react";
import { motion } from "framer-motion";
import left from "../assets/laptop-left.png";
import center from "../assets/laptop-center.png";
import right from "../assets/laptop-right.png";

interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Savdo statistikasi",
    description:
      "Kunlik, haftalik va oylik tushumlarni real vaqtda kuzating.",
  },
  {
    title: "To‘lovlar nazorati",
    description:
      "Barcha tranzaksiyalarni bir joyda nazorat qiling.",
  },
  {
    title: "Qurilma holati",
    description:
      "Vending qurilmalarining ishlash holatini tekshiring.",
  },
  {
    title: "Joylashuv samaradorligi",
    description:
      "Qaysi nuqta ko‘proq daromad keltirayotganini aniqlang.",
  },
];

const Hero3D: FC = () => {
  return (
    <section className="relative min-h-screen py-[62px] bg-radial-[at_50%_70%] to-gray-100 via-white from-[#17BE86] flex flex-col items-center justify-center overflow-hidden px-4">

      {/* Title */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-[32px] md:text-4xl font-bold text-gray-800">
          Real vaqtda monitoring platformasi
        </h1>
        <p className="text-gray-600 mt-4 text-[16px] font-sans font-normal">
          Barcha qurilmalaringizni bitta ekranda kuzating.
          Xatoliklarni oldindan aniqlang va biznesingizni samarali boshqaring.
        </p>
      </div>

      {/* 3D Laptop Section */}
      <div className="relative w-full flex items-center justify-center perspective">

        {/* Left */}
        <motion.img
          src={left}
          alt="Left screen"
          initial={{ rotateY: 30, scale: 0.9 }}
          whileHover={{ rotateY: 15, scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="absolute left-0 md:left-10 w-60 md:w-80 drop-shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Center */}
        <motion.img
          src={center}
          alt="Main dashboard"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="relative z-10 w-72 md:w-[500px] drop-shadow-2xl"
        />

        {/* Right */}
        <motion.img
          src={right}
          alt="Right screen"
          initial={{ rotateY: -30, scale: 0.9 }}
          whileHover={{ rotateY: -15, scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="absolute right-0 md:right-10 w-60 md:w-80 drop-shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-6xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:border-b-2 border-primary hover:primary-border"
          >
            <h3 className="font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero3D;
