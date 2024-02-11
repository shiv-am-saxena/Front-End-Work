// import React from 'react';
function Header() {
    return (
        <>
            <div className="z-[2] fixed h-screen bg-zinc-800 w-full">
                <p className="text-zinc-600 text-[2vw] text-center font-semibold py-9">Text Notes</p>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] leading-none tracking-tighter font-semibold">Docx.</h1>
            </div>
        </>
    )
}

export default Header