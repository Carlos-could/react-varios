import React from 'react'
import Tooltip from './Tooltip'

const ETF = () => {
  return (
    <div className="">
      <Tooltip text={"Este testo es de ETF"}>
        <span className="font-semibold text-slate-400  border-slate-300 ">ETF</span>
      </Tooltip>
    </div>
  )
}

export default ETF