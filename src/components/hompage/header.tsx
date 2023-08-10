'use client'

import Image from "next/image"
import NavBar from "../layouts/navBar"
import "./style.css"
import SearchBar from "../layouts/searchBar"

export default function Header(){
    return(
    <>
        <header className="p-10 pb-8 md:p-16 bg-root-color md:pb-8 md:h-[80vh] h-[95vh] relative">
            
         <Image
         width={200}
         height={200}
         src="/assets/Ellipse 27.png"
         alt="medicine"
         className="absolute top-0 -z-2" />
         
         <Image
         width={200}
         height={200}
         src="/assets/Ellipse 25.png"
         alt="medicine"
         className="absolute top-0 w-32 md:w-60 left-40 -z-2" />

         {/*-------- navBar--------- */} 
        <NavBar/>
        

        {/*-------- heading---------- */}
        <div className="sm:flex">
        <div className="md:w-2/3">
        <h1 className="heading" >Trust you health to <br/> the best specialists</h1>
        <h6 className="font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id mi urna,</h6>
        <button className="px-8 py-2 my-4 border-none rounded bg-root-color2">Register</button>
        </div>

 
        <Image
         width={200}
         height={200}
         src="/assets/image.png"
         alt="logo"
         className="absolute bottom-0 shadow-lg right-[10vw] doctor shadow-cyan-500/5" />

        </div>
        <SearchBar/>
        </header>
        
</>
    )
}