import { useState } from 'react'
import classNames from 'classnames'


function Switch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='p-6 bg-gradient-to-tr from-green-500 to-cyan-500 flex items-start justify-center min-h-screen'>
      <div className='mt-12 max-w-md flex-1 bg-white overflow-hidden shadow-md rounded-lg px-4 py-5 sm:p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex-grow flex flex-col'>
            <h2 className='font-semibold text-gray-900'>Titulo</h2>
            <p className='text-sm text-gray-500'>Este texto es de prueba</p>
          </div>
          <div
            onClick={()=> setEnabled(!enabled)}
            className={classNames(
              enabled? "bg-cyan-500": "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(enabled? "translate-x-5" :"translate-x-0",
              "pointer-events-none inline-block h5 w-5 rounded-full bg-white shadow transform right-0 transition ease-in-out duration-200"
              )}
            />
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Switch
