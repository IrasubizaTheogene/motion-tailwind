import { motion } from "framer-motion";

function StagerGridLayout() {
  const items = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust delay as needed
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.div
          className="py-4 px-6 bg-white rounded shadow"
          variants={itemVariants}
          key={index}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StagerGridLayout;
