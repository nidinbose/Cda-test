'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaYoutube } from "react-icons/fa6";

export default function Vlog() {
  return (
    <section className="relative w-full h-[40vh] xl:h-[85vh] overflow-hidden">
      <Image
        src="/Images/hero.jpg" 
        alt="hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
        <div className=" w-8 h-6 rounded-sm flex items-center justify-center">
           <FaYoutube className='w-12 h-12 text-red-600'/>
        </div>
        <span className="text-white text-sm font-medium font-soraRegular">YouTube</span>
      </div>
      <div className="hidden md:block absolute top-1/2 left-1/2 w-[40%] h-[1px] -translate-x-1/2">
        
        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
          className="h-[1px] hidden"
        />

        {/* CROSS */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ delay: 0.5 }}
          className="absolute left-1/2 top-1/2 w-4 h-4 border border-blue-400 hidden -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="absolute bottom-10 left-6 md:left-16 z-10 flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-md"
        >
          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl lg:text-5xl font-soraBold tracking-wide text-[#E9D5FF]"
        >
          WATCH CMS STORIES
        </motion.h2>
      </div>

    </section>
  )
}