import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {
    useEffect(() => {
        console.log("useEffect 1");
    }, [])
    useEffect(() => {
        console.log("useEffect 2");
    }, [])

    useLayoutEffect(() => {
        console.log("useLayout Effect");
    }, [])

    useEffect(() => {
        console.log("useEffect 3");
    }, [])
    return (
        <div>
            <h1>useLayoutEffect Hook</h1>

        </div>
    )
}
