import Link from 'next/link'
import styled from '@emotion/styled'
import { FiArrowRight, FiCoffee } from "react-icons/fi"
import { SiDiscord } from "react-icons/si"

const FooterContainer = styled.section`
    width: 100%;
    max-width: 1024px;
    height:300px;   
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    display:flex;
    flex-direction:row;
    box-shadow: 0 30px 40px 5px rgba(0, 0, 0, 0.15);
    border-radius:8px;
    margin:3rem auto 4rem;
    overflow:hidden;

    h2 {
        line-height: 30px;
    }

    @media(max-width:425px) {
        flex-direction:column;
        height: auto;

        section {
            width: 100%;
            min-height:200px;
        }

        article {
            width: 100%;
            height: 200px;
        }
    }
`

const FooterInfo = (props) => {
    return (
        <FooterContainer>
            <article className="w-1/2 h-full">
                <Link href={props.next.url} passHref>
                    <a><img src={props.coverImage} className="w-full h-full object-cover" alt="cover image" /></a>
                </Link>
            </article>
            <section className="w-1/2 flex flex-col p-4 justify-between items-start">
                <div></div>
                <div className="flex flex-col justify-center items-start">
                    <h4 className="text-gray-400">Up Next</h4>
                    <Link href={props.next.url} passHref><a className="no-underline"><h2 className="m-0">{props.next.chapter}</h2></a></Link>
                    <Link href={props.next.url} passHref><a className="mt-2 bg-hcRedBrand text-white py-2 px-6 rounded-full hover:opacity-70 transition-opacity flex flex-row items-center text-lg no-underline">
                        Start <FiArrowRight size={22} className="ml-1" />
                    </a></Link>
                </div>
                <div className="flex flex-col items-start">
                    <a href={process.env.DISCORD} target="_blank" rel="noopener noreferrer" className="mt-4 no-underline bg-grayBrand text-purpleBrand py-2 px-6 rounded-full hover:opacity-70 transition-opacity flex flex-row items-center text-lg" style={{ color: "#333333" }}>Join our Discord<SiDiscord size={22} className="ml-2" /></a>
                </div>
            </section>
        </FooterContainer>
    )
}

export default FooterInfo