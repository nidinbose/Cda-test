'use client'

import { IoPlayCircleOutline } from "react-icons/io5";

export default function PurpleButton() {
  return (
    <div className="flex gap-6 flex-col sm:flex-row">

      {/* APPLY BUTTON */}
      <button
        className="
          bg-[#F8E6FF]
          text-[#8A57A2]
          border border-[#8A57A2]
          rounded-full

          text-base
          sm:text-lg
          md:text-xl

          font-semibold
          px-8 py-3

          flex items-center justify-center

          transition-all duration-200 ease-out

          shadow-[0_0_0_0_#8A57A2]

          hover:-translate-y-[4px] hover:-translate-x-[2px]
          hover:shadow-[-2px_6px_0_0_#8A57A2]

          active:translate-y-[2px] active:translate-x-[1px]
          active:shadow-none
        "
      >
        Apply now
      </button>


      {/* WATCH BUTTON */}
      <button
        className="
          flex items-center gap-3
          bg-[#F8E6FF]
          text-[#8A57A2]
          border border-[#8A57A2]
          rounded-full

          text-base
          sm:text-lg
          md:text-xl

          font-semibold
          px-8 py-3

          transition-all duration-200 ease-out

          shadow-[0_0_0_0_#8A57A2]

          hover:-translate-y-[4px] hover:-translate-x-[2px]
          hover:shadow-[-2px_6px_0_0_#8A57A2]

          active:translate-y-[2px] active:translate-x-[1px]
          active:shadow-none
        "
      >
        {/* ICON */}
        <IoPlayCircleOutline
          className="
            w-6 h-6
            sm:w-7 sm:h-7
            md:w-8 md:h-8
          "
        />

        Watch our stories
      </button>

    </div>
  )
}