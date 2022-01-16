export const Primary = (props) => (
    <div className={`md:mr-4 flex flex-row items-center w-full h-full bg-hcRedBrand justify-center rounded-md transition-opacity text-white select-none py-2 ${props.shadow && 'shadow-hcGrayBrand'} ${props.disabled ? 'opacity-40' : 'hover:opacity-70 cursor-pointer'}`}>
        {props.children}
    </div>
)

export const Secondary = (props) => (
    <div className={`md:mr-4 flex flex-row items-center w-full h-full bg-hcGrayBrand justify-center rounded-md transition-opacity text-white select-none py-2 ${props.shadow && 'shadow-hcRedBrand'} ${props.disabled ? 'opacity-40' : 'hover:opacity-70 cursor-pointer'}`}>
        {props.children}
    </div>
)