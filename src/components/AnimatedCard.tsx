import {motion} from 'framer-motion'

function AnimatedCard() {
  return (
    <div className='flex justify-center items-start mt-[30rem]'>
        <div className='h-[200vh] w-full flex justify-center items-center'>
        <motion.div className='bg-white p-6 rounded-lg shadow-lg'
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{type: "spring", duration: 0.5 }}
            whileInView={{
                scale: 1.1,
                opacity: 1
            }}
        >
            <h2 className='text-2xl font-bold mb-2 '>Amazing Card</h2>
            <p className="text-gray-600">This Card animate beautifully into view</p>
        </motion.div>
        </div>
    </div>
  )
}

export default AnimatedCard