import { motion } from "framer-motion"
function FadesVariantBar() {
    let BarVar = {
        hidden: { opacity: 0, y: 100, scale: 0.6 },
        visible: { opacity: 1, y: 0, scale: 1 }
    }
  return (
    <div className="h-screen w-screen bg-purple-800">
        <div className="flex justify-center">
        <motion.div className="nav flex p-4 space-x-2 w-[90%] bg-purple-400 my-4"
            variants={BarVar}
            initial="hidden"
            animate="visible"   
        >
                <h1 className="flex-grow text-2xl text-purple-100">Animation</h1>
                <div className="space-x-2">
                    <button className="py-4 px-8 bg-purple-600 text-purple-100">Login</button> 
                    <button className="py-4 px-8 bg-purple-600 text-purple-100">Logout</button> 
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default FadesVariantBar