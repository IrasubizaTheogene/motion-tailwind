import { motion } from "framer-motion"
function StaggerText() {
let name = "irasubiza"
let spanVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}
  return (
    <motion.h1
    className="text-2xl font-bold text-white"
    initial="hidden"
    animate="visible"
        variants={{
            visible: {
                transition: {
                    staggerChildren: 0.3
                }
            }
        }}
    >
        {name.split("").map((char,index) =>
            <motion.span
                variants={spanVar}
            >{ char }</motion.span>
        )}
    </motion.h1>
  )
}

export default StaggerText