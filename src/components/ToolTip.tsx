import { motion } from "framer-motion"
import { useState } from "react"

function ToolTip() {
    let [show, setShow] = useState(true)
    let toolTipVar = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: -100 }
    }
  return (
    <div className="relative">
        <button onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>hover Over me</button>

    { show ? 
        <motion.div
            variants={toolTipVar}
            initial="visible"
            animate="visible"
            exit="hidden"
            className="absolute bg-gray-700 text-gray-100"
        >

        </motion.div>
    : ""}
    </div>
  )
}

export default ToolTip