'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const blogs = [
  {
    id: 1,
    image: '/Images/B1.png',
    title:
      'Great ideas are nothing without execution — that’s where we come in',
    date: 'April 17, 2025',
  },
  {
    id: 2,
    image: '/Images/B2.png',
    title:
      'Great ideas are nothing without execution — that’s where we come in',
    date: 'April 17, 2025',
  },
  {
    id: 3,
    image: '/Images/BB3.png',
    title:
      'Great ideas are nothing without execution — that’s where we come in',
    date: 'April 17, 2025',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#EDE7F6] py-16 md:py-24 px-6 md:px-16">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-soraBold text-[#8A57A2] mb-12 max-w-7xl mx-auto "
      >
        The CMS Blog
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-[28px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer"
          >

            <div className="relative w-full h-[360px]">
              <Image
                src={blog.image}
                alt="blog"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">

              <h3 className="text-[#A179B5] font-soraBold text-lg md:text-2xl leading-snug uppercase">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm mt-4 font-soraRegular">
                {blog.date}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}