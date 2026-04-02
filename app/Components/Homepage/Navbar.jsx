'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Courses', 'Works', 'Blog', 'Contact']

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        
        <Image
          src="/Images/Logo2.png"
          alt="logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 text-sm font-medium">
          {links.map((item) => (
            <li key={item} className="relative cursor-pointer group font-soraRegular">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[75%] bg-[#F8E6FF] shadow-xl p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                {links.map((item) => (
                  <li key={item} onClick={() => setOpen(false)}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}