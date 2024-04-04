"use client";

import Image from "next/image";
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import user from "@/images/user.png";
import star_gold from "@/images/star-gold.png";
import location1 from "@/images/location-image.png";
import location2 from "@/images/location-image1.png";
import location3 from "@/images/location-image2.png";
import location4 from "@/images/location-image-3.png";
import Banner from "@/components/Banner";
import ReviewModal from "@/components/ReviewModal";

const ReviewsPage = () => {
  const [reviewModal, setReviewModal] = useState(false);

  const handleModal = () => {
    setReviewModal((prev) => !prev);
  };

  return (
    <>
      {/* desktop */}
      <Banner handleModal={handleModal} />
      <div className="hidden md:block h-full  pt-[20px] px-[40px] md:px-[100px]">
        <div className="flex w-full">
          <div className="flex flex-col  flex-1">
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between ">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 ml-4">
            <div className="w-[235px] h-[244px]  ">
              <Image
                src={location1}
                className="fill object-cover rounded-md"
                alt="location"
              />
            </div>
            <div className="w-[235px] h-[244px] ">
              <Image
                src={location3}
                className="fill object-cover rounded-md"
                alt="location"
              />
            </div>

            <div className="w-[235px] h-[244px] ">
              <Image
                src={location2}
                className="fill object-cover rounded-md"
                alt="location"
              />
            </div>
            <div className="w-[235px] h-[244px]">
              <Image
                src={location4}
                className="fill object-cover rounded-md"
                alt="location"
              />
            </div>
          </div>

          
        </div>
      </div>

      {/* mobile  */}

      <div className="block md:hidden h-full  pt-[20px] px-[40px] md:px-[100px]">
        <div className="flex flex-col">
          <div className="w-full overflow-x-auto">
            <div
              className="grid grid-cols-3 gap-3"
              style={{ overflowX: "auto" }}
            >
              <Image
                src={location1}
                className="fill object-cover rounded-md row-span-2"
                style={{ width: "175px", height: "228px" }}
                alt="location"
              />
              <Image
                src={location2}
                className="fill object-cover rounded-md "
                style={{ width: "160px", height: "110px" }}
                alt="location"
              />
              <Image
                src={location3}
                className="fill object-cover rounded-md "
                style={{ width: "160px", height: "110px" }}
                alt="location"
              />
              <Image
                src={location3}
                className="fill object-cover rounded-md "
                style={{ width: "160px", height: "110px" }}
                alt="location"
              />
              <Image
                src={location2}
                className="fill object-cover rounded-md "
                style={{ width: "160px", height: "110px" }}
                alt="location"
              />
            </div>
          </div>

          <div className="flex flex-col pt-6">
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between ">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 border-b pb-4">
              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-x-2 items-center">
                  <Image src={user} alt="user" />
                  <h3 className="text-[0.9rem]">James T.</h3>
                  <div className="text-[0.8rem] text-[#1E1E1E99]">
                    5 months ago
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <Image
                    className="object-cover h-[12px] w-[12px]"
                    src={star_gold}
                    alt="review"
                  />
                  <p className="text-[0.88rem]">4.0</p>
                </div>
              </div>

              <p className="text-[1rem] text-[#18181B] font-normal">
                There is no stable electricity. The roads are fairly good and
                there is a sense of community. The drainage system is poor and
                most residents litter their surroundings. There are several
                grocery stores and Supermarkets.
              </p>

              <div className="flex text-[#8F95B2] gap-x-4 items-center">
                <div className="flex gap-x-1 items-center">
                  <ThumbsUp className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">24</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <ThumbsDown className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">02</p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <MessageSquare className="w-[12px] h-[12px]" />
                  <p className="text-[0.64rem]">125</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {
      reviewModal && (
        <ReviewModal setReviewModal={setReviewModal} />
      )
    }
      
    </>
  );
};

export default ReviewsPage;
