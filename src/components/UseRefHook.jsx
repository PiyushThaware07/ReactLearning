import React, { useState, useRef } from 'react'

export default function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
    // console.log("Input : ", inputValue);

    const refElement = useRef();
    console.log(">> ", refElement);

    function reset() {
        setInputValue("");
        refElement.current.focus();
        refElement.current.style.border = "10px solid red";

    }

    function changeName() {
        refElement.current.value = "Sahil"
    }

    return (
        <div>
            <h1>useRef Hook</h1>
            <div className="">
                <input ref={refElement} type="text" placeholder='Enter Email' className='bg-slate-100 p-5'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button type='button' className='p-5 bg-blue-500'
                    onClick={reset}>Reset</button>
                <button type='button' className='p-5 bg-green-500 ms-5'
                    onClick={changeName}>Change Name</button>
            </div>
        </div>
    )
}
