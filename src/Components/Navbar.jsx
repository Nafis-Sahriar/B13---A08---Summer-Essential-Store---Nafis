"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLinks/NavLink";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { ContextProvider } from "@/Contexts/ContextProvider";



const Navbar = () => {
  const userData = authClient.useSession();

  const {cartItems} = useContext(ContextProvider);

  // console.log(userData)

  const user = userData?.data?.user;

//   console.log(user);

  return (
    <div className="sticky top-0  z-50 w-[90%] mx-auto">
      <nav className="bg-white/10 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl px-4 py-5">
        
        <div className="flex items-center justify-between gap-4">
        
          <Link href={"/"}>
            <div className="flex items-center gap-2 animate__animated animate__fadeInLeft">
              <Image
                src={"/logo.png"}
                alt="logo"
                loading="eager"
                width={30}
                height={30}
                className="object-cover h-auto w-auto"
              />

              <h3 className="font-black text-lg bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Summer Essentials
              </h3>
            </div>
          </Link>

          
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium animate__animated animate__fadeInDown animate__delay-1s">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink href={"/products"}>All Products</NavLink>
            </li>

            <li>
              <NavLink href={"/my-profile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink href={"/about"}>About</NavLink>
            </li>
            <NavLink href={"/cart"}>

                    
                 <span className="flex relative items-center justify-center gap-2"> 
                    Cart<FaCartShopping />
                      <span className="">

                       {
                          cartItems.length===0 ? "" : <span className="absolute -top-4.5 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartItems.length}</span>
                       }
                    </span>
                </span>
                </NavLink>
          </ul>

          
          {!user ? (
            <div className="flex items-center gap-2 sm:gap-3 animate__animated animate__fadeInRight">
              <Link href="/signin">
                <Button
                  size="sm"
                  className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215]
              hover:from-yellow-500 hover:via-orange-600 hover:to-red-600"
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  size="sm"
                  className="hidden sm:flex bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215]
              hover:from-yellow-500 hover:via-orange-600 hover:to-red-600"
                >
                  Register
                </Button>
              </Link>
            </div>
          ) : (

           
              <div className="flex items-center gap-3 animate__animated animate__fadeInRight">
              <p className="hidden xl:block text-sm font-semibold text-orange-700">
                Hi, {user?.name}
              </p>

               <Link href="/my-profile">
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user.image}
                  referrerPolicy="no-referrer"
                />

                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar></Link>

              <Button
                size="sm"
                onClick={() => authClient.signOut()}
                className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:from-yellow-500 hover:via-orange-600 hover:to-red-600">
                <span className="hidden sm:block">Sign Out</span>
                <span className="sm:hidden">Sign Out</span>
              </Button>
            </div>

           
            
          )}
        </div>

       
        <ul className="flex lg:hidden items-center justify-center gap-6 mt-4 pt-3 border-t text-sm font-medium animate__animated animate__fadeInDown animate__delay-1s">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink href={"/products"}>Products</NavLink>
          </li>

          <li>
            <NavLink href={"/my-profile"}>Profile</NavLink>
          </li>
           <li>
              <NavLink href={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink href={"/cart"}>

                    
                 <span className="flex items-center justify-center gap-2"> Cart<FaCartShopping /></span>
                </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
