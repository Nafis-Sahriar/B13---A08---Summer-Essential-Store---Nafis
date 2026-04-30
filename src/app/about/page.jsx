import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-[90%] mx-auto px-6 py-24 bg-[url('/bground.png')] bg-cover bg-no-repeat bg-center">
      
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">About Us</h2>

        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto italic font-bold">
          We believe summer should feel effortless, stylish, and full of
          unforgettable moments. Our mission is to bring you essential products
          that make every sunny day more comfortable and exciting.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
    

       
        <div className="space-y-6">
          
                        <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md">
                            <h1 className="text-2xl font-bold text-[#5A3E2B]">About Summer Essentials</h1>
                            <p>Summer Essentials is a brand dedicated to providing high-quality, stylish products for the summer season. Our goal is to make every sunny day more enjoyable and comfortable.</p>
                        </div>
        </div>
        <div className="space-y-6 ">
          
                        <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md">
                            <h1 className="text-2xl font-bold text-[#5A3E2B]">Our Story</h1>
                            <p>This Webpage was created to showcase our summer collection and provide information about our brand.</p>
                            
                        </div>
        </div>
        <div className="space-y-6 md:col-span-2">
          
                        <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md">
                            <h1 className="text-2xl font-bold text-[#5A3E2B]">Created and Designed By</h1>
                            <p>Summer Essentials was designed and developed by Nafis - 2nd Year Software Engineering Student of Daffodil International Univeristy</p>
                        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;