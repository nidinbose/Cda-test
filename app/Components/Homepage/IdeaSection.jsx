'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IdeaSection() {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-soraBold ">

            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="block text-[#E9D5FF]  mb-4"
            >
        <Image
  src="/Images/Q.png"
  alt="team"
  width={200}
  height={200}
  className="object-cover w-28"
/>
            </motion.span>
            <span className="bg-gradient-to-r from-[#E9D5FF] via-[#C084FC] to-[#7C3AED] text-transparent bg-clip-text">
              Great ideas are 
              nothing without 
              execution — that’s 
              where we come in
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-end"
        >

          <div className="relative">

            {/* GLOW */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute inset-0 rounded-[40px] blur-2xl 
                        "
            />
            <motion.div
              whileHover={{
                x: -4,
                y: -6,
                scale: 1.03,
                boxShadow: "-20px 12px 0px #8A57A2"
              }}
              whileTap={{
                x: 2,
                y: 3,
                scale: 0.97,
                boxShadow: "0px 0px 0px #8A57A2"
              }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="relative w-full max-w-md h-[320px] md:h-[380px] rounded-[40px] overflow-hidden"
            >
              <Image
  src="/Images/Cs1.jpg"
  alt="team"
  width={600}
  height={400}
  className="object-cover w-full h-full"
/>
            </motion.div>
          </div>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '120px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden absolute left-[-120px] top-1/2 h-[2px]
                       bg-gradient-to-r from-blue-400 via-blue-400/70 to-transparent"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 45 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="hidden  absolute left-[-10px] top-1/2 
                       w-4 h-4 border border-blue-400"
          />

        </motion.div>

      </div>
    </section>
  )
}