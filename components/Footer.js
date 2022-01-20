import Link from 'next/link'
import styled from '@emotion/styled'
import { SiDiscord } from "react-icons/si"
import { FaTwitch } from 'react-icons/fa'

const Container = styled.footer`
    background: linear-gradient(180deg,#242a33,#1a1f26);
`

const NavBlock = styled.a`
    display: flex;
    height: 170px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid rgba(64, 71, 82, 0.5);
    border-radius: 10px;
    overflow:hidden;
   
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
    transition: transform 150ms ease;
    text-decoration:none;
    color: #FAFAFA;

    section {
        width: 50%;
    }

    @media(max-width:425px) {
        height: 124px;
    }

    @media(max-width:768px) {
        height: 146px;
    }
`

const Grid = styled.section`
    border-bottom: 1px solid #282e38;
`

const FooterBlogItem = styled.a`
    font-size:11px;
    border-radius:3px;
    padding:6px;
    margin-bottom: 16px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    transition: background-color 150ms ease-out;
    color: #a7acb4;
    text-decoration: none;
    background-color: rgba(64,71,82,.6);
    width: 100%;
    display: block;

    &:hover {
        background-color: #404752;
    }
    
    img {
        height: 25px;
        width: 25px;
        position: absolute;
        border-radius: 50%;
        right: 0px;
        bottom: -5px;
    }
`

const Footer = () => {

    return (
        <Container className="w-full flex flex-col lg:py-24 py-12">
            <Grid className="w-full max-w-screen-xl m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-14 gap-8 lg:pb-24 xl:px-0 lg:px-8 pb-12 px-4">
                <NavBlock href={process.env.TWITCH} target="_blank" rel="noopener noreferrer" className="bg-hcDarkGrayBrand">
                    <section className="w-1/2 h-full">
                        <FaTwitch size={240} className="-ml-10 -mt-6 opacity-90" />
                    </section>
                    <section className="w-1 /2 px-5 flex flex-col items-center justify-center">
                        <div>
                            <div className="text-base mb-2">Videos</div>
                            <div className="text-sm text-gray-400">Check the latest →</div>
                        </div>
                    </section>
                </NavBlock>
                <NavBlock href={process.env.NOWNANO_URL} target="_blank" rel="noopener noreferrer" className="bg-hcDarkGrayBrand">
                    <section className="w-1/2 h-full rounded-full flex items-center">
                        <img className="h-32 w-32 rounded-full border-4 border-solid border-gray-100 shadow-xl" src="/me.jpg" />
                    </section>
                    <section className="w-1/2 px-5 flex flex-col items-center justify-center">
                        <div>
                            <div className="text-base mb-2 text-gray-200">About Us</div>
                            <div className="text-sm text-gray-400">Get to know us →</div>
                        </div>
                    </section>
                </NavBlock>
                <NavBlock href={process.env.DISCORD} target="_blank" rel="noopener noreferrer" className="bg-discord">
                    <section className="w-1/2 h-full">
                        <SiDiscord size={240} className="-ml-10 -mt-8 opacity-90" />
                    </section>
                    <section className="w-1/2 px-5 flex flex-col items-center justify-center">
                        <div>
                            <div className="text-base mb-2">Community</div>
                            <div className="text-sm text-gray-100">Join the Discord →</div>
                        </div>
                    </section>
                </NavBlock>
            </Grid>
            <section className="w-full max-w-screen-xl m-auto flex lg:flex-row flex-col flex-grow justify-between pt-12 p-8">
                <section className="flex flex-col">
                    <span className="text-gray-200">
                        <img src="/site-images/hcSVG.svg" className="h-20 w-20 mb-8" />
                    </span>
                    <div className="flex text-gray-400 items-center flex-wrap">Made with&nbsp;<span className="text-red-brand">❤</span>&nbsp;in Helsinki</div>
                    <span className="text-gray-500">#hlsnk</span>
                </section>
                <section className="grid md:grid-cols-3 gap-8 grid-cols-2 lg:mt-0 mt-8">
                    <div className="flex flex-col">
                        <div className="mb-2 text-gray-200">Socials</div>
                        <a href={process.env.TWITTER} target="_blank" rel="noopener noreferrer" className="no-underline text-sm mb-2 text-gray-400">Twitter</a>
                        <a href={process.env.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="no-underline text-sm mb-2 text-gray-400">Instagram</a>
                        <a href={process.env.TWITCH} target="_blank" rel="noopener noreferrer" className="no-underline text-sm mb-2 text-gray-400">Twitch</a>
                        <a href={process.env.YOUTUBE} target="_blank" rel="noopener noreferrer" className="no-underline text-sm mb-2 text-gray-400">Youtube</a>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2 text-gray-200">Company</div>
                        <a href={process.env.NOWNANO_URL} target="_blank" rel="noopener noreferrer" className="no-underline text-sm mb-2 text-gray-400">About</a>
                        <Link href="/tos" passHref><a className="no-underline text-sm mb-2 text-gray-400">Terms of Service</a></Link>
                        <Link href="/privacy" passHref><a className="no-underline text-sm mb-2 text-gray-400">Privacy Policy</a></Link>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2 text-gray-200">More</div>
                        <a href={`mailto:${process.env.SUPPORT_EMAIL}`} className="no-underline text-sm mb-2 text-gray-400">Contact</a>
                    </div>

                </section>
            </section>
        </Container>
    )
}

export default Footer
