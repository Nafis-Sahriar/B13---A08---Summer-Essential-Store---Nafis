"use client";
import { Button } from '@heroui/react';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';

  const handleAddToCart = () => {
    toast.info("Add To Cart Feature will be available soon.");
  }

const AddToCartButton = () => 
{
    return (
         <Button onClick={()=>handleAddToCart()} className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:scale-103  
            hover:from-yellow-500 
            hover:via-orange-600 
            hover:to-red-600 w-full p-7 md:w-auto font-bold text-xl">Add to Cart <FaCartShopping /></Button>
    );
};

export default AddToCartButton;