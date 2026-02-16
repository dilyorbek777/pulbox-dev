"use client"

import React, { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"

interface SlideData {
  title: string
  description: string
}

const slides: SlideData[] = [
  {
    title: "Savdo statistikasi",
    description: "Kunlik, haftalik va oylik tushumlarni real vaqtda kuzating."
  },
  {
    title: "To'lovlar nazorati",
    description: "Click, Payme va boshqa to'lovlarni real vaqtda ko'ring."
  },
  {
    title: "Qurilma holati",
    description: "Vending qurilmalari online/offline holatini kuzating."
  }
]

function Laptop({ position, active }: any) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += active ? 0.00 : 0.00
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2.5, 1.5, 0.2]} />
      <meshStandardMaterial color={active ? "#10b981" : "#d1d5db"} />
    </mesh>
  )
}

export default function MonitoringCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-green-100">
      
      {/* 3D SECTION */}
      <div className="w-full h-[500px]">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />

          {slides.map((_, index) => (
            <Laptop
              key={index}
              position={[
                (index - current) * 3,
                0,
                Math.abs(index - current) === 0 ? 0 : -2
              ]}
              active={index === current}
            />
          ))}

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* INFO SECTION */}
      <div className="mt-8 w-[400px] text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-2">
              {slides[current].title}
            </h2>
            <p className="text-gray-600">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
