import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import NoteBtn from './NoteBtn';
import Form from './Form';

function Foreground() {
    const ref = useRef(null);
    const [data, setData] = useState([]);
    const eventCreate = () =>{
        const btn = document.getElementById("btn");
        const form = document.getElementById("form");
        const close = document.getElementById('close');
        form.style.display = 'none';
        btn.addEventListener('click', () =>{
            form.style.display = 'block';
            btn.style.display = 'none';
        })
        close.addEventListener('click', ()=>{
            form.style.display = 'none';
            btn.style.display = 'block';
        })

    }
    useEffect(() => {
        const fetchData = () => {
            const localNote = Object.keys(localStorage).map((key) => {
                if (localStorage.getItem(key) !== null) {
                    return JSON.parse(localStorage.getItem(key));
                }
                return null;
            });

            setData(localNote.filter((item) => item !== null));
        };

        eventCreate();
        fetchData();
    }, []);

    return (
        <>
            <div ref={ref} className="absolute top-0 left-0 z-[3] h-full gap-10 flex flex-wrap p-10 w-full">
                {
                    data.map((item, index) => (
                        <Card key={index} cont={item} reference={ref} />
                    ))
                }
                <div  className='h-full -m-10 w-full -m-10 absolute ' id="form">
                    <Form />
                </div>

                <div id="btn">
                    <NoteBtn />
                </div>

            </div>
        </>
    );
}

export default Foreground;
