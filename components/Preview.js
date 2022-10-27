import styled from '@emotion/styled'
import Link from 'next/link'

import { CgFormatSlash } from 'react-icons/cg'

const LargeArticle = styled.a`
    height: 768px;

    @media(max-width: 425px) {
        height: 384px;
    }
`

export const LargePreview = ({ post, link }) => (
    <Link href={link} passHref>
        <LargeArticle className="relative col-span-2 flex flex-col no-underline max-w-full">
            <div className="w-full h-full">
                <img className="object-cover w-full h-full" src={post.meta.coverImage} />
            </div>
            <div className="flex flex-col absolute bottom-6 px-4 py-2 bg-darkGrayBrand max-w-full">
                <div className="flex">
                    <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
                    <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
                    <span className="text-sm -ml-1 uppercase text-pink-500">{post.meta.category}</span>
                </div>
                <h1 className="m-0 p-0 truncate md:text-5xl text-4xl text-white">{post.meta.title}</h1>
            </div>
        </LargeArticle>
    </Link>
)

export const SmallPreview = ({ post, link, showAuthor }) => (
    <Link href={link} passHref>
        <a className="relative no-underline flex flex-col">
            <div className="h-96 w-full">
                <img className="object-cover h-full w-full" src={post.meta.coverImage} />
            </div>
            <div className="flex flex-col absolute bottom-6 px-4 py-2 bg-darkGrayBrand max-w-full h-20">
                <div className="flex">
                    <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
                    <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
                    <span className="text-sm -ml-1 uppercase text-pink-500">{post.meta.category}</span>
                </div>
                <h1 className="m-0 p-0 truncate text-4xl text-white">{post.meta.title}</h1>
            </div>
        </a>
    </Link>
)

export const MediumPreview = ({ post, link, showAuthor }) => (
    <Link href={link} passHref>
        <a className={`flex flex-col sm:flex-row relative no-underline shadow-md`}>
            <div className="w-full rounded-t-xl sm:w-2/5 sm:rounded-t-none sm:rounded-l-xl">
                <img className="object-cover h-full rounded-t-xl sm:rounded-t-none sm:rounded-l-xl" src={post.meta.coverImage} />
            </div>
            <div className={`flex flex-col justify-between p-4 h-full w-full sm:w-3/5 rounded-b-xl sm:rounded-r-xl bg-white`}>
                <div className="flex flex-col">
                    <h4 className={`m-0 pb-2 truncate`}>{post.meta.title}</h4>
                    <p className={`m-0 p-0 text-base line-clamp-2  text-gray-600`}>{post.meta.description}</p>
                </div>
                <div className="flex mt-4 justify-between">
                        <div className="flex">
                        <div className="flex">
                            <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
                            <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
                        </div>
                        <span className="text-sm -ml-1 uppercase text-pink-500">{post.meta.category}</span>
                    </div>
                    <span className={`text-sm text-gray-600`}>{post.meta.date}</span>
                </div>
                {showAuthor && 
                    <div className="flex">
                        <div className="rounded-full h-12 w-12">
                            <img className="rounded-full" src={post.meta.authors[0].image} />
                        </div>
                        <div className="flex flex-col ml-4 justify-center">
                            <span className={`text-sm text-gray-600`}>{post.meta.authors[0].name}</span>
                            <span className={`text-sm text-gray-600`}>{post.meta.date}</span>
                        </div>
                    </div>
                }
            </div>
        </a>
    </Link>
)

export const ResourcePreview = ({ title, description, coverImage, link, category }) => (
    <a href={link} className="flex flex-col relative rounded-xl no-underline shadow-md" target="_blank" rel="noopener noreferrer">
        <div className="w-full relative overflow-hidden rounded-t-xl " style={{ height: '220px' }}>
            <img className="object-cover h-full w-full rounded-t-xl" src={coverImage} />
        </div>
        <div className="flex flex-col p-4 w-full justify-between rounded-b-xl bg-white" style={{ minHeight: '140px' }}>
            <div className="flex flex-col pb-4">
                <h4 className={`m-0 pb-2 truncate`}>{title}</h4>
                <p className={`m-0 p-0 text-base text-gray-600 line-clamp-3`}>{description}</p>
            </div>
            <div className="flex mt-4 justify-between">
                    <div className="flex">
                    <div className="flex">
                        <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
                        <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
                    </div>
                    <span className="text-sm -ml-1 uppercase text-pink-500">{category}</span>
                </div>
            </div>
        </div>
    </a>
)

export const RelatedPreview = ({ post, link }) => {
    return (
    <Link href={link} passHref>
        <a className="relative h-96 w-full no-underline flex flex-col justify-end">
            <div className="absolute w-full h-full z-10">
                <img className="object-cover w-full h-full" src={post.meta.coverImage} />
            </div>
            <div className="absolute w-full h-full bg-black bg-opacity-40 z-20" />
            <div className="flex flex-col absolute bottom-6 px-4 py-2 bg-darkGrayBrand max-w-full h-20 z-30">
                <div className="flex">
                    <CgFormatSlash size={20} className="-ml-1 text-pink-500" style={{ marginTop: "-1px" }} />
                    <CgFormatSlash size={20} className="-ml-4 text-pink-500" style={{ marginTop: "-1px" }} />
                    <span className="text-sm -ml-1 uppercase text-pink-500">{post.meta.category}</span>
                </div>
                <h1 className="m-0 p-0 truncate text-4xl text-white">{post.meta.title}</h1>
            </div>
        </a>
    </Link>
    )
}