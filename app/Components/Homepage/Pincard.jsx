'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: 'Content Creation',
    desc: 'Get hands-on, connect with mentors, and work on real projects that make noise. Whether you re into content creation, branding, digital marketing, or design — this is your space to explore, experiment, and elevate your craft.',
    image: '/Images/SS1.jpg',
    bg: 'bg-[#46A6A1]',
  },
  {
    title: 'Art Direction',
    desc: 'Get hands-on, connect with mentors, and work on real projects that make noise. Whether youre into content creation, branding, digital marketing, or design — this is your space to explore, experiment, and elevate your craft.',
    image: '/Images/SS2.jpg',
    bg: 'bg-[#E5B90B]',
  },
  {
    title: 'Digital Marketing',
    desc: 'Get hands-on, connect with mentors, and work on real projects that make noise. Whether youre into content creation, branding, digital marketing, or design — this is your space to explore, experiment, and elevate your craft.',
    image: '/Images/SS3.jpg',
    bg: 'bg-[#7B4D9E]',
  },
]

export default function PinStackSection() {
  return (
    <section className="bg-[#E6D9EF] py-24 px-4 md:px-10">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#7B4D9E]">
          AMME Includes :
        </h2>
      </div>

      {/* STACK CONTAINER */}
      <div className="max-w-7xl mx-auto relative">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false }}
            className={`
              sticky top-[100px]
              rounded-[40px]
              p-6 md:p-12
              shadow-2xl
              ${card.bg}
            `}
            style={{
              zIndex: 10 + i,
              marginTop: i === 0 ? '0px' : '-120px', 
              transform: `scale(${1 - i * 0.04})`,  
            }}
          >

            {/* INNER */}
            <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 ? 'md:flex-row' : ''}`}>

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
                <h3 className="text-3xl md:text-6xl max-w-md font-soraBold leading-tight">
                  {card.title}
                </h3>

                <p className="mt-4 text-xs md:text-sm font-soraRegular opacity-90 max-w-md">
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