import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Primary } from './Button'

const ContentContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: 300ms ease-in-out all;
    position:fixed;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    z-index: ${props => props.show ? 3 : -1};
    opacity: ${props => props.show ? 1 : 0};
    backdrop-filter: blur(25px);
    padding: 0rem 1rem;
 `

const BackDrop = styled.div`
    width: 100vw;
    height:100%;
    position:fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`

const Info = (props) => {
    const router = useRouter()
    const [showContent, setShowContent] = useState(false)

    const toggleContent = (show) => {
        setShowContent(show)
        if (show) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    }

    const nextPage = (page) => {
        router.push(page.url)
    }

    return (
        <section className="w-full flex flex-col">
            <section className="flex flex-row w-full justify-between">
                {props.index === 0 ?
                    <div>
                        <Primary disabled={true}>
                            <FiChevronLeft size={24} color="#FFFFFF" />
                        </Primary>
                    </div>
                    :
                    <div onClick={() => nextPage(props.content[props.index - 1])}>
                        <Primary>
                            <FiChevronLeft size={24} color="#FFFFFF" />
                        </Primary>
                    </div>
                }
                <div onClick={() => toggleContent(!showContent)} className="uppercase mx-2 w-full">
                    <Primary>
                        Contents
                    </Primary>
                </div>
                {props.index + 1 === props.content.length ?
                    <div>
                        <Primary disabled={true}>
                            <FiChevronRight size={24} color="#FFFFFF" />
                        </Primary>
                    </div>
                    :
                    <div onClick={() => nextPage(props.content[props.index + 1])}>
                        <Primary>
                            <FiChevronRight size={24} color="#FFFFFF" />
                        </Primary>
                    </div>
                }
            </section>
            <ContentContainer show={showContent} className="no-scroll-bar bg-opacity-10 bg-whiteBrand">
                <BackDrop onClick={() => toggleContent(!showContent)} />
                <div className="relative w-full max-w-screen-lg z-10 flex flex-col mt-28">
                    {props.content.map((item, i) => (
                        <Link href={item.url} passHref>
                            <a index={i} onClick={() => toggleContent(false)} className="bg-whiteBrand rounded-xl w-full p-4 mb-6 no-underline select-none shadow-hcBlueBrand transition-all hover:bg-hcRedBrand">
                                <h2 className="p-0 m-0">{item.chapter}</h2>
                            </a>
                        </Link>
                    ))}
                </div>
            </ContentContainer>
        </section>
    )
}

export default Info