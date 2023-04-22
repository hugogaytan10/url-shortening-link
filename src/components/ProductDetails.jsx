import React from 'react'
import statistics from '../assets/icon-brand-recognition.svg'
import records from '../assets/icon-detailed-records.svg';
import fully from '../assets/icon-fully-customizable.svg';
export const ProductDetails = () => {
    return (
        <div className='w-full  p-5 bg-secondaryGray lg:flex lg:flex-wrap lg:justify-center'>
            <h3 className='mt-14 font-extrabold text-2xl text-center lg:text-3xl lg:block lg:w-full'>Advanced Statistics</h3>
            <p className='text-textGray p-4 text-sm text-center mt-2 lg:w-full lg:m-auto lg:text-2xl lg:block lg:mb-20 lg:ml-96 lg:mr-96'>Track how your links are performing across the web with our advanced statistics dashboard</p>

            <div className='w-11/12 h-64 bg-white mt-12 m-auto rounded-lg shadow-sm relative lg:w-1/4 lg:m-0'>
                <div className='bg-primaryDarkViolet rounded-full w-20 h-20 absolute -top-12 left-1/2 -translate-x-1/2 flex justify-center p-5 lg:left-20'><img className='bg-primaryDarkViolet' src={statistics} alt='foto' /></div>
                <div className='absolute top-16 w-full lg:top-12'>
                    <h4 className='font-extrabold text-2xl text-center lg:text-left lg:px-4'>Brand Recognition</h4>
                    <p className='text-textGray p-3 text-center lg:text-left lg:text-xl'>Boost your brand recognition with each click.
                        Generic links don't mean a thing. Branded
                        links help instil confidence in your content.
                    </p>
                </div>
            </div>

            <span className='w-2 h-20 bg-primaryCyan block m-auto lg:h-2 lg:w-10 lg:m-0 lg:self-center'></span>

            <div className='w-11/12 h-64 bg-white mt-4 m-auto rounded-lg shadow-sm relative lg:w-1/4 lg:m-0 lg:top-10'>
                <div className='bg-primaryDarkViolet rounded-full w-20 h-20 absolute -top-12 left-1/2 -translate-x-1/2 flex justify-center p-5 lg:left-20'><img className='bg-primaryDarkViolet' src={records} alt='foto' /></div>
                <div className='absolute top-16 w-full lg:top-12'>
                    <h4 className='font-extrabold text-2xl text-center lg:text-left lg:px-4'>Detailed Records</h4>
                    <p className='text-textGray p-3 text-center lg:text-left lg:text-xl'>
                        Gain insights into who is clicking your links. Knowing when and
                        where people engage with your content helps inform better decisions.
                    </p>
                </div>
            </div>


            <span className='w-2 h-20 bg-primaryCyan block m-auto lg:h-2 lg:w-10 lg:m-0 lg:self-center'></span>

            <div className='w-11/12 h-64 bg-white mt-4 m-auto rounded-lg shadow-sm relative lg:w-1/4 lg:m-0 lg:top-20'>
                <div className='bg-primaryDarkViolet rounded-full w-20 h-20 absolute -top-12 left-1/2 -translate-x-1/2 flex justify-center p-5 lg:left-20'><img className='bg-primaryDarkViolet' src={fully} alt='foto' /></div>
                <div className='absolute top-16 w-full lg:top-12'>
                    <h4 className='font-extrabold text-2xl text-center lg:text-left lg:px-4'>Fully Customizable</h4>
                    <p className='text-textGray p-3 text-center lg:text-left lg:text-xl'>
                        Improve brand awareness and content discoverability through
                        customizable links, supercharging audience engargement.
                    </p>
                </div>
            </div>
            <span className='lg:block lg:w-full lg:h-64'></span>
        </div>
    )
}
