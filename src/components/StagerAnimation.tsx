import {motion } from "framer-motion"

function StagerAnimation() {
    let parentVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8
            }
        }
    }
    let childVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, y:0 }
    }
  return (
    <motion.div variants={parentVariant} animate="visible" initial="hidden">
       {[...Array(5)].map((_, index) =>
            <motion.div className="box mb-[1rem]" key={index} variants={childVariant}></motion.div>
       )}
    </motion.div>
  )
}

export default StagerAnimation