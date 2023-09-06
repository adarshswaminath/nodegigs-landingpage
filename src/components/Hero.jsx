import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>Find your next WEB3 project</p>
            <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:p-6'>Join the WEB3 revolution</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>Create crew on the Blockchain and Web3</p>
                <Typed className='md:text-3xl sm:text-4xl text-xl font-bold pl-2' strings={['Revolution', 'Evolution', 'Innovation', 'Empowerment']} typeSpeed={140} backSpeed={160} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400'>Secure your payment and profile with Blockchain</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero