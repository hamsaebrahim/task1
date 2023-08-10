import Image from "next/image";
import SingleSolution from "./singleSolution";
import { faUserMd , faHospital , faStethoscope , faBandage} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function SolutionsContainer(){
    return(
        <div className=" text-black md:p-16 py-10 px-0">
        <h1 className="text-5xl my-6 text-center">Easy steps to get <br/> your solution</h1>
        <div className="flex justify-between md:p-10">
       < SingleSolution icon={faUserMd} solution="Search doctor"/>
       < SingleSolution icon={faHospital} solution="Choose your location"/>
       < SingleSolution icon={faStethoscope} solution="Medical Check Up"/>
       < SingleSolution icon={faBandage} solution="Get your solution"/>
       </div>


       <div className="md:flex md:p-10 mt-24 justify-between md:mt-10 ">

        <div className="relative md:w-2/5 ">
         <div className="bg-root-color ms-5 md:w-96 w-72 h-64 rounded"></div>
         <div className="bg-root-color md:me-5 md:w-96 w-72 h-24 mt-8 me-0 rounded"></div>
        <Image
         width={300}
         height={300}
         src="/assets/doctor.png"
         alt="logo"
         className="absolute bottom-0 shadow-lg left-5 shadow-cyan-500/5" />
        </div>

        <div className="ms-10 md:ms-40 md:w-2/5 mt-5 ">
            <p className="text-4xl  ">We are always ensure best medical treatment for your health</p>
            <ul className="my-10">
                <li className="" >
                    <Image
                        width={20}
                        height={20}
                        src="/assets/bullet.png"
                        alt="logo"
                        className="inline-block me-4" />
                    I Top specialist doctor</li>

                <li>    <Image
                        width={20}
                        height={20}
                        src="/assets/bullet.png"
                        alt="logo"
                        className="inline-block me-4" />State of the art doctor services</li>

                <li>    <Image
                        width={20}
                        height={20}
                        src="/assets/bullet.png"
                        alt="logo"
                        className="inline-block me-4" />Easy online booking here</li>
            </ul>

           <Link href="/" className="px-8 py-2 my-4 border-none rounded bg-root-color2 text-white ">Register</Link>
        </div>

        <div className="lg:w-1/5"></div>

      </div>

        

      </div>
    )
}