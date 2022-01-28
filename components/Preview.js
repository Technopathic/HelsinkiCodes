import styled from '@emotion/styled'
import Link from 'next/link'

const NewsArticle = styled.a`
    height: 600px;
    text-decoration: none;
`

const NewsImage = styled.div`
    height: 300px;
`

const NewsInfo = styled.div`
    height: 300px;
    background: rgba(255, 255, 255, 0.65);  
    backdrop-filter: blur(10px);
`

const Article = styled.a`
    background:#FFFFFF;
    height: 360px;
    position: relative;
    text-decoration:none;
`

const MediumPreviewImage = styled.div`
   
`

const MediumPreviewContent = styled.div`

`

const Frosted = styled.div`
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
`

export const LargePreview = ({ post, link, showAuthor }) => (
    <Link href={link} passHref>
        <a className="relative col-span-2 flex flex-col justify-end no-underline max-w-full" style={{ minHeight: '400px' }}>
            <div className="w-full h-full rounded-xl shadow-lg">
                <img className="object-cover w-full h-full rounded-xl" src={post.meta.coverImage} />
            </div>
            <div className="flex flex-col relative py-4">
                <h2 className="m-0 p-0 truncate">{post.meta.title}</h2>
                <p className="m-0 p-0 line-clamp-2 h-14">{post.meta.description}</p>
                {showAuthor && 
                    <div className="flex">
                        <div className="rounded-full h-12 w-12">
                            <img className="rounded-full" src={post.meta.authors[0].image} />
                        </div>
                        <div className="flex flex-col ml-4 justify-center">
                            <span className="text-gray-100 text-sm">{post.meta.authors[0].name}</span>
                            <span className="text-gray-100 text-sm">{post.meta.date}</span>
                        </div>
                    </div>
                }
            </div>
        </a>
    </Link>
)

export const SmallPreview = ({ post, link, showAuthor }) => (
    <Link href={link} passHref>
        <a className="col-span-1 row-span-1 no-underline flex flex-col justify-end">
            <div className="h-full rounded-xl w-full shadow-lg">
                <img className="object-cover h-full rounded-xl w-full" src={post.meta.coverImage} />
            </div>
            <div className="flex flex-col justify-between py-4 relative">
                <div className="flex flex-col">
                    <h3 className={`m-0 p-0 truncate`}>{post.meta.title}</h3>
                    <p className={`m-0 p-0 text-base line-clamp-2 text-gray-600`}>{post.meta.description}</p>
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

export const MediumPreview = ({ post, link, showPreviewImage, showAuthor }) => (
    <Link href={link} passHref>
        <a className={`flex flex-col sm:flex-row relative no-underline`}>
            <MediumPreviewImage className="w-full sm:w-2/5 rounded-xl shadow-lg">
                <img className="object-cover h-full rounded-xl" src={post.meta.coverImage} />
            </MediumPreviewImage>
            <MediumPreviewContent className={`flex flex-col justify-between px-0 py-4 sm:px-4 sm:py-0 h-full w-full sm:w-3/5`} showPreviewImage={showPreviewImage}>
                <div className="flex flex-col">
                    <h3 className={`m-0 pb-2 truncate`}>{post.meta.title}</h3>
                    <p className={`m-0 p-0 text-base line-clamp-2  text-gray-600`}>{post.meta.description}</p>
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
            </MediumPreviewContent>
        </a>
    </Link>
)

export const CardPreview = ({ post, link, showAuthor }) => (
    <Link href={link} passHref>
        <a className="flex flex-col relative rounded-xl no-underline">
            <div className="w-full relative overflow-hidden rounded-xl shadow-md " style={{ height: '220px' }}>
                <img className="object-cover h-full w-full" src={post.meta.coverImage} />
            </div>
            <div className="flex flex-col py-4 w-full justify-between" style={{ height: '140px' }}>
                <div className="flex flex-col pb-4">
                    <h3 className={`m-0 pb-2 truncate`}>{post.meta.title}</h3>
                    <p className={`m-0 p-0 text-base text-gray-600 line-clamp-2`}>{post.meta.description}</p>
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

export const TransparentPreview = ({ post, link }) => (
    <Link href={link} passHref>
        <a className="relative h-40 w-full bg-whiteBrand rounded-xl shadow-md no-underline flex flex-col justify-end">
            <div className="absolute w-full h-full rounded-xl z-10">
                <img className="object-cover w-full h-full rounded-xl" src={post.meta.coverImage} />
            </div>
            <div className="absolute w-full h-full bg-blackBrand bg-opacity-40 rounded-xl z-20" />
            <div className="flex flex-col justify-between py-4 px-6 relative z-30">
                <div className="flex flex-col">
                    <h4 className='m-0 p-0 text-white truncate' style={{textShadow: '0px 0px 3px #000000'}}>{post.meta.title}</h4>
                </div>
            </div>
        </a>
    </Link>
)

export const NewsPreview = ({ post }) => (
    <Link href={post.link} passHref>
        <NewsArticle className="w-full flex flex-col relative shadow-lg rounded-2xl">
            <NewsImage className="w-full relative overflow-hidden rounded-t-2xl">
                <img className="object-cover h-full" src={post.meta.coverImage} />
            </NewsImage>
            <NewsInfo className="flex flex-col items-center justify-center p-8 w-full absolute bottom-0 z-10 border-t-2 border-solid border-white rounded-b-2xl">
                <div className="rounded-full absolute h-20 w-20 -top-10 border-2 border-solid border-white">
                    <img className="rounded-full" src={post.meta.authors[0].image} />
                </div>
                <p className="p-0 m-0 font-semibold text-lg text-gray-600">{post.meta.authors[0].name}</p>
                <h2 className="m-0 text-center py-6">{post.meta.title}</h2>
                <span className="text-gray-400">{post.meta.date}</span>
            </NewsInfo>
        </NewsArticle>
    </Link>
)

export const Preview = ({ post }) => (
    <Link href={post.link} passHref>
        <Article className="col-span-3 flex rounded-2xl shadow-lg">
            <div className="w-2/5 bg-grayBrand rounded-l-2xl">
                <img className="object-cover h-full rounded-l-2xl" src={post.meta.coverImage} />
            </div>
            <div className="w-3/5 p-8 flex flex-col justify-between rounded-r-2xl">
                <div className="flex flex-col">
                    <div></div>
                    <h2 className="m-0">{post.meta.title}</h2>
                    <p className="m-0 p-0 text-gray-600">{post.meta.description}</p>
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex">
                        <div className="rounded-full h-12 w-12">
                            <img className="rounded-full" src={post.meta.authors[0].image} />
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="text-gray-400">Author</span>
                            <span className="text-gray-600">{post.meta.authors[0].name}</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-400">Published on</span>
                        <span className="text-gray-600">{post.meta.date}</span>
                    </div>
                </div>
            </div>
        </Article>
    </Link>
)
