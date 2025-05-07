import { motion } from 'framer-motion'

function PursingButton() {
  return (
    <div  className="flex justify-center items-center min-h-screen">    
    <motion.button className='px-4 py-2 text-blue outline-none bg-blue-500 rounded'
        animate={{
            scale: [1, 1.1,1],
            backgroundColor: ["blue", "blueviolet", "blue"]
        }}
        transition={{duration: 0.8,ease: "easeInOut",repeat: Infinity}}
    >
        Click Me
    </motion.button>
    </div>
  )
}

export default PursingButton