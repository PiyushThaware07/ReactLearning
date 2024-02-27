import React from 'react';
// ICONS
import { LuCodesandbox } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className='row py-5 flex flex-nowrap items-center justify-between'>
            <div className="col-1 ">
                <a href="" className='flex flex-nowrap items-center justify-center gap-1'>
                    <LuCodesandbox className='text-xl' />
                    <h1>Portfolio</h1>
                </a>
            </div>
            <div className="col-2 flex flex-nowrap items-center gap-1">
                <div className="col-1">
                    <a href="">
                        <h1 className='text-sm hover:text-blue-700'>about</h1>
                    </a>
                </div>
                <div className="col-2">
                    <h1 className='text-sm font-semibold'>/</h1>
                </div>
                <div className="col-3">
                    <a href="">
                        <h1 className='text-sm hover:text-blue-700'>projects</h1>
                    </a>
                </div>
            </div>
        </nav>
    )
}
