import { Input } from "@material-tailwind/react";
import { Component } from "react";
import Button from "./Button";
import TabGroup from "./TabGroup";


class Form extends Component {
    render() {
        return (
            <>
            <div className="w-full mt-10">
                <div>Enter your text</div>
                <div className="mb-3 pt-5">
                    <input size="lg" type="text" placeholder="My name is Elon and my SSN is 435435465" className="px-8 py-6 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
            </div>
            <div class="h-56 grid grid-cols-2 gap-4 content-center w-full">
                <div>
                    <div>Private AI</div>
                    <div className="mb-3 pt-5">
                        <TabGroup />
                    </div>
                </div>
                <div>
                    <div>Competitor</div>
                    <div flex space-x-4 className="mb-3 pt-5">
                        <TabGroup />
                    </div>
                </div>
            </div>          
            </>
          );
      }
}

export default Form 
