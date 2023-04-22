import React from 'react'
import fb from '../assets/icon-facebook.svg';
import ig from '../assets/icon-instagram.svg';
import pt from '../assets/icon-pinterest.svg';
import tw from '../assets/icon-twitter.svg';
export const Footer = () => {
    return (
        <div className='bg-veryDarkViolet flex justify-center flex-wrap lg:justify-around  p-10'>
            <h3 className='font-extrabold text-3xl text-gray-50 lg:mt-10'>Shortly</h3>
            <ul className='w-full mt-10 lg:w-1/5'>
                <li className='mb-2 text-center p-2 text-textGray hover:text-white'>Features</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Link Shortening</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Branded Links</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Analytics</li>
            </ul>
            <ul className='w-full mt-10 lg:w-1/5'>
                <li className='mb-2 text-center p-2 text-textGray hover:text-white'>Resources</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Blog</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Developers</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Support</li>
            </ul>
            <ul className='w-full mt-10 lg:w-1/5'>
                <li className='mb-2 text-center p-2 text-textGray hover:text-white'>Company</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>About</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Our Team</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Careers</li>
                <li className='text-center p-2 text-textGray hover:text-primaryCyan hover:cursor-pointer'>Contact</li>
            </ul>
            <div className='mt-10 w-1/2 flex justify-around lg:w-1/5'>
                <img src={fb} alt='icon' className='h-6 hover:cursor-pointer'></img>
                <img src={tw} alt='icon' className='h-6 hover:cursor-pointer'></img>
                <img src={pt} alt='icon' className='h-6 hover:cursor-pointer'></img>
                <img src={ig} alt='icon' className='h-6 hover:cursor-pointer'></img>
            </div>
        </div>
    )
}
