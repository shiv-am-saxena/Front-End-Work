import React, { useEffect, useState } from 'react'
import Close from './Close'
function Form() {
    let i;
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const fullDate = `${date}/${month + 1}/${year}`;
    const farFutureDate = new Date('2038-01-01T00:00:00Z');
    // document.cookie === null ? (document.cookie =  `i = 0; expires = ${farFutureDate.toUTCString()}; priority = high`): null;
    i = document.cookie.split("=")[1];
    i = parseInt(i);
    const [formData, setFormData] = useState({
        desc: '',
        date: fullDate,
        close: true,
        key: i + 1,
        tag: {
            tagTitle: "Delete Note",
            isOpen: true,
            tagColor: 'bg-[#4C9DF3]'
        }
    });
    const [selectedTagColor, setSelectedTagColor] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleRadiobutton = (color) => {
        setSelectedTagColor(color);
        setFormData({
            ...formData,
            tag: {
                ...formData.tag,
                tagColor: color,
            },
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the form data to local storage
        if (document.cookie != "") {
            i = document.cookie.split("=")[1];
            i = parseInt(i);
            i++;
        }
        else {
            i = 1;
        }
        localStorage.setItem(i, JSON.stringify(formData));
        document.cookie = `i = ${i}; expires = ${farFutureDate.toUTCString()}; priority = high`;
        console.log('Form submitted with data:', formData);
        location.reload();
    };


    return (
        <>
            <div className="border-2 flex items-center justify-center h-full w-full border-zinc-50 p-24 bg-zinc-100/30 relative rounded-3xl">
                <Close />

                <form onSubmit={handleSubmit} className='flex items-start text-xl justify-center flex-col gap-5'>
                    <label className='w-full'>
                        Note:
                        <br />
                        <textarea
                            className='my-2 outline-none resize-none font-sans p-2 text-black w-full rounded-md h-32'
                            type="text"
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            maxLength={220}
                            required="required"
                        >
                        </textarea>
                    </label>

                    {/* <br /> */}


                    <label>
                        Tag Color:
                        <div className="flex gap-10 my-2">
                            <div>
                                <label>
                                    Purple
                                    <input
                                        className='mx-2'
                                        type="radio"
                                        name="tagColor"
                                        value="bg-[#9E58DC]"
                                        checked={selectedTagColor === 'bg-[#9E58DC]'}
                                        onChange={() => handleRadiobutton('bg-[#9E58DC]')}

                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Green
                                    <input
                                        className='mx-2'
                                        type="radio"
                                        name="tagColor"
                                        value="bg-[#4BC071]"
                                        checked={selectedTagColor === 'bg-[#4BC071]'}
                                        onChange={() => handleRadiobutton('bg-[#4BC071]')}

                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Grey
                                    <input
                                        className='mx-2'
                                        type="radio"
                                        name="tagColor"
                                        value="bg-[#888888]"
                                        checked={selectedTagColor === 'bg-[#888888]'}
                                        onChange={() => handleRadiobutton('bg-[#888888]')}

                                    />
                                </label>
                            </div>
                        </div>
                    </label>
                    {/* <br /> */}

                    <button type="submit" className='border bg-zinc-800 border-black px-3 py-2 rounded-[50px]'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
