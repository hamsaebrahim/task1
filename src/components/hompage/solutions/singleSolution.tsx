import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import typpeOfProps from "@/interfaces/services";

export default function SingleSolution(props:typpeOfProps){
    return(
        <div className="bg-white grid p-2 md:p-10 w-1/4 mx-2 md:mx-4 text-center 
        justify-center rounded hover:text-white hover:bg-orange-400 duration-500 hover:shadow-orange-300 shadow-lg">
        <FontAwesomeIcon icon={props.icon} color="sandybrown"  className="md:w-24 pb-5 w-8 mx-auto hover:text-white "/>
        <p className="text-sm">{props.solution}</p>
        </div>
    )
}