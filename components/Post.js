import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { getRelated } from "../actions"

import FooterInfo from './FooterInfo'
import ScrollToTop from './ScrollToTop'
import { Primary, Secondary } from './Button'
import Toast from './Toast'
import Img from './Img'
import { RelatedPreview } from './Preview'


import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiLink } from 'react-icons/fi'
import { SiFlipboard } from 'react-icons/si'
import { CgFormatSlash } from 'react-icons/cg'

const Container = styled.article`

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

        <meta name="og:title" property="og:title" content={`${meta.title} | ${process.env.APP_SITE_NAME}`} />
        <meta name="og:description" property="og:description" content={meta.description} />
        <meta name="og:url" property="og:url" content={process.env.APP_URL + router.pathname} />

        <meta name="og:image" property="og:image" content={process.env.APP_URL + meta.coverImage} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_URL + meta.coverImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="helsinki.codes" />
        <meta property="twitter:url" content={process.env.APP_URL + router.pathname} />
        <meta name="twitter:title" content={`${meta.title} :: ${process.env.APP_SITE_NAME}`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`${process.env.APP_URL + meta.coverImage}`} />

      </Head>
      <Toast showToast={showToast} setShowToast={setShowToast} />
      <div className="flex flex-col m-auto mt-10 md:mt-44 max-w-screen-xl">
        <section className="flex flex-col mb-8 px-4">
          <div className="flex">
            <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
            <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
            <span className="text-sm -ml-1 uppercase text-pink-500">{meta.category}</span>
          </div>
          <h1 className="m-0 p-0 uppercase sm:text-7xl">{meta.title}</h1>
          <span className={`text-sm text-gray-600`}>{meta.date}</span>
        </section>
        <Container className="flex flex-col">
          {!meta.hideCover && <Img src={meta.coverImage} alt="cover image" className="mb-8" />}
          <div className="flex flex-wrap leading-8" id="post-content">{children}</div>
        </Container>
        <div className="p-4 mt-4 flex">
          <a className="bg-twitter h-10 w-10 mr-3 text-white hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://twitter.com/intent/tweet?url=${process.env.APP_URL + router.pathname}&text=${meta.title} @${process.env.APP_SITE_NAME}`}><FaTwitter /></a>
          <a className="bg-facebook h-10 w-10 mr-3 text-white hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.facebook.com/share.php?u=${process.env.APP_URL + router.pathname}&quote=${meta.title} @${process.env.APP_SITE_NAME}`}><FaFacebookF /></a>
          <a className="bg-linkedin h-10 w-10 mr-3 text-white hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.APP_URL + router.pathname}`}><FaLinkedinIn /></a>
          <a className="bg-flipboard h-10 w-10 mr-3 text-white hover:bg-opacity-70 transition-all flex justify-center items-center" href={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${meta.title}&url=${process.env.APP_URL + router.pathname}`}><SiFlipboard /></a>
          <a className="bg-hcGrayBrand h-10 w-10 mr-3 text-white hover:bg-opacity-70 transition-all flex justify-center items-center" href="#" onClick={() => copyPostUrl(process.env.APP_URL + router.pathname)}><FiLink /></a>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 md:grid-cols-2">
        {getRelated(meta).map((post, i) => (
          <RelatedPreview post={post} link={'/articles' + post.link} key={i} />
        ))}
      </div>
      <ScrollToTop />
    </>
  )
}

export default Post