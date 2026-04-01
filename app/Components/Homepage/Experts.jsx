'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const experts = [
  {
    name: "JINU BEN",
    role: "Seasoned Media Specialist\nContent Creator",
    desc: "Jinu Ben, a seasoned media professional, brings rich experience as an assistant director, radio jockey, sound engineer, and executive producer. Now a Strategic Partner Manager at Facebook, he mentors CMS students in creative strategy, storytelling, and social media marketing, offering real-world insights from his dynamic career.",
    img: "/Images/P1.png",
    bg: "bg-[#EDE2C3]",
    roleColor: "text-[#7A4BA0]",
    descColor: "text-[#7B5C8E]",
    logo: "/Images/Ps1.png",
    formerlyText: "SAMSUNG @BPL Paytm",
    hasLogo: true
  },
  {
    name: "BRAND SWAMY",
    role: "Brand Strategist\nStory Teller",
    desc: "With 15+ years in branding and communication, Brand Swamy is a seasoned strategist and founder of MONASTERY OF LOVE. He champions purpose-driven branding and authentic storytelling. At CMS, he mentors students in brand strategy, creative direction, and integrated marketing, sharing real-world insights to inspire innovative thinking.",
    img: "/Images/P2.jpg",
    bg: "bg-[#E9DFF0]",
    roleColor: "text-[#7A4BA0]",
    descColor: "text-[#7B5C8E]",
    logo: "/Images/Ps2.png",
    formerlyText: "",
    hasLogo: true
  },
  {
    name: "NIDASHA ASLAM",
    role: "Content Strategist\nEntrepreneur\nDigital Marketing Specialist",
    desc: "Nidasha Aslam, CTO of Quadcubes and co-founder of CDA Academy, is a content strategist and digital media expert. At CMS, she mentors students in content strategy, digital marketing, and storytelling, drawing from her rich industry experience.",
    img: "/Images/P3.png",
    bg: "bg-[#E6EEF0]",
    roleColor: "text-[#7A4BA0]",
    descColor: "text-[#7B5C8E]",
    logo: "/Images/Ps3.png",
    formerlyText: "",
    hasLogo: true
  },
  {
    name: "HUDAIF KV",
    role: "Brand Consultant\nEntrepreneur\nDigital Marketing Specialist",
    desc: "Hudaif KV, founder of CDA Academy and co-founder of Quadcubes, is a seasoned brand consultant and digital strategist. With 10+ years of experience, he mentors CMS students in SEO, social media, content strategy, and performance marketing through a hands-on, agency-based approach.",
    img: "/Images/P4.png",
    bg: "bg-[#EFEFEF]",
    roleColor: "text-[#7A4BA0]",
    descColor: "text-[#7B5C8E]",
    logo: "/Images/Ps5.png",
    formerlyText: "Formerly At",
    hasLogo: true
  }
]

export default function Experts() {
  return (
    <section className="bg-[#5F3D71] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-[#F8E6FF] font-soraBold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          Guided by <br /> Industry Experts
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {experts.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`
              ${exp.bg}
              rounded-[36px]
              p-6 md:p-8
              flex flex-col
              transition-all duration-300
              hover:shadow-xl
            `}
          >
            <div className="grid xl:grid-cols-2 items-center py-2">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[210px] h-[210px] md:w-[230px] md:h-[230px] rounded-[24px] overflow-hidden shadow-md">
                  <Image
                    src={exp.img}
                    alt={exp.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-3 w-full">
                  <p className="text-[10px] md:text-[11px] text-[#7B5C8E] font-medium text-center">
                  
                  </p>
                  {exp.hasLogo ? (
                    <div className="flex justify-center mt-1">
                      <Image
                        src={exp.logo}
                        alt="Company logo"
                        width={160}
                        height={110 }
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <p className="text-[10px] md:text-[11px] text-[#7B5C8E] text-center mt-1 font-medium">
                      {exp.formerlyText}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1">
                {/* NAME */}
                <h3 className="font-soraBold text-[20px] md:text-[24px] text-[#5B3B6E] leading-tight">
                  {exp.name}
                </h3>
                <p className={`mt-1.5 text-[13px] md:text-[14px] font-sora whitespace-pre-line ${exp.roleColor}`}>
                  {exp.role}
                </p>

                <p className={`mt-3 text-[12px] md:text-[13px] font-light font-soraRegular leading-relaxed ${exp.descColor}`}>
                  {exp.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}