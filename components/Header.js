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


const HeaderWrapper = styled.header`
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -160px, 0px)" : "translate3d(0px, 0px, 0px)"};
    backdrop-filter: ${(props) => props.scrollPos === 0 ? 'blur(0px);' : 'blur(5px);'};
    background: #181818;

    @media(max-width: 767px) {
        transform: ${(props) => !props.showMobile ? "translate3d(-160px, 0px, 0px)" : "translate3d(0px, 0px, 0px)"};
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.4);
    }
`

const SearchContainer = styled.section`
    backdrop-filter: blur(16px);
    background-color: rgba(255, 255, 255, 0.4);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 50;
    overflow: auto;
`

const Header = () => {
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
            <section className="h-24 w-full flex md:hidden justify-between items-center px-4 bg-darkGrayBrand">
                <div onClick={() => setHeaderMobile(!showHeaderMobile)} className="text-gray-600 bg-white hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center">
                    <FiMenu size={38} />
                </div>
                <Link href="/" passHref>
                    <a className="w-20 h-20">
                        <img src="/site-images/Square-HC-Logo-White-128.png" alt="NowNano Logo" />
                    </a>
                </Link>
                <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-white hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center">
                    <FiSearch size={38} />
                </div>
            </section>
            <HeaderWrapper
                show={showHeader}
                showMobile={showHeaderMobile}
                scrollPos={scrollPos}
                className="h-screen md:h-24 w-24 md:w-full flex flex-row justify-start md:justify-center items-start md:items-center fixed top-0 left-0 right-0 z-40 box-border pt-4 md:pt-0"
            >
                <section className="w-full h-full md:grid grid-cols-1 md:grid-cols-3 mx-4">
                    <section className="flex flex-col md:flex-row">

                    </section>
                    <section className="md:flex items-center hidden justify-center">
                        <Link href="/" passHref>
                            <a className="w-20 h-20 hover:opacity-70 transition-all">
                                <img src="/site-images/Square-HC-Logo-White-128.png" alt="Helsinki Codes Logo" className="select-none" />
                            </a>
                        </Link>
                    </section>
                    <section className="flex items-center flex-col md:flex-row justify-end">
                        <div onClick={() => setHeaderMobile(!showHeaderMobile)} className="text-gray-100 bg-darkGrayBrand hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center mb-4 self-end md:hidden">
                            <FiX size={38} />
                        </div>
                        <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-white hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3 cursor-pointer">
                            <FiSearch size={38} />
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.DISCORD}>
                            <div className="text-white bg-discord hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3">
                                <SiDiscord size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.TWITTER}>
                            <div className="text-white bg-twitter hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3">
                                <FiTwitter size={38} />
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={process.env.TWITCH}>
                            <div className="text-white bg-twitch hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3">
                                <FaTwitch size={38} />
                            </div>
                        </a>
                        {process.env.INSTAGRAM && 
                            <a target="_blank" rel="noopener noreferrer" href={process.env.INSTAGRAM}>
                                <div className="text-white bg-instagram hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3">
                                    <FiInstagram size={38} />
                                </div>
                            </a>
                        }
                        <a target="_blank" rel="noopener noreferrer" href={process.env.YOUTUBE}>
                            <div className="text-white bg-youtube hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-lg flex justify-center items-center ml-0 mb-4 md:mb-0 md:ml-3">
                                <SiYoutube size={38} />
                            </div>
                        </a>
                    </section>
                </section>
            </HeaderWrapper>
            <Dialog show={showDialog} setDialog={setShowDialog}>
                <div className="flex flex-col w-full justify-center items-center">
                    <h2 className="m-0 mb-4">Sign in with...</h2>
                    <div className="cursor-pointer w-full py-4 rounded flex justify-center items-center hover:bg-grayBrand transition-all select-none" onClick={() => setShowDialog(false)}>Close</div>
                </div>
            </Dialog>
            {searchOverlay &&
                <SearchContainer>
                    <div className="h-24 w-full flex justify-end items-center p-4">
                        <div onClick={() => showSearchOverlay(!searchOverlay)} className="text-gray-600 bg-white hover:opacity-70 transition-all w-16 h-16 rounded-lg shadow-olg flex justify-center items-center cursor-pointer">
                            <FiX size={38} />
                        </div>
                    </div>
                    <div className="w-full max-w-screen-md m-auto p-4">
                        <h1>Search</h1>
                        <div className="flex items-center h-14 flex-grow mt-2">
                            <input onChange={(e) => getSearchPosts(e.target.value)} className="w-full h-full rounded-xl px-4 outline-none shadow-olg" type="text" placeholder="Search jobs by keyword..." />
                        </div>
                    </div>
                    <div className="w-full max-w-screen-md m-auto grid grid-rows-1 my-8 gap-y-8">
                        {searchResults.map((post, i) => (
                            <MediumPreview key={post.link} post={post} link={'/articles' + post.link} />
                        ))}
                    </div>
                </SearchContainer>
            }
        </>
    )
}

export default Header
