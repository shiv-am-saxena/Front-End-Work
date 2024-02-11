// import React, { useEffect, useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
function NoteBtn() {
    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });

    //   useEffect(() => {
    //     const handleResize = () => {
    //       setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //       });
    //     };
    //     handleResize();
    //     // Add event listener to update window size on resize
    // window.addEventListener('resize', handleResize);

    // // Cleanup the event listener when the component unmounts
    // return () => {
    // window.removeEventListener('resize', handleResize);
    // };
    //   }, []);
    return (
        <div className="size-[5vw] fixed bottom-[5%] right-[2.5%] border-2 border-[#4BC071] hover:bg-[#4BC071] flex items-center justify-center p-3 rounded-full bg-zinc-900"><UilPen size="50" /></div>
    )
}

export default NoteBtn