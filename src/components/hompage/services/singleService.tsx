import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import typpeOfProps from "@/interfaces/services";
import { faPlus} from '@fortawesome/free-solid-svg-icons'


export default function SingleService(props:typpeOfProps){
    return(
        <div className="border-box bg-white grid p-4 w-8/12 md:w-1/5  lg:w-2/12 relative  mx-auto my-4 sm:mx-2 md:mx-4 text-center 
        justify-center rounded hover:text-white hover:bg-orange-400 duration-500 hover:shadow-orange-300 shadow-lg">
        <div className="border-2 border-orange-400 hover:border-white rounded md:p-[1em] w-[95%] p-10">
        <FontAwesomeIcon icon={props.icon} color="sandybrown"  className="md:w-24 pb-5 w-8 mx-auto hover:text-white "/>
        <p className="text-sm text-gray">{props.solution}</p>
        </div>

        <div className="w-5 h-5 p-1 rounded-full bg-orange-400 absolute bottom-3 left-[45%]">
        <FontAwesomeIcon icon={faPlus} color="white"  className=" mx-auto w-3 hover:text-orange-400 "/>     
        </div>

        
        </div>
    )
}