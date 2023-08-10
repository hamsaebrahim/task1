import SingleService from "./singleService";
import { faBrain , faHospital , faStethoscope , faBandage} from '@fortawesome/free-solid-svg-icons'


export default function ServicesContainer(){
    return(

        <div className="text-black lg:p-16 py-10 md-px-24 mx-8">
       <div className="flex justify-between md:w-[60vw] md:px-20"> 
       <h1 className="text-2xl md:text-4xl text-dark">The best service <br/>for your family</h1>
       <p className="text-lightgrey ms-8">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Morbi id mi urna,</p>
       </div>

       <div className="sm:flex justify-between md:p-10">
       <SingleService icon={faBrain} solution="Neurology"/>
       <SingleService icon={faBrain} solution="Neurology"/>
       <SingleService icon={faBrain} solution="Neurology"/>
       <SingleService icon={faBrain} solution="Neurology"/>
       </div>
      </div>
    )
}