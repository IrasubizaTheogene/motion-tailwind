import { motion } from "framer-motion"
function AnimatedShape() {
    let boxVariant = {
        initial: { scale: 1, rotate: 0, skew: 0},
        hover: {
            scale: 1.2,
            rotate: 15,
            skew: "10deg",
            transition: { duration: 0.3}
        },
        click: {
            scale: 0.9,
            rotate: -15,
            transition: {duration: 0.3}
        }
    }
    return (
    <div className="flex items-center justify-center min-h-screen">
        <motion.div className="h-40 bg-blue-500 w-40 "
            variants={boxVariant}
            initial="initial"
            whileHover="hover"
            whileTap="click"
        ></motion.div>
    </div>
  )
}

export default AnimatedShape