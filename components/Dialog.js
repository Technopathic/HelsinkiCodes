import styled from '@emotion/styled'

const Container = styled.section`

`

const Dialog = (props) => (
    <section className={`${props.show ? 'opacity-100 visible' : 'opacity-0 invisible max-h-0'} fixed top-0 bottom-0 left-0 right-0 w-full h-screen overflow-hidden transition-all`}>
        <div className="w-full h-screen bg-opacity-25 bg-blackBrand absolute top-0 bottom-0 left-0 right-0 z-10" onClick={() => props.setDialog(false)}></div>
        <div className="relative bg-whiteBrand z-20 rounded p-8 w-1/4 m-auto mt-40">{props.children}</div>
    </section>
)

export default Dialog