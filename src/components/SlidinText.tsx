import { motion } from 'framer-motion'

function SlidinText() {
  return (
    <motion.h1
        className="text-3xl font-bold "
        initial={{ x: -100}}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
    >SlidinText</motion.h1>
  )
}

export default SlidinText