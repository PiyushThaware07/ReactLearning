import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [num, setNum] = useState(1000);
    const [count, setCount] = useState(0);

    // 1. Run Again and again
    // useEffect(() => {
    //     console.log("useEffect is running...");
    // })

    // 2. Run only once 
    useEffect(() => {
        console.log("useEffect is running...");
    },[])

    // 3. Run on values passed as dependency 
    useEffect(() => {
        console.log("useEffect Running...");
    }, [count])



    return (
        <div className='mt-10'>
            <h1 className='mb-5 text-3xl font-semibold'>2. useEffect() Hook</h1>

            <h1>Count : {count}</h1>
            <button type='button' onClick={() => setCount(count - 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Decrement --</button>
            &nbsp;
            <button type='button' onClick={() => setCount(count + 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Increment ++</button>
            <br />


            <h1>Number : {num}</h1>
            <button type='button' className='bg-green-500 text-white px-2 py-1' onClick={() => setNum(num + 100)}>Click Me Change Number</button>
        </div>
    )
}
