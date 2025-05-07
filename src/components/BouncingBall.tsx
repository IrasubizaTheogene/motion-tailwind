import { motion } from 'framer-motion'

function BouncingBall() {
  return (
    <div>
        <motion.div className="h-40 w-40 rounded-full shadow-2xl bg-white"
          animate={{ y: [ 0, 100, 0 ] }}
          transition={{ 
            duration: 4,
             type: "spring",
              repeatType: "loop",
               ease: "easeInOut",
                repeat: Infinity  }}
        ></motion.div>
    </div>
  )
}

export default BouncingBall