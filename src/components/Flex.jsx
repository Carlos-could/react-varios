export default function Flex() {
    return (
        <div className='flex p-2 bg-stone-200 space-x-2 '>
            <div className='flex-1  bg-red-300 rounded-lg p-2'>1</div>
            <div className=' w-64 flex-none bg-red-300 rounded-lg p-2'>2</div>
            <div className=' w-80 flex-none bg-red-300 rounded-lg p-2'>3</div>
        </div>
    )
}
