import { log } from 'console';
import { useState } from 'react';

type locationObject = {
  lat: number;
  lang: number;
};

export default function SearchBar(){
    
        const [nameValue, setNameValue] = useState('');
        const [location, setLocation] = useState<locationObject>({
            lat: 0,
            lang: 0,
        });

   
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setNameValue(event.target.value);
          };

        const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
            const { value } = event.target;
            setLocation((prevObject) => ({ ...prevObject, [key]: Number(value) }));
          };

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
           let data = {
            name : nameValue ,
            location : location
           }
           console.log(data);
          };
    
    
    return(
        <div className="flex p-5 bg-white rounded shadow-lg shadow-gray-500/50 w-[80vw] mx-auto absolute top-[90vh] md:top-[70vh] left-[10vw]">
            
         <form onSubmit={handleSubmit} className='flex justify-between w-full gap-5'>
                
            <label htmlFor="" className="flex items-center w-5/12 p-2 border-2 rounded border-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
             type="text" 
             className="w-full px-2 bg-transparent border-none focus:outline-none "
             onChange={handleInputChange}
            />
            </label>
            
            <label htmlFor="" className="flex items-center w-5/12 p-2 border-2 rounded border-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <input
             type="text" 
             className="w-full px-2 bg-transparent border-none focus:outline-none"
             onChange={handleInputChange}
            />
            </label>

            <button className='flex justify-center w-1/12 p-1 text-center border-none rounded md:p-4 bg-cyan-600'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg></button>

            
         </form>
            
           
        </div>
    )
}