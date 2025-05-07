import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

function ToolTip() {
    let [show, setShow] = useState(true)
    let toolTipVar = {
        hidden: { opacity: 0, y: -15},
        visible: { opacity: 1, y: 0}
    }
  return (
    <div className="relative inline-block">
        <button 
        className="py-4 bg-blue-700 my-1 px-1 rounded text-blue-100"
        onMouseEnter={() => setShow(true)}
         onMouseLeave={() => setShow(false)}
         >hover Over me</button>
<AnimatePresence>
    { show &&
        <motion.div
            variants={toolTipVar}
            initial="hidden"
            animate='visible'
            exit='hidden'
            transition={{
                duration: 0.1
            }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="absolute bg-gray-700 text-gray-100 mt-2 p-2 rounded w-full text-center"
        >
                Tool Tip Text
        </motion.div>
    }
    </AnimatePresence>
    </div>
  )
}

export default ToolTip