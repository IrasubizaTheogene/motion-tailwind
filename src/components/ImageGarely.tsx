import { motion } from "framer-motion"
function ImageGarely() {
  return (
    <div className="w-[80%] flex max-w-sm">
            <motion.div className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
            >
            <img src="https://images.unsplash.com/photo-1746365588686-a3e1846a3476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
        <div className="absolute inset-0  text-white transition duration-300 opacity-0 hover:opacity-100">
            <p className="text-lg">this is unsplash</p>
        </div>
    </motion.div>
    </div>

  )
}

export default ImageGarely