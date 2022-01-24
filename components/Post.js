import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { getRelated } from "../actions"

import Subtitle from './Subtitle'
import FooterInfo from './FooterInfo'
import FooterEnd from './FooterEnd'
import EmojiVote from './EmojiVote'
import Info from './Info'
import ScrollToTop from './ScrollToTop'
import Related from './Related'
import { Primary, Secondary } from './Button'
import Toast from './Toast'
import Img from './Img'
import { TransparentPreview } from './Preview'


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTwitch } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiGithub, FiCode, FiLayout, FiList, FiLink } from 'react-icons/fi'
import { SiDiscord, SiFlipboard } from 'react-icons/si'
import { CgFormatSlash } from 'react-icons/cg'

const Container = styled.article`
  h1, h2, h3, h4 {
    margin: 2rem 0 1rem 0;
  }
`

const Post = ({ children, meta }) => {
  const router = useRouter()
  const [showToast, setShowToast] = useState({ show: false, content: '' })

  const readingTime = () => {
    let text = '';
    children.forEach((block, i) => {
      text = text + block.props.children
    })

    return Math.ceil(text.trim().split(/\s+/).length / 255);
  }

  const copyPostUrl = (url) => {
    navigator.clipboard.writeText(url)
    if (!showToast.show) {
      setShowToast({ show: true, content: 'Link copied!' })
    }
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} :: ${process.env.APP_TITLE}`}</title>
        <meta name="description" content={meta.description} />

        <meta name="og:title" property="og:title" content={`${meta.title} :: ${process.env.APP_SITE_NAME}`} />
        <meta name="og:description" property="og:description" content={meta.description} />

        <meta name="og:image" property="og:image" content={`${process.env.APP_URL}/${meta.coverImage}`} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={`${process.env.APP_URL}/${meta.coverImage}`} />

      </Head>
      <Toast showToast={showToast} setShowToast={setShowToast} />
      <section className="flex flex-col items-center m-auto mt-10 md:mt-28 max-w-screen-xl px-4 xl:px-0">
        <div className="flex flex-col w-full post md:px-0">
          <section className="flex flex-col">
            <section className="w-full flex flex-col">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="text-center flex flex-col border-4 border-solid border-blue-brand items-center justify-center px-4 py-1 rounded-xl">
                      <span className="text-gray-700 text-6xl text-font-gothic text-blue-brand">{meta.date.split(' ')[1].slice(0, -1)}</span>
                      <span className="text-gray-700 text-xl uppercase text-red-brand font-semibold">{meta.date.split(' ')[0]}</span>
                    </div>
                    <div className="h-1 bg-hcBlueBrand w-10/12 mx-auto mt-1 rounded-xl" />
                  </div>
                  <h1 className="m-0 ml-4 p-0 uppercase text-blue-brand text-4xl sm:text-6xl">{meta.title}</h1>
                </div>
                <div className="flex flex-col mt-4">
                  <section className="m-0 p-0 uppercase text-gray-500 text-base flex flex-col sm:flex-row">
                    <div className="flex">
                      <div className="flex sm:hidden">
                        <CgFormatSlash size={28} className="text-red-brand" style={{ marginTop: "-2px" }} />
                        <CgFormatSlash size={28} className="-ml-5 text-red-brand" style={{ marginTop: "-2px" }} />
                      </div>
                      <span className="text-gray-500">
                        Posted by&nbsp;
                      </span>
                      <span className="font-semibold text-blue-brand">
                        {meta.authors[0].name}
                      </span>
                    </div>
                    <div className="hidden sm:flex">
                      <CgFormatSlash size={28} className="text-red-brand" style={{ marginTop: "-2px" }} />
                      <CgFormatSlash size={28} className="-ml-5 text-red-brand" style={{ marginTop: "-2px" }} />
                    </div>
                    <div className="flex">
                      <div className="flex sm:hidden">
                        <CgFormatSlash size={28} className="text-red-brand" style={{ marginTop: "-2px" }} />
                        <CgFormatSlash size={28} className="-ml-5 text-red-brand" style={{ marginTop: "-2px" }} />
                      </div>
                      <span className="text-gray-500">
                        Read time&nbsp;
                      </span>
                      <span className="font-semibold text-blue-brand">
                        {readingTime()} min
                      </span>
                    </div>
                    <div className="hidden sm:flex">
                      <CgFormatSlash size={28} className="text-red-brand" style={{ marginTop: "-2px" }} />
                      <CgFormatSlash size={28} className="-ml-5 text-red-brand" style={{ marginTop: "-2px" }} />
                    </div>
                    <div className="flex">
                      <div className="flex sm:hidden">
                        <CgFormatSlash size={28} className="text-red-brand" style={{ marginTop: "-2px" }} />
                        <CgFormatSlash size={28} className="-ml-5 text-red-brand" style={{ marginTop: "-2px" }} />
                      </div>
                      <span className="text-gray-500">
                        On&nbsp;
                      </span>
                      <span className="font-semibold text-blue-brand">
                        {meta.category}
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </section>
          <div className={`grid grid-cols-1 lg:grid-cols-4 w-full max-w-screen-xl mx-auto my-4 lg:gap-x-8 ${meta.demo === "" && meta.source === "" && meta.summary === "" ? null :'gap-y-8'}`}>
            <div className="flex flex-col col-span-1 gap-8">
              {meta.demo === "" && meta.source === "" && meta.summary === "" ? null :
              <div className="bg-hcGrayBrand grid grid-cols-3 gap-6 py-4 px-6 rounded-xl">
                {meta.demo ?
                  <a target="_blank" rel="noopener noreferrer" href={meta.demo} className="no-underline h-16">
                    <Primary shadow={false}>
                      <FiLayout size={30} color="#FFFFFF" />
                    </Primary>
                  </a>
                  :
                  <div className="no-underline h-16">
                    <Primary shadow={false} disabled={true}>
                      <FiLayout size={30} color="#FFFFFF" />
                    </Primary>
                  </div>
                }
                {meta.source ?
                  <a target="_blank" rel="noopener noreferrer" href={meta.source} className="no-underline h-16">
                    <Primary shadow={false}>
                      <FiCode size={30} color="#FFFFFF" />
                    </Primary>
                  </a>
                  :
                  <div className="no-underline h-16">
                    <Primary shadow={false} disabled={true}>
                      <FiCode size={30} color="#FFFFFF" />
                    </Primary>
                  </div>
                }
                {meta.summary ?
                  <a target="_blank" rel="noopener noreferrer" href={meta.summary} className="no-underline h-16">
                    <Primary shadow={false}>
                      <FiList size={30} color="#FFFFFF" />
                    </Primary>
                  </a>
                  :
                  <div className="no-underline h-16">
                    <Primary shadow={false} disabled={true}>
                      <FiList size={30} color="#FFFFFF" />
                    </Primary>
                  </div>
                }
              </div>}
              <div className="bg-hcGrayBrand py-4 px-4 rounded-xl hidden lg:flex">
                {meta.tags ?
                  <div className="flex flex-wrap">
                    {meta.tags.map((tag, i) => (
                      <span key={i} className="bg-hcRedBrand text-white px-2 py-1 rounded-md m-1 text-sm cursor-pointer">#{tag}</span>
                    ))}
                  </div>
                  : <h4 className="m-0 p-0 px-2 text-white">No Tags</h4>
                }
              </div>
              {meta.info &&
                <div className="bg-hcGrayBrand py-4 px-6 rounded-xl">
                  <Info
                    content={meta.info.content}
                    index={meta.info.currentIndex}
                  />
                </div>
              }
              <div className="bg-hcGrayBrand py-4 px-4 rounded-xl grid-cols-5 gap-4 hidden lg:grid">
                <a className="bg-twitter px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://twitter.com/intent/tweet?url=${router.pathname}&text=${meta.title} @${process.env.APP_SITE_NAME}`}><FaTwitter /></a>
                <a className="bg-facebook px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.facebook.com/share.php?u=${router.pathname}&quote=${meta.title} @${process.env.APP_SITE_NAME}`}><FaFacebookF /></a>
                <a className="bg-linkedin px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.linkedin.com/sharing/share-offsite/?url=${router.pathname}`}><FaLinkedinIn /></a>
                <a className="bg-flipboard px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${meta.title}&url=${router.pathname}`}><SiFlipboard /></a>
                <a className="bg-whiteBrand px-2 py-3 text-blue-brand rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href="#" onClick={() => copyPostUrl(process.env.APP_URL + router.pathname)}><FiLink /></a>
              </div>
            </div>
            <Container className="flex flex-col col-span-2">
              {!meta.hideCover && <Img src={meta.coverImage} alt="cover image" className="mb-8" />}
              <div className="flex flex-col leading-8" id="post-content">{children}</div>
            </Container>
            <div className="flex flex-col col-span-1">
              {/*<div className="bg-hcGrayBrand p-6 rounded-xl">
                <EmojiVote />
              </div>*/}
              <div className="bg-hcGrayBrand py-4 px-4 rounded-xl flex lg:hidden mt-8">
                {meta.tags ?
                  <div className="flex flex-wrap">
                    {meta.tags.map((tag, i) => (
                      <span key={i} className="bg-hcRedBrand text-white px-2 py-1 rounded-md m-1 text-sm cursor-pointer">#{tag}</span>
                    ))}
                  </div>
                  : <h4 className="m-0 p-0 px-2 text-white">No Tags</h4>
                }
              </div>
              <div className="bg-hcGrayBrand py-4 px-4 rounded-xl grid grid-cols-5 gap-4 lg:hidden mt-8">
                <a className="bg-twitter px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://twitter.com/intent/tweet?url=${process.env.APP_URL + router.pathname}&text=${meta.title} @${process.env.APP_SITE_NAME}`}><FaTwitter /></a>
                <a className="bg-facebook px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.facebook.com/share.php?u=${process.env.APP_URL + router.pathname}&quote=${meta.title} @${process.env.APP_SITE_NAME}`}><FaFacebookF /></a>
                <a className="bg-linkedin px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.APP_URL + router.pathname}`}><FaLinkedinIn /></a>
                <a className="bg-flipboard px-2 py-3 text-white rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${meta.title}&url=${process.env.APP_URL + router.pathname}`}><SiFlipboard /></a>
                <a className="bg-whiteBrand px-2 py-3 text-blue-brand rounded hover:bg-opacity-70 transition-all flex justify-center items-center" href="#" onClick={() => copyPostUrl(process.env.APP_URL + router.pathname)}><FiLink /></a>
              </div>
              <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-0 lg:grid-cols-1 md:grid-cols-2">
                {getRelated(meta).map((post, i) => (
                  <TransparentPreview post={post} link={'/articles' + post.link} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*<div className="flex flex-col fixed top-0 left-0 z-40 bg-whiteBrand py-4 px-2 min-h-screen">
          <EmojiVote />
                </div>*/}
        <ScrollToTop />
      </section>
      <Related />
      {meta.footer.next ?
        <FooterInfo coverImage={meta.footer.coverImage} next={meta.footer.next} />
        :
        <FooterEnd title={meta.footer.title} message={meta.footer.message} related={meta.footer.related} demo={meta.footer.demo} source={meta.footer.source} />
      }
    </>
  )
}

export default Post