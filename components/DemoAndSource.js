import { FiCode, FiLayout } from "react-icons/fi"
import { Primary, Secondary } from './Button'

const DemoAndSource = (props) => (
    <div className="w-full flex flex-col md:flex-row justify-around mt-8 mb-4">
        {props.demo ?
            <a target="_blank" rel="noopener noreferrer" href={props.demo} className="md:mr-4 w-full md:w-2/5 no-underline">
                <Primary>
                    <FiLayout size={24} color="#FFFFFF" className="mr-2" />View Demo
                </Primary>
            </a>
            :
            <div className="md:mr-4 flex flex-row items-center w-full md:w-1/2 text-xl bg-pinkBrand justify-center h-14 rounded-md cursor-pointer opacity-40 transition-opacity" style={{ color: "#FFFFFF" }}>
                <FiLayout size={24} color="#FFFFFF" className="mr-2" />View Demo
            </div>
        }
        {props.source ?
            <a target="_blank" rel="noopener noreferrer" href={props.source} className="md:mr-4 w-full md:w-2/5 no-underline">
                <Secondary>
                    <FiCode size={24} color="#FFFFFF" className="mr-2" />Source Code
                </Secondary>
            </a>
            :
            <div className="mt-4 md:ml-4 md:mt-0 flex flex-row items-center w-full md:w-1/2 text-xl bg-blueBrand justify-center h-14 rounded-md cursor-pointer opacity-40 transition-opacity" style={{ color: "#FFFFFF" }}><FiCode size={24} color="#FFFFFF" className="mr-2" />Source Code</div>
        }
    </div>
)

export default DemoAndSource