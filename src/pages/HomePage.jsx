import React from 'react'
import { Pagination } from 'react-instantsearch-dom'
import BusinessContent from '../components/BusinessComponents/BusinessContent'

const HomePage = () => {
    return (
        <div className='flex pt-5 flex-col items-center justify-center w-screen'>
            <p className=' text-gray-400 p-5'>Here below the ranking with the largest companies in the world, by their market capitalization on May 17, 2022, in billions of dollars:</p>
            <div className='pb-5 pt-5'  >
                <Pagination className="scale-75 lg:scale-100"/>
            </div>
            <div className='text-blue-600'>
                <BusinessContent />
            </div>            
            <footer className='pb-5 pt-5 className="scale-75 lg:scale-100"'>
                <Pagination />
            </footer>
        </div>
    )
}

export default HomePage