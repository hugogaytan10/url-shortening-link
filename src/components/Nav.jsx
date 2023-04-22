import '../fontawesome';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='w-full p-5 flex justify-between'>
      <h3 className='font-extrabold text-3xl'>Shortly</h3>
      <div className='self-center text-3xl text-neutralGray hover:cursor-pointer' onClick={()=>{setOpen(!open)}}><FontAwesomeIcon icon='bars' /></div>

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
