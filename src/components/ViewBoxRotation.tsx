import { motion } from "framer-motion"

function ViewBoxRotation() {
    let item = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]
    let itemVar = {
        hidden: { rotateX: 180, opacity: 0 },
        visible: { rotateX: 0, opacity: 1 }
    }
  return (
    <motion.div
    className="flex gap-2 m-200"
        initial="hidden"
        animate="visible"
        variants={{
            visible: {
                transition: {
                staggerChildren: 0.6
            }
            }
        }}
    >
        {item.map((item, index)=>
            <motion.div
            className="text-white bg-purple-700 px-8 py-4"
                initial={{ rotateX: 180, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                transition={{ type: "spring", staggerChildren: 1 }}
            key={index}>{item}</motion.div>
        )}
    </motion.div>
  )
}

export default ViewBoxRotation