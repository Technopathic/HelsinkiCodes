import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'

const Blockquote = (props) => (
    <div className="bg-hcDarkGrayBrand shadow-hcRedBrand p-8 text-white my-8 rounded-xl relative">
        <div className="absolute opacity-5 -top-8 -left-4">
            <FaQuoteLeft size={128} />
        </div>
        {props.children}
        <div className="absolute opacity-5 -bottom-8 -right-4">
            <FaQuoteRight size={128} />
        </div>
    </div>
)

export default Blockquote