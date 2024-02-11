import React, { useState } from 'react';
import { UilFile } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import { UilPen } from '@iconscout/react-unicons'
const Card = (props) => {
    // console.log(props);
    const data = props.cont;
    // console.log(data)
    const handleClick = (key) => {
        localStorage.removeItem(key);
        location.reload();
    }
    const [close, setClose] = useState(data.close);
    const [open, setOpen] = useState(data.tag.isOpen);
    const toggleVal = () => {
        setClose(!close);
        setOpen(!open);
    }
    return (
        <motion.div drag className="bg-zinc-700 relative h-96 w-72 rounded-3xl p-5 overflow-hidden">
            <div className="text-white top-0 h-auto px-2 pt-2"><UilFile /></div>
            <div className=" text-white w-full"><p className="p-2 font-sans text-md h-full w-full">{`${data.desc}`}</p></div>
            <div className='absolute bottom-0 w-full left-0'>
                <div className="bg-zinc-900/50 w-full text-md text-white h-auto flex justify-between items-center px-5 py-4">
                    <div className="text-white tracking-wide">{`${data.date}`}</div>
                    <div className="rounded-full text-sm p-1 cursor-pointer bg-zinc-700" onClick={() => toggleVal()}>{close ? <UilTimes /> : <UilTrashAlt size="20" />}</div>
                </div>
                {
                    open && (
                        <div className={`${data.tag.tagColor} text-white left-0 w-full flex justify-between text-center text-lg px-5 py-4`}> <p>{`${data.tag.tagTitle}`}</p>
                            <button className="rounded-full text-sm p-1 cursor-pointer" onClick={() => handleClick(`${data.key}`)}>
                                <UilTrashAlt />
                            </button>
                        </div>
                    )
                }
            </div>
        </motion.div >
    )
}

export default Card