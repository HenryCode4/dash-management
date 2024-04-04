import { MessageSquare, ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import user from "@/images/user.png"
import star_gold from "@/images/star-gold.png"
import star from "@/images/star.png"
import SearchForm from '@/components/SearchForm'


const HomePage = () => {
    

    
  return (
    <div className='pt-[80px] px-[40px] lg:px-[100px] h-full w-full'>
        <div className='flex justify-center items-center h-full '>
            <div className='flex flex-1'>
                <div className='flex flex-col gap-y-6'>
                <h1 className='text-[2.5rem] md:text-[4rem] font-bold md:w-[504px]'>Find a place you
             will love to live!</h1>

             <p className='md:w-[507px] text-[1rem] md:text-[1.5rem]'>See through the lenses of people who have
            lived or visited the neighbourhood you might
            have in mind.</p>

            <SearchForm />
            
                </div>
            </div>

            <div className='hidden md:block h-full py-[60px] overflow-y-auto'>
                <div  className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-1 bg-[#F3F7FE] '>

             <div className=' w-[239px] p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>
             <div className=' w-[239px]  p-2 bg-[#FAFCFD] flex-col flex gap-y-4 rounded-[20px] '>
                <div className='flex justify-between items-center' >
                     <div className='flex gap-x-2 items-center'>
                         <Image className='w-8 h-8 object-cover' src={user} alt='user' />
                         <div>
                         <h3 className='text-medium text-[0.8rem]'>James T.</h3>
                         <p className='text-[0.5rem] font-light'>5 months ago</p>
                     </div>
                     </div>
                    

                     {/* left */}
                    <div>
                         <h3 className='text-[0.7rem] font-medium'>Ikate, Lekki</h3>
                         <div className='flex'>
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star_gold} alt="star-gold" />
                             <Image src={star} alt="star" />
                             <Image src={star} alt="star" />
                         </div>
                     </div>
                 </div>
                 <p className='text-[0.9rem] text-[#1E1E1E]'>There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.</p>
                 <div className='flex justify-between items-center'>
                    <div className='flex text-[#8F95B2] gap-x-4 items-center'>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsUp className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>24</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <ThumbsDown className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>02</p>
                     </div>
                     <div className='flex gap-x-1 items-center'>
                         <MessageSquare className='w-[12px] h-[12px]' />
                         <p className='text-[0.64rem]'>125</p>
                     </div>
                 </div>
                 <div className='bg-[#FCDCEF] rounded-full px-3 py-1'>
                     <p className='text-[0.6rem] text-[#821958]'>network</p>
                 </div> 
                 </div>
             </div>



                </div>
            </div>
        </div>
    </div>
    
  )
}

export default HomePage