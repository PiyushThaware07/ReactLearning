import React, { useContext } from 'react';
import { MyContext } from '../App';

export default function TestingChild() {
    const data = useContext(MyContext);


    return (
        <div>
            Testing Child
            <br />
            Fname : {data.fname}
            <br />
            Lname : {data.lname}
            <br />
            RollNo : {data.rollNo}
        </div>
    )
}
