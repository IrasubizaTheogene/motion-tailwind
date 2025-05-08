import { motion } from "framer-motion"
import { useState } from "react"
function ToggleSwitch() {
    let [ison, setIson] = useState(true)
  return (
<motion.div className="flex bg-purple-700 py-2 w-24 px-2 rounded-full"
    animate={{ justifyContent: ison ? "flex-end": "flex-start" }}
    onClick={() => setIson(!ison)}
    transition={{ 
        duration: 7,
        type: "spring"
    }}
>
    <motion.div transition={{ type: "spring", duration: 7 }} className={` h-12 w-12 rounded-full bg-white`}></motion.div>
</motion.div>
  )
}

export default ToggleSwitch