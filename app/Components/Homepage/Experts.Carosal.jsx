'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const data = [
  {
    id: 1,
    name: 'Aditya Varghese',
    role: 'Brand Consultant | FMCG Specialist',
    desc: 'He explained how clear positioning and consistent messaging build brand value.',
    image: '/Images/Cs1.jpg',
  },
  {
    id: 2,
    name: 'Rahul Menon',
    role: 'Startup Mentor',
    desc: 'Focused on scaling startups with strong product thinking.',
    image: '/Images/Cs2.jpg',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    role: 'Marketing Strategist',
    desc: 'Shared insights on digital growth and performance marketing.',
    image: '/Images/Cs3.jpg',
  },
]

export default function ExpertsCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
  }

  const getItem = (offset) =>
    data[(index + offset + data.length) % data.length]

  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 px-4 text-center overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl xl:text-6xl font-soraBold mb-20"
      >
        Expert Guidance From <br /> Industry Professionals
      </motion.h2>
      <motion.div layout className="relative flex justify-center items-center">

        {/* LEFT CARD */}
        <motion.div
          layout
          onClick={prev}
          className="hidden md:block absolute left-[5%] lg:left-[10%] w-[220px] md:w-[300px] lg:w-[360px] xl:w-[520px] cursor-pointer"
          animate={{
            scale: 0.75,
            rotate: -12,
            opacity: 0.5,
          }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Card item={getItem(-1)} />
        </motion.div>

        <motion.div
          layout
          className="w-[280px] md:w-[320px] lg:w-[380px] xl:w-[460px] z-10"
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Card item={getItem(0)} isCenter />
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          layout
          onClick={next}
          className="hidden md:block absolute right-[5%] lg:right-[10%] w-[220px] md:w-[300px] lg:w-[360px] xl:w-[520px] cursor-pointer"
          animate={{
            scale: 0.75,
            rotate: 12,
            opacity: 0.5,
          }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Card item={getItem(1)} />
        </motion.div>

      </motion.div>
      <div className="flex justify-center mt-16">
        <div className="flex items-center bg-black/90 backdrop-blur-md rounded-full shadow-lg overflow-hidden">
          <button
            onClick={prev}
            className="px-6 py-3 text-white hover:bg-white/10 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="px-6 py-3 text-white hover:bg-white/10 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

    </section>
  )
}

function Card({ item, isCenter }) {
  return (
    <motion.div
      whileHover={{ scale: isCenter ? 1.03 : 0.9 }}
      className="rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] bg-[#8A57A2]"
    >
      {/* IMAGE */}
      <div className="p-4">
        <div className="relative w-full h-[180px] md:h-[220px] rounded-[16px] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      {isCenter && (
        <div className="px-5 pb-6 text-white">
          <h3 className="font-sora text-lg md:text-xl">
            {item.name}
          </h3>
          <p className="text-sm opacity-80 font-soraRegular">
            {item.role}
          </p>

          <p className="text-xs mt-3 opacity-80 leading-relaxed font-soraRegular">
            {item.desc}
          </p>
        </div>
      )}
    </motion.div>
  )
}  