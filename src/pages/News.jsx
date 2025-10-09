import { motion } from "framer-motion";

function News() {
    return(
      <>
        <div className="marquee-content w-full h-[50px] whitespace-nowrap bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 items-center animate-marquee justify-center py-2 text-ellipsis truncate overflow-x-scroll">
          <p className="text-white inline-block font-mono font-bold text-2xl px-5">October 2025 NEOTERIC NEWS: We are now an official club at the University of Arizona!</p>
        </div>
      </>
    )
}

export default News;