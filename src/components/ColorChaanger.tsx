import { motion } from "framer-motion";

function ColorChanger() {
  return (
    <motion.div
      className="w-40 h-40"
      animate={{
        backgroundColor: ['#FF00', '#00FF00', '#0000FF', '#FF00']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        type: "spring" // Optional, but better for smooth color transitions
      }}
    />
  );
}

export default ColorChanger;
