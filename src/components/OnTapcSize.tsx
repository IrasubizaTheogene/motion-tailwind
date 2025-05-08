import { motion } from "framer-motion"
import {useState} from 'react'
function OnTapcSize() {
    let [scaleIndex, setScaleIndex] = useState(0)
    let scale = ["scale-[1.1]", "scale-[1.2]", "scale-[1.3]", "scale-[1.4]", "scale-[1.5]", "scale-[1.5]"]
    function tapedSize(){
        setScaleIndex(prev => (prev + 1) % scale.length)
    }
  return (
    <motion.div className={`bg-purple-700 h-20 w-20 transform ${scale[scaleIndex]}`} onTap={tapedSize}></motion.div>
  )
}

export default OnTapcSize