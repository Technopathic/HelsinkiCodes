import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'

const Blockquote = (props) => (
    <div className="p-8 text-slate-800 my-8 rounded-xl relative">
        <div className="absolute opacity-5 -top-8 -left-4">
            <FaQuoteLeft size={128} />
        </div>
        {props.name && <div className="text-pink-500 font-bold uppercase text-sm mb-1">{props.name}</div>}
        {props.children}
        <div className="absolute opacity-5 -bottom-8 -right-4">
            <FaQuoteRight size={128} />
        </div>
    </div>
)

export default Blockquote