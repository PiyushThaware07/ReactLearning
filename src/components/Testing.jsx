import React, { useContext } from 'react'

// import { MyContext } from '../App'
import TestingChild from './TestingChild';

export default function Testing() {
    // const mydata = useContext(MyContext);
    // console.log(mydata);


    return (
        <div>
            Testing Component


            <br /><br /><br />
            <TestingChild />
        </div>
    )
}
