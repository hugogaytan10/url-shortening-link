import React from 'react'
import boost from '../assets/bg-boost-mobile.svg';
import boostPc from '../assets/bg-boost-desktop.svg';
export const Boost = () => {
    return (
        <div className='bg-primaryDarkViolet relative'>
            <img className='w-full h-60 object-cover' alt='foto' src={window.screen.width > 375 ? boostPc : boost}/>
            <h3 className='absolute p-2 text-gray-50 block w-full text-center font-extrabold text-2xl top-1/4 left-1/2 -translate-x-1/2'>Boost your links today</h3>
            <button onClick={() => {  }} className='absolute  bg-primaryCyan text-gray-100 font-extrabold w-1/2 h-12 rounded-full  bottom-1/4 left-1/2 -translate-x-1/2 lg:w-1/12'>Get Started</button>
        </div>
    )
}
