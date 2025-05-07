import { motion } from 'framer-motion'

function BouncingBUtton() {
  return (
    <div>
        <motion.div className='flex justify-center items-center min-h-screen space-x-2'>
          {[...Array(3)].map((_, index) => (
            <motion.div key={index}
            animate={{y: [0, -15, 0]}}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", repeatDelay: index * 0.2}}
            className='flex h-4 w-4 rounded-full bg-teal-400'></motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default BouncingBUtton