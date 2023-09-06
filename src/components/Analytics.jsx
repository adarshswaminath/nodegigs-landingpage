import React from 'react'
import dapp from '../assets/dapp.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={dapp} alt="dapp" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your datas Decentrally</h1>
                <p>A digital database or ledger that is distributed among the nodes for a peer-to-peer network</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics