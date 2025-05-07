import { motion, useMotionValue, useSpring } from "framer-motion"
function Range() {
    let scale = useSpring(1)
    
    let changeIt = (e) =>{
        scale.set(parseFloat(e.target.value))
    }
  return (
    <div className="flex-items-center">
        <motion.div className="box" style={{ scale }} ></motion.div>
        <input type="range" min={0.5} max={100} step={1.01} defaultValue={1} onChange={changeIt } />

    </div>
  )
}

export default Range