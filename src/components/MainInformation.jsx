import React from 'react'
import banner from '../assets/illustration-working.svg'
import { Shorter } from './Shorter'
export const MainInformation = () => {
    return (
        <div className='overflow-hidden lg:w-full lg:flex lg:flex-wrap'>
            <div style={{ width: '530px' }} className='lg:order-4'>
                <img src={banner} alt='banner' className='w-full pl-3' />
            </div>
            <div className='w-11/12 mt-12 p-4 m-auto flex flex-wrap justify-center lg:order-2 lg:w-1/2 lg:justify-start'>
                <h3 className='text-4xl font-black text-center lg:text-6xl lg:text-left'>More than just shorter links</h3>
                <p className='text-textGray w-full text-center mt-2 mb-8 lg:text-left lg:text-2xl'>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className='w-1/2 bg-primaryCyan rounded-full p-4 text-white font-bold lg:w-1/3 hover:brightness-105'>Get Started</button>
            </div>
            <Shorter/>
        </div>
    )
}

