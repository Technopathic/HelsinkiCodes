import { useState, useEffect } from 'react'
import { getPosts } from '../actions'

import SideText from '../components/SideText'
import { LargePreview, SmallPreview } from '../components/Preview'

const Chunk = ({ items }) => (
  <div style={{maxWidth:'1920px'}}>
    {items.length > 0 &&
      <section className="grid grid-cols-1 lg:grid-cols-4 w-full">
        {items.map((post, i) => (
          i === 0 && <LargePreview key={post.link} post={post} link={'/articles' + post.link} />
        ))}
        <div className="col-span-2 grid-cols-1 grid sm:grid-cols-2 grid-rows-2">
          {items.map((post, i) => (
            i > 0 && i < 5 && <SmallPreview key={post.link} post={post} link={'/articles' + post.link} />
          ))}
        </div>
      </section>
    }
    {items.length >= 5 &&
     <section className="grid grid-cols-1 lg:grid-cols-4 w-full">
        <div className="col-span-2 grid-cols-1 grid sm:grid-cols-2 grid-rows-2">
          {items.map((post, i) => (
            i >= 5 && i < 9 && <SmallPreview key={post.link} post={post} link={'/articles' + post.link} />
          ))}
        </div>
        {items.map((post, i) => (
          i === 9 && <LargePreview key={post.link} post={post} link={'/articles' + post.link} />
        ))}
      </section>
    }
  </div>
)

const Blog = (props) => {
  const [isLoadingMore, setLoadingMore] = useState(false)
  const [posts, setPosts] = useState([props.posts])
  const [postsCount, setPostsCount] = useState(props.count)
  const [postsPage, setPostsPage] = useState(1)

  const updatePosts = (resPosts, resCount) => {
    const currentPosts = posts
    currentPosts.push(resPosts)

    setPosts(currentPosts)
    setPostsPage(postsPage + 1)
    setPostsCount(resCount)

    setLoadingMore(false)
  }

  const loadContent = async () => {
    setLoadingMore(true)
    const res = await getPosts(postsPage, process.env.POST_COUNT)
    updatePosts(res.posts, res.count)
  }

  return (
    <main className="mt-0 mb-16 md:my-24 flex flex-col items-center">
      {posts.map((chunkContent, i) => (
        <Chunk items={chunkContent} key={i} />
      ))}
      <section className="flex w-full max-w-screen-xl justify-between items-center mt-20">
        <div className="h-px bg-divider flex-grow"></div>
        {postsPage * process.env.POST_COUNT >= postsCount ?
          <div className="px-6 py-2 text-center mx-4">You've reached the end!<span className="text-2xl ml-2">👋</span></div>
          :
          isLoadingMore ?
            <div></div>
            : <span onClick={loadContent} className="px-6 py-2 border border-solid border-gray-300 rounded-full cursor-pointer text-center mx-4">Load More</span>
        }
        <div className="h-px bg-divider flex-grow"></div>
      </section>
      {/*<SideText text="Helsinki" direction="left" move="down" time={10} delay={1} />
      <SideText text="Codes" direction="right" move="up" time={11} delay={4} />*/}
    </main>
  )
}

export async function getStaticProps() {
  const { posts, count } = await getPosts(0, process.env.POST_COUNT)
  return {
    props: { posts, count }
  }
}

export default Blog