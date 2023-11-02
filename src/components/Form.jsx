import { Input } from "@material-tailwind/react";
import { Component } from "react";


class Form extends Component {
    render() {
        return (
            <>
            <div>Enter your text</div>
                <div className="w-full">
                    <div flex space-x-4 className="mb-3 pt-5">
                        <input size="lg" type="text" placeholder="Enter your text" className="px-8 py-6 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                    </div>
                </div>
            <div>Private AI</div>    
            <div className="w-1/3">
                <div flex space-x-4 className="mb-3 pt-5">
                    <input size="lg" type="text" placeholder="Enter your text" className="px-8 py-6 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
            </div>
            <div>Competitor</div>   
            <div className="w-1/3">
                <div flex space-x-4 className="mb-3 pt-5">
                    <input size="lg" type="text" placeholder="Enter your text" className="px-8 py-6 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
            </div>
            </>
            
          );
      }
}

export default Form 
