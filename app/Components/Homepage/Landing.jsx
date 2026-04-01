'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PurpleButton from './Buttons'

export default function Landing() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8E6FF] flex flex-col overflow-hidden">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 w-[300px] h-[400px] sm:w-[500px] sm:h-[700px] md:w-[700px] md:h-[900px] lg:w-[900px] lg:h-[1100px] pointer-events-none"
      >
        <Image
          src="/Images/L3.png"
          alt="bg"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="relative flex flex-1 flex-col items-center justify-center text-center px-4">

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-[#8A57A2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-tight font-soraBold"
        >
          CMS: THE FUTURE OF <br className="hidden sm:block" />
          CREATIVE EDUCATION.
        </motion.h1>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-6 items-center"
        >
          <PurpleButton />
        </motion.div>
      </div>
      <div className="w-full aspect-[16/5]" />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-0 left-0 w-full aspect-[16/5] z-20"
      >
        <Image
          src="/Images/L1.png"
          alt="house"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>

    </section>
  )
}