import {motion} from 'framer-motion'

function PursatingButton() {
  return (
    <div>
        <motion.button className="px-8 bg-red-400 py-4 text-red-100"
            animate={{ scale: [ 1, 1.5, 1 ] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                type: "tween"
            }}
        >Pursating</motion.button>
    </div>
  )
}

export default PursatingButton