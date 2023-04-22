
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='w-full p-5 flex justify-between lg:justify-start'>
      <h3 className='font-extrabold text-3xl'>Shortly</h3>
      {
        window.screen.width < 500 &&
        <div className='self-center text-3xl text-neutralGray hover:cursor-pointer' onClick={() => { setOpen(!open) }}><FontAwesomeIcon icon={faBars} /></div>
      }

      {
        window.screen.width > 500 &&
        <div className='ml-10 self-center'>
          <ul className='flex gap-8'>
            <li className='text-textGray'>Features</li>
            <li className='text-textGray'>Pricing</li>
            <li className='text-textGray'>Resources</li>
          </ul>
        </div>
      }
      {
        window.screen.width > 500 &&
        <div className='ml-auto flex self-center gap-10'>
          <p className='text-textGray'>Login</p>
          <button className='w-24 rounded-full bg-primaryCyan p-1 text-gray-50 hover:brightness-105'>Sign Up</button>
        </div>
      }
      {
        open &&
        <div className='p-5 fixed z-10 top-16 bg-primaryDarkViolet w-11/12 rounded-lg'>
          <ul className='w-full p-2 '>
            <li className='text-center p-2 text-textGray hover:text-white'>Features</li>
            <li className='text-center p-2 text-textGray hover:text-white'>Pricing</li>
            <li className='text-center p-2 text-textGray hover:text-white'>Resources</li>
          </ul>
          <span className='block mb-4 mt-4 h-px w-11/12 m-auto bg-textGray'></span>
          <p className='mb-4 text-center p-2 text-textGray hover:text-white'>Login</p>
          <button onClick={() => { }} className='bg-primaryCyan text-gray-100 font-extrabold w-1/2 h-9 block mb-4 m-auto rounded-full '>Sign Up</button>
        </div>
      }

    </nav>
  )
}

export default Nav
