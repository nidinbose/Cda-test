'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: 'Content Creation',
    desc: 'Get hands-on, connect with mentors, and work on real projects that make noise.',
    image: '/Images/Cs1.jpg',
    bg: 'bg-[#46A6A1]',
  },
  {
    title: 'Art Direction',
    desc: 'Explore branding, digital marketing, and design with real-world execution.',
    image: '/Images/Cs2.jpg',
    bg: 'bg-[#E5B90B]',
  },
  {
    title: 'Digital Marketing',
    desc: 'Learn performance marketing, growth strategies, and experimentation.',
    image: '/Images/Cs3.jpg',
    bg: 'bg-[#7B4D9E]',
  },
]

export default function PinStackSection() {
  return (
    <section className="bg-[#E6D9EF] py-20 px-4 md:px-10">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-soraBold text-[#7B4D9E]">
          AMME Includes :
        </h2>
      </div>

      {/* STACK */}
      <div className="max-w-7xl mx-auto space-y-32">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`sticky top-24 rounded-[40px] p-6 md:p-12 shadow-2xl ${card.bg}`}
            style={{
              zIndex: cards.length - i,
            }}
          >

            {/* INNER */}
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full md:w-[40%] h-[220px] md:h-[280px] rounded-[30px] overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* TEXT */}
              <div className="text-white md:w-[60%]">
                <h3 className="text-3xl md:text-5xl font-soraBold leading-tight">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm md:text-base opacity-90 max-w-md">
                  {card.desc}
                </p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}