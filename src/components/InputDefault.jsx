import { Input } from "@material-tailwind/react";
 
export function InputDefault() {
  return (
      <div className="mb-3 pt-0 w-full">
        <input size="lg" type="text" placeholder="Enter your text" className="px-8 py-6 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
      </div>    
  );
}