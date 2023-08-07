import React from 'react'
import { motion, Variants } from 'framer-motion';


type Props = {
    children: React.ReactNode;
    viewAmount?: number
}
const variants: Variants = {
    offscreen: {
        opacity: 0.2,
        y: -20
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1
        }
    }
}

function AnimatedViewBox({ children, viewAmount }: Props) {
    return (
        <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            viewport={{ amount: viewAmount ?? 0.22, once: true }}
            variants={variants}
        >
            {children}
        </motion.div>

    )
}

export default AnimatedViewBox