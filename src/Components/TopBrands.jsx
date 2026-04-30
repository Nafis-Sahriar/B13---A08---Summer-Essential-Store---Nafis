import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfo } from "react-icons/fa";

const TopBrands = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#FF7A00]">Top Brands</h2>

          <p className="text-gray-600 mt-3">Trusted brands loved by millions worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">

                <div className="flex justify-center items-center  my-4">
                        <Image src={'https://i.ibb.co.com/dJXccTzD/54247569-376747903173793-5302848540999942144-n.jpg'} alt="Beauty of JOSEON" width={300} height={200} className="rounded-2xl" />
                    </div>

                <h1 className="text-xl font-bold  text-[#5A3E2B]">3W Clinic</h1>
                <p className="text-gray-600">3W Clinic is a well-known South Korean brand that offers a variety of products focusing on anti-aging, hydration, and UV protection. </p>
            
             <div className="mt-5">
                        <Link target="_blank" rel="noopener noreferrer" href="https://3wclinic.com/"><Button variant="outline" className="hover:bg-linear-to-r from-yellow-300 via-orange-500 to-orange-600 hover:text-white" >More Info <FaInfo></FaInfo></Button></Link>
                    </div>
            
            </div>
            <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">

                    <div className="flex justify-center items-center  my-4">
                        <Image src={'https://i.ibb.co.com/MD8z2Sg9/beautyofjson.webp'} alt="Beauty of JOSEON" width={300} height={200} className="rounded-2xl" />
                    </div>


                <h1 className="text-xl font-bold  text-[#5A3E2B]">Beauty of JOSEON</h1>
                <p className="text-gray-600">Beauty of Joseon: clean, effective Korean skincare using traditional Hanbang ingredients. Transform your skin naturally.</p>

                    <div className="mt-5">
                        <Link target="_blank" rel="noopener noreferrer" href="https://beautyofjoseon.com/"><Button variant="outline" className="hover:bg-linear-to-r from-yellow-300 via-orange-500 to-orange-600 hover:text-white" >More Info <FaInfo></FaInfo></Button></Link>
                    </div>

               
            
            </div>
            <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
                <div className="flex justify-center items-center  my-4">
                    <Image src={'https://i.ibb.co.com/XxBh0cRV/cosrx.jpg'} alt="CosRX" width={300} height={200} className="rounded-2xl" />
                </div>
                <h1 className="text-xl font-bold  text-[#5A3E2B]">CosRX</h1>
                <p className="text-gray-600 ">COSRX has studied peoples skin types and their needs Since 2013 with Skin-friendly ingredients that alleviate irritated skin</p>
                <div className="mt-5">
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.cosrx.com/"><Button variant="outline" className="hover:bg-linear-to-r from-yellow-300 via-orange-500 to-orange-600 hover:text-white" >More Info <FaInfo></FaInfo></Button></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
