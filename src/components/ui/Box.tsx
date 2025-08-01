
// import { player } from "../utils/types"
import { motion } from "motion/react"

export default function Box({ name, value, disabled, text, handleClick } : { name : string , value: number | null, disabled: boolean, text:"X" | "O" | null, handleClick: (event: React.MouseEvent<HTMLInputElement>) => void }) {

    return (
        <div className="relative">
                <input type="button" name={ name } disabled={ disabled } className={ `${ value === null ? `bg-stone-50/80 hover:bg-stone-50/50 transition-all` : value === 1 ? `bg-sky-300` : `bg-teal-300` } w-[8rem] h-[8rem] border-none rounded-sm  backdrop-blur-xs shadow-xl cursor-pointer` } onClick={ handleClick } />
                { text &&
                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit = {{ opacity: 0 }}
                    transition={ {
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="absolute inset-0 flex justify-center items-center text-5xl font-bold text-shadow-md">{ text }</p>
                 </motion.div>
                }
            
        </div>
    )
}