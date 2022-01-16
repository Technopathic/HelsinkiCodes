import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Link from 'next/link'
import Dialog from './Dialog';
import { FiMoon, FiSun } from 'react-icons/fi'
import { FiInstagram, FiTwitter, FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
import { SiDiscord, SiYoutube } from "react-icons/si"
import { searchPosts } from '../actions'
import { MediumPreview } from './Preview'


import SocialButton from './SocialButton'
const HeaderWrapper = styled.header`
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -100px, 0px)" : "translate3d(0px, 0px, 0px)"};
    backdrop-filter: ${(props) => props.scrollPos === 0 ? 'blur(0px);' : 'blur(5px);'};
    background-color: ${(props) => props.scrollPos === 0 ? 'transparent' : props.theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(34, 34, 34, 0.4)'};

    @media(max-width: 425px) {
        transform: ${(props) => !props.showMobile ? "translate3d(-100px, 0px, 0px)" : "translate3d(0px, 0px, 0px)"};
        backdrop-filter: blur(5px);
        background-color: ${(props) => props.theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(34, 34, 34, 0.4)'};
    }
`

const SearchContainer = styled.section`
    backdrop-filter: blur(16px);
    background-color: ${(props) => props.theme === 'light' ? 'rgba(34, 34, 34, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    overflow: auto;
`

const Header = (props) => {
    const router = useRouter()

    const [showHeader, setHeader] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const [showDialog, setShowDialog] = useState(false)
    const [showHeaderMobile, setHeaderMobile] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [searchOverlay, setSearchOverlay] = useState(false);

    useEffect(() => {
        showSearchOverlay(false)
    }, [router.pathname])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    });

    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
            setHeader(true)
            setScrollPos(0)
        } else {
            setScrollPos(document.body.getBoundingClientRect().top)
            setHeader(document.body.getBoundingClientRect().top > scrollPos)
        }
    };

    const getSearchPosts = async (query) => {
        if (query.length > 0) {
            const posts = await searchPosts(query)
            if (posts.length > 0) {
                setSearchResults(posts)
            } else {
                setSearchResults([])
            }
        } else {
            setSearchResults([])
        }
    }

    const showSearchOverlay = (option) => {
        setSearchOverlay(option)
        setSearchResults([])

        if (option) {
            document.body.style.maxHeight = '100vh'
        } else {
            document.body.style.maxHeight = 'none'
        }
    }

    return (
        <>
            <section className="h-24 w-full flex md:hidden justify-between items-center px-4">
                <div onClick={() => setHeaderMobile(!showHeaderMobile)} className="text-gray-600 bg-whiteBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center">
                    <FiMenu size={38} />
                </div>
                <Link href="/" passHref>
                    <a className="rounded-lg shadow-lg w-16 h-16 hover:opacity-70 transition-all p-2 bg-hcBlueBrand">
                        <img src="/site-images/hcLogoWhite-128.png" alt="NowNano Logo" className="rounded-lg" />
                    </a>
                </Link>
                <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-whiteBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center">
                    <FiSearch size={38} />
                </div>
            </section>
            <HeaderWrapper
                show={showHeader}
                showMobile={showHeaderMobile}
                scrollPos={scrollPos}
                theme={props.theme}
                className="h-screen md:h-24 w-24 md:w-full flex flex-row justify-start md:justify-center items-start md:items-center fixed top-0 left-0 right-0 z-40 box-border pt-4 md:pt-0"
            >
                <section className="w-full h-full max-w-screen-xl flex flex-col md:flex-row justify-between items-center mx-4">
                    <section className="md:flex items-center hidden">
                        <Link href="/" passHref>
                            <a className="rounded-lg shadow-lg w-16 h-16 hover:opacity-70 transition-all p-2 bg-hcBlueBrand mb-4 md:mb-0">
                                <img src="/site-images/hcLogoWhite-128.png" alt="NowNano Logo" className="rounded-lg" />
                            </a>
                        </Link>
                    </section>
                    <section className="flex items-center flex-col md:flex-row md:flex-grow-0 flex-grow">
                        <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-whiteBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2 cursor-pointer">
                            <FiSearch size={38} />
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.DISCORD}>
                            <div className="text-white bg-discord hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2">
                                <SiDiscord size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.TWITTER}>
                            <div className="text-white bg-twitter hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2">
                                <FiTwitter size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.TWITCH}>
                            <div className="text-white bg-twitch hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2">
                                <FaTwitch size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.INSTAGRAM}>
                            <div className="text-white bg-instagram hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2">
                                <FiInstagram size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.YOUTUBE}>
                            <div className="text-white bg-youtube hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-2">
                                <SiYoutube size={38} />
                            </div>
                        </a>

                        {/*
                        <div className="py-1 mx-2 text-gray-600 no-underline hover:opacity-70 dark:text-gray-200 cursor-pointer" onClick={() => setShowDialog(true)}>Sign In</div>
                        {props.theme === 'light' ?
                            <div className="py-1 mx-2 text-gray-600 hover:opacity-70 cursor-pointer dark:text-gray-200" onClick={() => props.handleTheme('dark')}><FiMoon size={26} /></div>
                            :
                            <div className="py-1 mx-2 text-gray-600 hover:opacity-70 cursor-pointer dark:text-gray-200" onClick={() => props.handleTheme('light')}><FiSun size={26} /></div>
                        }*/}
                    </section>
                    <div onClick={() => setHeaderMobile(!showHeaderMobile)} className="text-gray-600 bg-whiteBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center self-end md:hidden">
                        <FiX size={38} />
                    </div>
                </section>
            </HeaderWrapper>
            <Dialog show={showDialog} setDialog={setShowDialog}>
                <div className="flex flex-col w-full justify-center items-center">
                    <h2 className="m-0 mb-4">Sign in with...</h2>
                    <SocialButton provider="twitter" />
                    <SocialButton provider="google" />
                    <SocialButton provider="github" />
                    <SocialButton provider="discord" />
                    <SocialButton provider="twitch" />
                    <SocialButton provider="spotify" />
                    <div className="cursor-pointer w-full py-4 rounded flex justify-center items-center hover:bg-grayBrand transition-all select-none" onClick={() => setShowDialog(false)}>Close</div>
                </div>
            </Dialog>
            {searchOverlay &&
                <SearchContainer>
                    <div className="h-24 w-full flex justify-end items-center p-8">
                        <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-whiteBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center cursor-pointer">
                            <FiX size={38} />
                        </div>
                    </div>
                    <div className="w-full max-w-screen-md m-auto">
                        <h1>Search</h1>
                        <div className="flex items-center h-14 flex-grow">
                            <input onChange={(e) => getSearchPosts(e.target.value)} className="w-full h-full rounded-xl px-4 outline-none shadow-olg" type="text" placeholder="Search jobs by keyword..." />
                        </div>
                    </div>
                    <div className="w-full max-w-screen-md m-auto grid grid-rows-1 my-8 gap-y-8">
                        {searchResults.map((post, i) => (
                            <MediumPreview key={post.link} post={post} link={'/articles' + post.link} showPreviewImage={false} />
                        ))}
                    </div>
                </SearchContainer>
            }
        </>
    )
}

export default Header
