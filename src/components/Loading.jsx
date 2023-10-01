import React from 'react'

const Loading = () => {
  return (
    <button type="button" className="bg-indigo-500 text-white flex p-3">
      <svg
      className="animate-spin h-10 w-10 mr-3 fill-none
      after:w-10/12 after:h-10/12 after:bg-slate-800 after:top-1/2 after:left-1/2
      -after:translate-y-1/2 -after:translate-x-1/2 after:content-none after:absolute before:content-none before:absolute
      before:w-full before:h-full before:bg-gradient-to-r from-violet-500 to-fuchsia-500" 
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" className='fill-white'/>
      </svg>
      Processing...
    </button>
  )
}

export default Loading