import React, { useState, useEffect } from 'react'

export const CardUrl = (props) => {
    const [cards, setCards] = useState([]);
    const clickCopy = (idx,str) => {
            copyToClipboard(str);
            //actualizamos el campo estado del array
            let updateCards = cards.map((card) =>{
                if(card.index == idx){
                    if(card.estado === 'Copied!'){
                        return{
                            ...card,
                            estado: 'Copy'
                        }
                    }else{
                        return{
                            ...card,
                            estado: 'Copied!'
                        }
                    }
                    
                }
                return card;
            });
            setCards(updateCards);
        
    }
    //copiamos al pisa papeles
    const copyToClipboard = (str) => {
        if(navigator && navigator.clipboard && navigator.clipboard.writeText){
            return navigator.clipboard.writeText(str);
        }
        return Promise.reject('No se ha copiado');
    }
    useEffect(()=>{
        setCards(props.props);
    },[props.props])
    return (
        <div className='-mt-14 bg-secondaryGray'>
            {
                cards.map((card, idx) => {
                    return (
                        <div key={idx} className='w-11/12 p-2 mb-2  m-auto bg-white rounded-lg lg:flex lg:items-end'>
                            <p className='text-left p-2 lg:mr-auto'>{card.original}</p>
                            <span className='h-px w-full block bg-slate-400 m-auto lg:hidden'></span>
                            <p className='text-left p-2 text-primaryCyan lg:mr-8'>{card.acortada}</p>
                            <button onClick={() => { clickCopy(card.index, card.acortada) }} className={`w-11/12 block m-auto  rounded-md h-10 text-gray-100 font-extrabold ${(card.estado == 'Copy') ? 'bg-primaryCyan' : 'bg-darkBlue'} lg:w-1/12 lg:m-0 hover:brightness-105`}>{card.estado}</button>
                        </div>
                    )
                })
            }
        </div>

    )
}
