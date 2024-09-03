import React from 'react'

const ServiceCart = ({icons,title,subtitle}) => {
  return (
    <div className='py-8 px-6 flex flex-col items-center gap2 borderRight borderBottom'>
      <span className="text-4xl text-designColor mb-2">
    {icons}
        </span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">
        {subtitle}
      </p>
    </div>
  )
}

export default ServiceCart
