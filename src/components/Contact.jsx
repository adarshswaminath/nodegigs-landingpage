import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>Want any tips ?</h1>
                <p>Build your Web3 team today</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Contact us</button>
                </div>
                <p>We are care about protecting your data. Read our <span className='text-[#00df9a]'>privacy policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Contact