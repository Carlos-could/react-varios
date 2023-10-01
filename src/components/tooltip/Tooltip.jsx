import React, { useState } from 'react'

const Tooltip = ({ text, children }) => {
  const [isVisible, setIstVisible] = useState(false)
  return (
    <div
      className='relative inline-block '
      onMouseEnter={() => setIstVisible(true)}
      onMouseLeave={() => setIstVisible(false)}
    >
      {children}
      {isVisible && <div className='absolute bg-lime-600 p-2 text-xs text-white rounded-lg z-0 translate-x-12 min-w-max -top-1'>{text}</div>}
      
    </div>
  )
}

export default Tooltip