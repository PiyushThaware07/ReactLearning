import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [num, setNum] = useState(1000);
    const [count, setCount] = useState(0);

    // 1. Run Again and again
    // useEffect(() => {
    //     console.log("useEffect is running...");
    // })

    // 2. Run only once 
    // useEffect(() => {
    //     console.log("useEffect is running...");
    // }, [])

    // // 3. Run on values passed as dependency 
    // useEffect(() => {
    //     console.log("useEffect Running...");
    // }, [count])



    // Fetch API Using useEffect()
    const [list, setList] = useState([]);
    // console.log("List Before : ", list);

    async function fetchProducts() {
        const url = "https://fakestoreapi.com/products";
        const request = await fetch(url);
        console.log("Request : ", request);
        const response = await request.json();
        console.log("Response : ", response);
        setList(response);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("List After : ", list);



    return (
        <div className='mt-10'>
            <h1 className='mb-5 text-3xl font-semibold'>2. useEffect() Hook</h1>
            <h1>Example : 1</h1>
            <h1>Count : {count}</h1>
            <button type='button' onClick={() => setCount(count - 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Decrement --</button>
            &nbsp;
            <button type='button' onClick={() => setCount(count + 1)} className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Increment ++</button>
            <br />


            <h1>Number : {num}</h1>
            <button type='button' className='bg-green-500 text-white px-2 py-1' onClick={() => setNum(num + 100)}>Click Me Change Number</button>

            <h1 className='mt-10'>Example : 2</h1>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Rating</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length === 0
                            ?
                            <td>Empty Array</td>
                            :
                            <>
                                {
                                    list.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.rating.rate}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </>

                    }

                </tbody>
            </table>
        </div>
    )
}
