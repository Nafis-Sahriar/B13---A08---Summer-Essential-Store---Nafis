"use client";
import { useState } from "react";
import { ContextProvider } from "./ContextProvider";


const AddToCartContextProvider = ({children}) =>{


    const [cartItems, setCartItems] = useState([]);

    const value = {
        cartItems,
        setCartItems
    };

    return(<ContextProvider.Provider value={value}>
        {children}
    </ContextProvider.Provider>)


}

export default AddToCartContextProvider;