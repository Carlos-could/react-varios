import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Cripto = () => {

    //1. setear los hooks
    const [search, setSearch] = useState("")
    const [cryptos, setCryptos] = useState([])

    //2. funcion para traer los datos

    const endpoint = 'https://api.coinstats.app/public/v1/coins'
    //const endpoint = 'http://localhost/endpoint/'

    const showData = () => {
        axios.get(endpoint).then((res) => {
            console.log(res.data.coins)

            setCryptos(res.data.coins)
        })
    }

    

    useEffect(() => {
        showData()
    }, [])

    //3. funcion de busqueda

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //4. filtrar los datos

    const results = !search ? cryptos : cryptos.filter((val) => val["@attributes"].Name.toLowerCase().includes(search.toLocaleLowerCase()))

    //renderizar la vista
    return (
        <>
            <nav className="mt-7 flex justify-between px-10 py-5 items-center bg-white">
                
                    <div className="flex w-1/2 items-center">
                    
                        <input value={search} onChange={searcher} className=" w-full ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
                    </div>


            </nav>
            



            <div className="flex flex-col">
                {/* <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5"> */}
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className='min-w-full'>
                                <thead className='bg-white border-b'>
                                    <tr>
                                        <th className='text-sm font-medium text-gray-900 px-6 py-2 text-left'>Nombre</th>
                                        
                                        <th className='text-sm font-medium text-gray-900 px-6 py-2 text-right'>Price</th>
                                        <th className='text-sm font-medium text-gray-900 px-6 py-2 text-right'>1H</th>
                                        <th className='text-sm font-medium text-gray-900 px-6 py-2 text-right'>24H</th>
                                        <th className='text-sm font-medium text-gray-900 px-6 py-2 text-right'>1W</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        results.map((result, i) => (
                                            <tr key={i} className='bg-white border-b hover:bg-gray-100'>

                                                <td className='text-gray-900 px-6 py-5 '>{result.name}</td> 
                                                
                                                <td className='text-gray-900 px-6 py-5 text-right whitespace-nowrap'>{result.price.toFixed(2)}{" €"}</td>
                                                <td className='text-gray-900 px-6 py-5 text-right whitespace-nowrap'>{
                                                    result.priceChange1h < 0
                                                        ? (<span className='text-red-600'>{result.priceChange1h}{" %"}</span>)
                                                        : (<span className='text-green-600'>{result.priceChange1h}{" %"}</span>)
                                                }</td>
                                                <td className='text-gray-900 px-6 py-5 text-right whitespace-nowrap'>{
                                                    result.priceChange1d < 0
                                                        ? (<span className='text-red-600'>{result.priceChange1d}{" %"}</span>)
                                                        : (<span className='text-green-600'>{result.priceChange1d}{" %"}</span>)
                                                }</td>
                                                <td className='text-gray-900 px-6 py-5 text-right whitespace-nowrap'>{
                                                    result.priceChange1w < 0
                                                        ? (<span className='text-red-600'>{result.priceChange1w}{" %"}</span>)
                                                        : (<span className='text-green-600'>{result.priceChange1w}{" %"}</span>)
                                                }</td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >

            
        </>
    )
}

export default Cripto