import { motion } from "framer-motion"
function BgChanger() {
  return (
    <motion.div className="w-screen h-screen"
        animate={{ backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FF0000'] }}
        transition={{ repeat: Infinity, duration: 4 }}
    ></motion.div>
  )
}

export default BgChanger