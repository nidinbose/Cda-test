'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Startup() {
  return (
    <section className="bg-[#EEDCF7] py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ================= FLOATING IMAGES ================= */}

        {/* CAMERA (LEFT) */}
        <Image
          src="/Images/C1.png"
          alt="camera"
          width={260}
          height={260}
          className="absolute left-[-60px] top-[120px] rotate-[-12deg] z-10 hidden md:block"
        />

        {/* LAPTOP (CENTER TOP) */}
        <Image
          src="/Images/C2.png"
          alt="laptop"
          width={180}
          height={140}
          className="absolute left-1/2 -translate-x-1/2 top-[20px] rotate-[8deg] z-10 hidden md:block"
        />

        {/* CLAP (RIGHT TOP) */}
        <Image
          src="/Images/C3.png"
          alt="clap"
          width={120}
          height={120}
          className="absolute right-[-40px] top-[20px] rotate-[18deg] z-10 hidden md:block"
        />

        {/* ================= TITLE ================= */}
        <div className="text-center mb-20 relative z-20">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              font-soraBold
              text-[#7A4BA0]
              leading-[0.9]
              tracking-tight
              text-[48px]
              sm:text-[70px]
              md:text-[100px]
              lg:text-[130px]
              flex items-center justify-center gap-4
            "
          >
            You can become
          </motion.h2>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:py-25 xl:py-30">

          {[
            "Marketing Manager",
            "Startup Founder",
            "Creative Consultant",
            "E-Com Specialist",
            "E-Com Specialist",
            "Brand Strategist",
            "Performance Lead",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`
                rounded-[40px]
                p-8
                flex items-start
                font-soraBold
                leading-tight
                min-h-[140px]
                text-[40px]

                ${i === 0 && 'bg-[#5C3A6D] text-white'}
                ${i === 1 && 'bg-[#CFA6E6] text-[#4B1F5C]'}
                ${i === 2 && 'bg-gradient-to-r from-[#A86EDC] to-[#7A4BA0] text-white'}
                ${i === 3 && 'bg-gradient-to-r from-[#A86EDC] to-[#8E5EC9] text-white'}
                ${i === 4 && 'bg-[#BFA6D9] text-[#5C3A6D]'}
                ${i === 5 && 'bg-[#7A4BA0] text-[#F5E8C7]'}
                ${i === 6 && 'bg-[#D8B7E8] text-[#5C3A6D] sm:col-span-2'}
              `}
            >
              {item}
            </motion.div>
          ))}

          {/* APPLY NOW */}
          <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.97 }}
            className="
              sm:col-span-2 lg:col-span-1
              rounded-[40px]
              flex items-center justify-center
              font-soraBold
              text-[40px]
              min-h-[140px]
              text-white
              bg-gradient-to-r from-[#7A4BA0] to-[#A86EDC]
            "
          >
            Apply now
          </motion.div>

        </div>
      </div>
    </section>
  )
}