const Section = (props) => (
    <section className={`lg:w-${props.w ? `${props.w}` : 'auto'} lg:h-${props.h ? `${props.h}` : 'auto'} w-auto h-auto flex flex-col p-4`}>
        {props.children}
    </section>
)

export default Section