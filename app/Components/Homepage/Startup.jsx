'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Startup() {
  return (
    <section className="bg-[#EEDCF7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4">

        {/* FLOATING IMAGES */}
        <Image
          src="/Images/C1.png"
          alt="camera"
          width={260}
          height={260}
          className="absolute left-0 top-20 rotate-[-15deg] hidden md:block"
        />

        <Image
          src="/Images/C2.png"
          alt="laptop"
          width={140}
          height={140}
          className="absolute left-[45%] top-16 rotate-[10deg] hidden md:block"
        />

        <Image
          src="/Images/C3.png"
          alt="clap"
          width={120}
          height={120}
          className="absolute right-0 top-0 rotate-[20deg] hidden md:block"
        />

        {/* TITLE */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              font-extrabold 
              text-[#7A4BA0]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[100px]
              tracking-tight
            "
          >
            You can become
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-50">

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
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className={`
                rounded-[40px]
                p-8
                flex items-start
                text-left
                font-bold
                leading-tight
                min-h-[140px]

                text-2xl sm:text-3xl md:text-[34px]

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
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.96 }}
            className="
              sm:col-span-2 lg:col-span-1
              rounded-[40px]
              flex items-center justify-center
              font-bold
              text-2xl sm:text-3xl md:text-[34px]
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