import {motion} from "framer-motion"
function ZigzagMove() {
  return (
    <div className="space-x-8 flex">
        { [...Array(5)].map((_, index) => 
             <motion.div 
                    className=" h-40 w-40 bg-purple-700" 
                    key={index}
                    animate={{ y: [0,-25, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: index * 0.1 }}
             ></motion.div>
        ) }
    </div>
  )
}

export default ZigzagMove