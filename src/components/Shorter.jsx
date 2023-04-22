import React, { createRef, useState, useEffect } from 'react'
import fondo from '../assets/bg-shorten-mobile.svg'
import fondoDesk from '../assets/bg-shorten-desktop.svg'
import { CardUrl } from './CardUrl';
export const Shorter = () => {
    //array para las cards de acotadores
    const [idx, setIdx] = useState(0);
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState('');
    const input = createRef();
    const validar = async () => {
        //validamos que tenga texto
        if (input.current.value == '') {
            setMessage("Please add a link");
            input.current.className += ' validar'
        } else {
            setMessage('');
            input.current.className = 'p-4 absolute bg-white h-11 w-11/12 rounded-md top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-7/12 lg:left-1/3 lg:top-1/2';
            //se debe hacer la peticion a la api
            Peticion(input.current.value);
            
        }
    }
    const Peticion = async(value)=>{
        let url = 'https://api.shrtco.de/v2/shorten?url=' + value;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        let newCard = {
            index: idx,
            original: value,
            acortada: data.result.full_short_link,
            estado: 'Copy'
        }
        setCards([...cards, newCard]);
        setIdx(idx + 1);
    }
    
    return (
        <div className='bg-secondaryGray mt-40 lg:block lg:w-full lg:order-10'>
            <div className='relative h-48  w-11/12 -top-24 -right-1/2  -translate-x-1/2  bg-primaryDarkViolet rounded-lg overflow-hidden'>
                <img src={window.screen.width > 375 ? fondoDesk : fondo} className="w-full absolute right-0 rounded-tr-lg lg:object-cover" alt='foto' />
                <input ref={input} placeholder='Shorten a link here...' className='p-4 absolute bg-white h-11 w-11/12 rounded-md top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-7/12 lg:left-1/3 lg:top-1/2' />
                <span className='error text-red-400 h-10 block absolute w-11/12 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-3/4' >{message}</span>
                <button onClick={() => { validar() }} className='absolute bg-primaryCyan text-gray-100 font-extrabold w-11/12 h-12 rounded-md  bottom-4 left-1/2 -translate-x-1/2 -translate-y-4 lg:w-2/12 lg:top-1/2 lg:right-0 lg:translate-x-full lg:-translate-y-1/2 lg:bottom-0'>Shorten It!</button>
            </div>
            {
                cards.length > 0 &&
                <CardUrl props={cards} />
            }
        </div>
    )
}
