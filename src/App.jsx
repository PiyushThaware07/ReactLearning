import React from 'react';
// CSS
import "./App.css";
// COMPONENTS
import Navbar from './components/Navbar';
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from './components/UseEffectHook';

export default function App() {
  return (
    <div className='main px-8 md:px-14 py-2'>
      <Navbar />
      <Hero name="Piyush Thaware" />
      <UseStateHook />
      <UseEffectHook />
    </div>
  )
}


function Hero(props) {
  return (
    <>
      <div className="hero h-[250px] sm:h-[300px] md:h-[400px]">
        <div className="h-full w-full flex flex-col flex-nowrap justify-center items-start ps-5">
          <h1 className='text-lg sm:text-xl md:text-3xl font-medium'>hi, i'm <span className='text-blue-700'>{props.name}</span> ! 👋
            <br />
            product designer by day,
            <br />
            kdrama enthusiast by night!
          </h1>
          <button type='button' className='px-5 py-2 bg-blue-700 text-white rounded-md my-3 font-semibold' >Download CV</button>
        </div>
      </div>
    </>
  )
}

