'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'

export default function SocialSection() {
  return (
    <section className="bg-[#F3EFF7] py-16 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="bg-[#6B4A7E] rounded-[32px] p-10 flex items-center justify-center"
          >
        <Image src={`/Images/Logo.png`} width={400} height={400} className='object-cover'/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-[#8A57A2] rounded-[32px] p-8"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-full bg-[#BFA9CF] text-white placeholder-white outline-none"
              />
              <input
                type="text"
                placeholder="Enter your phone number"
                className="px-4 py-3 rounded-full bg-[#BFA9CF] text-white placeholder-white outline-none"
              />
              <input
                type="text"
                placeholder="Enter your mail ID"
                className="px-4 py-3 rounded-full bg-[#BFA9CF] text-white placeholder-white outline-none"
              />
              <input
                type="text"
                placeholder="Course name"
                className="px-4 py-3 rounded-full bg-[#BFA9CF] text-white placeholder-white outline-none"
              />
              <button className="mt-2 bg-white text-[#6B4A7E] font-soraRegular py-3 rounded-full hover:scale-105 transition">
                Submit your query
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-[#D8D0DF] rounded-[32px] p-8 relative"
          >
            <div className="absolute top-6 left-6 bg-[#8A57A2] text-white px-4 py-1 rounded-full text-sm">
              Quick links
            </div>
            <div className="mt-16 text-[#6B4A7E] font-soraRegular space-y-3 font-medium">
              <p>Home</p>
              <p>About</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>Works</p>
            </div>
            <div className="absolute right-6 top-1/2 -rotate-90 text-xs text-gray-500">
              © 2025 CMS
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">

          {[FaFacebookF, FaInstagram, FaYoutube, MdEmail].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-[#E2DDEA] rounded-[20px] flex items-center justify-center py-10 cursor-pointer"
            >
              <Icon size={82} className="text-[#6B4A7E]" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}