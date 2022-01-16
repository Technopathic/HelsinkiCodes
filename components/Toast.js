import { useState, useEffect } from 'react'

const Toast = (props) => {

    useEffect(() => {
        if (props.showToast.show) {
            const timer = setTimeout(() => {
                props.setShowToast({ show: false, content: '' })
            }, 2000)

            return () => clearTimeout(timer);
        }
    }, [props.showToast.show])

    return (
        <div className={`fixed right-5 bg-hcBlueBrand shadow-hcRedBrand w-96 px-4 py-6 rounded-xl z-50 text-white transition-all ${props.showToast.show ? 'top-5' : '-top-24'}`}>
            {props.showToast.content}
        </div>
    )


}

export default Toast