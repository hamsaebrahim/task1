'use client';
import Image from "next/image";
import Link from "next/link";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";



export default function NavBar(){
    
    let [isOpen , setIsOpen] = useState(false)
    return(
        <nav className="flex justify-between pb-14">
         <Link href="/">
         <Image
         width={200}
         height={200}
         src="/assets/Button.png"
         alt="logo"
         className="absolute z-10 logo" />
         </Link>
         
         
         {/* for mobile navigation */}
         <div onClick={()=>setIsOpen(!isOpen)} className="absolute cursor-pointer w-7 h-7 right-8 top-7 sm:hidden">
            <Bars3BottomLeftIcon />
         </div>
         
          
             <ul className={`m-t-4  sm:flex md:text-lg  top-20 left-0
              duration-500 ease-in transition-all   ${isOpen ? 'absolute text-center w-screen bg-root-color p-10' : 'hidden'}`}>
            <li className="mx-4">Home</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Service</li>
            <li className="mx-4">Store</li>
            </ul> 
      
       </nav>
    )
 
}