"use client";
import CartCard from '@/Components/CartCard/CartCard';
import { ContextProvider } from '@/Contexts/ContextProvider';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';



const CartPage = () => {

        const {cartItems, setCartItems} = useContext(ContextProvider);

        console.log(cartItems)

        const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

        const handleCheckOut = () => {

            toast.success(`Checkout Successful Quantity: ${cartItems.length} Total Amount: $${totalPrice.toFixed(2)}`);
            setCartItems([]);
            
        }

    return (
       <div>
        {
            cartItems.length === 0 ? (
      
            <h1 className="text-2xl md:text-3xl font-bold text-center mt-10 min-h-[50vh] flex items-center justify-center text-[#5A3E2B] px-4">
                Your Cart is Empty
                <FaCartShopping className="ml-2" />
            </h1>

             ) : (

            <div className="space-y-5 mt-10 px-4 md:px-0">

                <h1 className="text-2xl md:text-3xl font-bold text-center text-[#5A3E2B]"> Your Cart Items </h1>

            
                <div className="flex flex-col gap-4">
                {
                    cartItems.map((item, index) => (<CartCard key={index} item={item} />))
                }
                </div>

               
                <div className=" w-full md:w-[70%] mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-5 bg-[#F6E6B4] rounded-2xl p-5 ">

                <p className="font-bold italic text-center md:text-left">
                    Total :
                    <span className="text-green-600 text-2xl ml-2"> {totalPrice.toFixed(2)} $ </span>
                </p>

                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <Button onClick={() => handleCheckOut()}  className="w-full md:w-auto bg-[#5A3E2B] text-white hover:bg-[#3B2A1A]"> Proceed To Checkout </Button>
                </div>

                </div>

            </div>
          )
         }
   </div>
    );
};

export default CartPage;