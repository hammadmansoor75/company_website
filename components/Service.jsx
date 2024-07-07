import React from 'react'

const Service = ({
    serviceName,
    serviceDesc,
    serviceIcon
}) => {
  return (
    <div className='rounded-lg bg-lime-50 p-4 text-black w-1/4 h-96'>
        <span className='flex items-center justify-center green-text'>{serviceIcon}</span>
        <h2 className='text-center text-green-700 font-semibold text-xl mt-3'>{serviceName}</h2>
        <p className='text-sm text-left mt-3'>{serviceDesc}</p>
    </div>
  )
}

export default Service
