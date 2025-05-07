import { useMotionValue } from "framer-motion"

function DragableBox(){
    let x = useMotionValue(0)
    let y = useMotionValue(0)
    return (
        <div>Dragable Box</div>
    )
}
export default DragableBox