import { ChevronDown, Star } from 'lucide-react';
import React, { useState } from 'react';
import star_gold from '@/images/star-gold.png'
import Image from 'next/image';

const ReviewForm = ({setReviewModal}) => {
  const [amenities, setAmenities] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handleAmenitiesChange = (e) => {
    setAmenities(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleAnonymousChange = (e) => {
    setAnonymous(e.target.checked);
  };

  const handleSubmit = (e) => {

    const data = {
      amenities,
      rating,
      review,
      anonymous
    }

    e.preventDefault();
    console.log(data);

    setReviewModal(false)
  };

  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80 z-50 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='bg-[#FAFDFC] p-4 rounded-md w-[375px] md:w-[695px] flex flex-col gap-y-4'>
        <h2 className='text-[18px] font-medium text-center'>Review Location</h2>
        <p className='text-[20px] font-medium'>Bonny and Clyde Street, Ajao Estate, Lagos</p>

        <div className='w-full bg-[#F3F7FE] py-2 px-4 flex justify-between items-center'>
          <input
            className='w-full outline-none bg-[#F3F7FE] text-[#1E1E1E] text-[16px]'
            type="text"
            placeholder='Select Amenities'
            value={amenities}
            onChange={handleAmenitiesChange}
          />
          <ChevronDown className='text-[#8F95B2] h-[10px] w-[10px]' />
        </div>

        <div>
          <p className='text-[14px] font-medium'>Rate location</p>

        <div className='flex gap-x-2 pt-2'>
          {[1, 2, 3, 4, 5].map((index) => (
            index <= rating ? (
              <Image
              src={star_gold}
                key={index}
                className={`object-cover cursor-pointer`}
                width={24}
                height={24}
                onClick={() => handleRatingChange(index)}
              />
            ) : (
              <Star
                key={index}
                className={`text-gray-500 cursor-pointer`}
                size={24}
                onClick={() => handleRatingChange(index)}
              />
            )
          ))}
        </div>
        </div>

        <div className='pt-4'>
          <p className='text-[14px] font-medium'>Write Review</p>
          <textarea
            className='bg-[#FBFAFC] outline-none w-full h-[100px] border border-[#D4DCF1] px-2 '
            value={review}
            onChange={handleReviewChange}
          />
        </div>

        <div className='flex gap-x-2'>
          <input type="checkbox" checked={anonymous} onChange={handleAnonymousChange} />
          <p className='text-[14px] text-[#484851]'>Post as Anonymous</p>
        </div>

        <div className='flex w-full justify-between gap-x-2'>
          <button type="submit" className='bg-[#E4E9FB] w-full py-2'>Submit</button>
          <button onClick={() => setReviewModal(false)} className='text-[#5378F6] w-full py-2 border'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
