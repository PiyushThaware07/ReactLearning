import React, { useState } from 'react'

export default function UseStateHook() {
    let initialValue = 10;
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <h1 className='mb-5 text-3xl font-semibold'>1. useState() Hook</h1>
            <h1>Count : {count}</h1>
            <button type='button' onClick={() => setCount(count - 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Decrement --</button>
            &nbsp;
            <button type='button' onClick={() => setCount(count + 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Increment ++</button>
            <br />
            <h1>Props are immutable while the states are the mutable you can also able to pass state as a prop to the child component from parent component.</h1>
            <Temp1 counter={count} setCounter={setCount} />
            <Temp2 counter={count} setCounter={setCount} />
        </div>
    )
}


function Temp1({ counter, setCounter }) {
    return (
        <>
            <h1>Child Component 1</h1>
            <h1>counter : {counter}</h1>
            <button type='button' className='bg-red-500 px-2 py-1 text-white capitalize rounded-md text-sm'
                onClick={() => setCounter(100)}>click me</button>
        </>
    )
}

function Temp2(props) {
    return (
        <>
            <h1>Child Component 2</h1>
            <h1>counter : {props.counter}</h1>
            <button type='button' className='bg-red-500 px-2 py-1 text-white capitalize rounded-md text-sm'
                onClick={() => props.setCounter(props.counter + 100)}>click me</button>
        </>
    )
}


