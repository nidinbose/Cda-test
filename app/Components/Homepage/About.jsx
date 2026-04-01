'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full bg-[#4B1F5C] py-16 sm:py-20 md:py-24 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
       <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}

            whileHover={{
              x: -4,
              y: -6,
              scale: 1.02,
              boxShadow: "-19px 10px 0px #8A57A2"
            }}

            whileTap={{
              x: 2,
              y: 3,
              scale: 0.96,
              boxShadow: "0px 0px 0px #8A57A2"
            }}

            transition={{ type: "spring", stiffness: 300 }}

            className="
              relative
              w-full max-w-md

              h-[260px]
              sm:h-[320px]
              md:h-[380px]
              lg:h-[420px]

              rounded-[80px]
              overflow-hidden
            "
          >
            <Image
              src="/Images/A1.png"
              alt="students"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="
              text-[#D7B6F5]
              font-extrabold
              leading-[1.05]

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              font-soraBold
            ">
              ADVANCED <br />
              MARKETING <br />
              MANAGER & <br />
              ENTREPRENEURSHIP <br />
              (AMME)
            </h2>
            <p className="
              mt-6
              text-[#E9D8FF]/80
              text-sm
              sm:text-md
              md:text-[15px]
              font-soraRegular
              max-w-lg mx-auto lg:mx-0
            ">
              Hands-on program that trains you to turn strong ideas into real execution using Creativity, Data, and AI. Designed for future-ready marketers, brand builders, and startup founders, AMME is all about learning by doing.
              
              A hands-on program that trains you from building big ideas to executing them effectively. Using real-world tools, backed by bold thinking, you’ll work with Creativity, Data, and AI to build marketing that delivers.
            </p>
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "-4px 6px 0px #D7B6F5"
              }}
              whileTap={{
                y: 2,
                scale: 0.96,
                boxShadow: "0px 0px 0px #D7B6F5"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                mt-8
                px-8 py-3
                rounded-full
                text-[#D7B6F5]
                border border-[#D7B6F5]
                font-semibold
              "
            >
              Get to know more
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  )
}