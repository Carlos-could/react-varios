import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Search = ({search, searcher}) => {
  return (
    <nav className='flex items-center border-b p-2.5'>

      <MagnifyingGlassIcon className='h-4 w-4 mr-2 text-slate-500' />
      <input
        value={search} onChange={searcher} type="text" name="search" id="search" placeholder='Search...'
        className=" w-full outline-none  "
      />

    </nav>
  )
}

export default Search