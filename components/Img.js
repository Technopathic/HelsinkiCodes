import { useState } from 'react'

const Img = (props) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <img src={props.src} alt={props.alt} onClick={() => setShow(true)} className="cursor-pointer" />
            <section className={`${show ? 'opacity-100 visible' : 'opacity-0 invisible max-h-0'} flex fixed top-0 bottom-0 left-0 right-0 w-full h-screen overflow-hidden transition-all z-40`}>
                <div className="w-full h-screen bg-opacity-25 bg-blackBrand absolute top-0 bottom-0 left-0 right-0 z-40" onClick={() => setShow(false)}></div>
                <div className="relative z-40 rounded m-auto flex">
                    <img src={props.src} alt={props.alt} className="object-cover max-h-screen p-8" />
                </div>
            </section>
        </>
    )
}

export default Img