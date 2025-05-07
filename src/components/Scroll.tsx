import { useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'

function Scroll() {
    let {scrollY} = useScroll()

    useMotionValueEvent(scrollY, "change", (latest)=>{
        console.log(latest)
    })
  return (
    <div className='h-1000'>
        
    </div>
  )
}

export default Scroll