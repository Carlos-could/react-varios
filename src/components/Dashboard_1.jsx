import React from 'react'

export default function () {
	return (
		<div className='bg-stone-200 max-w-full mx-auto p-8 sm:p-16'>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
				<div className='text-5xl sm:col-span-full xl:col-span-3'>Promotio Analysis</div>
				<div className='grid grid-cols-2 gap-4 sm:col-span-full sm:grid-cols-3 lg:col-span-3'>

					<div className='h-20 bg-white rounded-2xl'></div>
					<div className='h-20 bg-white rounded-2xl'></div>
					<div className='h-20 bg-white rounded-2xl'></div>
				</div>
				<div className='h-64 bg-amber-100 rounded-2xl sm:col-span-2 lg:col-span-full xl:col-span-4'></div>
				<div className='h-64 bg-amber-100 rounded-2xl sm:col-span-2'></div>
				<div className='h-64 bg-amber-100 rounded-2xl sm:col-span-2'></div>
				<div className='h-64 bg-amber-100 rounded-2xl sm:col-span-2 lg:col-span-4'></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
