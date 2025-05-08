import { useState } from "react";
import { motion } from "framer-motion";
function OnTap(){
    let color = ["bg-blue-700", "bg-purple-700", "bg-yellow-700", "bg-red-700"]
    let [colorIndex, setColorIndex] = useState(0)
    let changeTap = ()=>{
        setColorIndex(prev => (prev + 1) % color.length)
    }
    return(
        <motion.div 
        onTap={changeTap}
        className={`${color[colorIndex]} w-32 h-32 rounded-lg shadow-lg`}></motion.div>
    )
}
export default OnTap