import {motion} from "framer-motion"

function Loader() {
  return (
    <div className="relative h-30 w-30 rounded-full border-4 border-blue-600">
        <motion.div 
        animate={{ opacity: [1, 0.5, 1], rotate: 360 }}
        style={{ borderTopColor: "transparent" }}
        transition={{ repeat: Infinity, ease: "linear" , duration: 1}}
        className="absolute inset-0 rounded-full border-blue-300 border-solid border-6"></motion.div>
    </div>
  )
}

export default Loader