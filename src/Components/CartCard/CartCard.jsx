"use client"
import { ContextProvider } from "@/Contexts/ContextProvider";
import { TrashBin } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CartCard = ({ item }) => {
  console.log(item);


  const {cartItems, setCartItems} = useContext(ContextProvider);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCartItems);
    toast.error("Product removed from cart!");
  };



  return (
    <div className="w-[70%] mx-auto">
      <div className="flex justify-between items-center  rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
        <div className="flex gap-3.5">
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="object-cover rounded-2xl"
          />

          <div>
            <Link href={`/products/${item.id}`}>
              <h1 className="font-bold text-[#5A3E2B] hover:underline">{item.name}</h1>
            </Link>
            <p className="text-xl font-bold text-[#5A3E2B]">${item.price.toFixed(2)}</p>
          </div>

          
        </div>
        
        <div onClick={() => handleDelete(item.id)}>
              <TrashBin className="text-red-600"></TrashBin>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
