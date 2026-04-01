'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Creators() {
  return (
    <section className="bg-[#F5F2F7] py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-soraBold text-[#5B3B6E] "
          >
            <motion.span
              initial={{ backgroundPosition: '200% center' }}
              animate={{ backgroundPosition: '0% center' }}
              transition={{ duration: 2, ease: 'linear' }}
              className="text-[#5f3d71]"
            >
              Creators & <br className="hidden sm:block" />
              Marketers Are <br className="hidden sm:block" />
              Ruling The World
            </motion.span>        
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 md:mt-6 text-sm sm:text-base md:text-md font-soraRegular text-[#6E5A7E] leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Creators & Marketers School (CMS) is a new-age creative business school for the digital-first world. Whether you're planning to become a brand strategist, marketing leader, content creator, consultant, or launch your venture, this is where your creative career takes off.
            <br />
            At CMS, you'll gain the creative mindset and strategic skills needed to thrive in today's fast-changing marketing and business landscape.
          </motion.p>
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -3,
              boxShadow: "-4px 6px 0px #5f3d71"
            }}
            whileTap={{
              y: 2,
              scale: 0.96,
              boxShadow: "0px 0px 0px #5F3D71"
            }}
            animate={{
              boxShadow: [
                "0px 0px 0px #5F3D71",
                "-2px 3px 0px #5F3D71",
                "0px 0px 0px #5F3D71"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="mt-6 md:mt-8 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[#5F3D71] border border-[#5F3D71] font-sora font-semibold"
          >
            Get to know more
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="border-[14px] sm:border-[16px] md:border-[19px] border-[#5B3B6E] rounded-[40px] sm:rounded-[60px] md:rounded-[90px] overflow-hidden w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
          >
            <Image
              src="/Images/C5.jpg"
              alt="campus"
              width={500}
              height={400}
              className="object-cover w-full h-[260px] sm:h-[300px] md:h-[360px] rounded-[30px] sm:rounded-[70px] md:rounded-[70px] grayscale"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}