import React from 'react'

const Grid = () => {
  return (
    
    <div className='flex min-h-screen bg-slate-100'>
      <div className='flex-1 p-8 sm:p-16'>
      

        <div className='grid  gap-3'>

          <div className='bg-yellow-400 p-5 h-24 rounded-xl text-center items-center'> 1 </div>
          <div className='bg-white p-5 h-24 rounded-xl'>2 </div>
          <div className='bg-white p-5 h-24 rounded-xl'>3</div>
          <div className='bg-white p-5 h-24 rounded-xl'>4</div>
        </div>

      </div>
    </div>
    

  )
}

export default Grid