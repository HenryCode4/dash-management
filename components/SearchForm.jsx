'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchForm = () => {

    const router = useRouter()

    const onClick = (e) => {
        e.preventDefault()
        router.push('/review');
    } 

  return (
    <form className='flex flex-col gap-y-4 items-start'>
                <div className='flex items-center gap-x-[10px] p-2 bg-[#F3F7FE] w-full md:w-[557px] rounded-[6px] border'>
                 <Search className='text-[#484851]' size={16} />
                 <input className='text-[0.9rem] outline-none w-full text-[#484851] bg-[#F3F7FE]' type='text' placeholder='Enter Address' />
             </div>

             <button onClick={onClick} className='bg-[#3366FF] rounded-[6px] text-white px-4 py-2 text-[1rem] font-medium'>
                 SEARCH
             </button> 
            </form>
  )
}

export default SearchForm