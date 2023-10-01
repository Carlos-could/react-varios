import React from 'react'
// import Tabs from './Tabs'

const Tabelle = ({ results, selected, toggle }) => {

  const fn2Decimal = (x) => x != null && x != "" ? (Number.parseFloat(x).toFixed(2)) : '-'

  return (
    <>

      <div className='grid grid-cols-12 border-b pt-1 pb-1 sticky top-0 bg-white'>
        <div className='col-span-12 sm:col-span-11 md:col-span-9'>Fonds­name</div>
        <div className='hidden sm:block sm:col-span-1 text-right'>Lfd. Jahr</div>
        <div className='hidden md:block md:col-span-1 text-right'>5 Jahre</div>
        <div className='hidden md:block md:col-span-1 text-right'>10 Jahre</div>
      </div>

      <div>         
        {
          results.map((result, i) => (

            <ul  key={result.Static.ISIN} className={
              //selected === i ? 'bg-firmaSSS border-firma border-t border-b-2'
              selected === i ? 'bg-zinc-50 border-firma border-t border-b-2'
                : 'bg-white border-b border-firma'
            }>

              {/* Universum */}
              <li className='grid grid-cols-12 cursor-pointer py-3 '
              onClick={() => toggle(i) } >

                <h2 className='col-span-12 sm:col-span-11 md:col-span-9  text-gray-900 text-left'>
                  <span>{selected === i ? '-' : '+'} </span> {result.Static.Name}
                </h2>
                <h2 className='hidden sm:block sm:col-span-1 md:col-span-1 text-gray-900 text-right'>
                  {
                    result.Kennzahlen.Perf_lfd_Jahr < 0
                      ? (<span className='text-red-600'>{fn2Decimal(result.Kennzahlen.Perf_lfd_Jahr)}</span>)
                      : (<span className='text-green-600'>{fn2Decimal(result.Kennzahlen.Perf_lfd_Jahr)}</span>)
                  }
                </h2>
                <h2 className='hidden md:block md:col-span-1 text-gray-900 text-right'>
                  {
                    result.Kennzahlen.Perf_pa_5_Jahre < 0
                      ? (<span className='text-red-600'>{fn2Decimal(result.Kennzahlen.Perf_pa_5_Jahre)}</span>)
                      : (<span className='text-green-600'>{fn2Decimal(result.Kennzahlen.Perf_pa_5_Jahre)}</span>)
                  }
                </h2>
                <h2 className='hidden md:block md:col-span-1  text-gray-900 text-right'>
                  {
                    result.Kennzahlen.Perf_pa_10_Jahre < 0
                      ? (<span className='text-red-600'>{fn2Decimal(result.Kennzahlen.Perf_pa_10_Jahre)}</span>)
                      : (<span className='text-green-600'>{fn2Decimal(result.Kennzahlen.Perf_pa_10_Jahre)}</span>)
                  }
                </h2>
              </li>

              {/* Acordion */}
              {/* <li
                className={
                  selected === i ? '  transition-all  duration-2000 overflow-hidden h-auto max-h-full  '
                    : 'max-h-0 overflow-hidden transition-all duration-500'
                }
              >

                {selected === i ? <Tabs result={result} fn2Decimal={fn2Decimal} /> : null}
              </li> */}

            </ul>
          )) //ende map
        }
      </div>

    </>
  )
}

export default Tabelle