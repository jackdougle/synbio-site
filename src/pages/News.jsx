import { motion } from "framer-motion";

function News() {
  return (
    <>
      <div className="w-full h-[50px] overflow-hidden bg-gradient-to-r from-blue-400 via-red-400 to-purple-400 flex items-center">
        <motion.div
          className="inline-block whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 23, ease: "linear" }}
        >
          <p className="text-white font-mono font-bold text-2xl px-5">
            October 2025 NEOTERIC NEWS: We are now an official club at the University of Arizona!
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default News;