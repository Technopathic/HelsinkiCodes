export const getPosts = async (page = 0, count) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        meta: r(fileName).meta
    }))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

    const posts = res.slice(page * count, (page * count) + count)

    return ({ posts, count: res.length })
}

export const searchPosts = async (query) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        meta: r(fileName).meta
    }))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

    const posts = res.filter(post => post.meta.title.toLowerCase().includes(query) || post.meta.tags.includes(query))

    return posts
}

/*export const showCategory = (query) => async (dispatch) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    }))
        .sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))

    const posts = res.filter(post => post.module.meta.category === query)

    dispatch({ type: SHOW_CATEGORY, posts })
}*/

export const getRelated = (meta) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        meta: r(fileName).meta
    }))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

    const posts = []
    for (const query of meta.tags) {
        for (const post of res) {
            if (!post.meta.tags.includes(query)) {
                continue
            }

            if (post.meta.title === meta.title) {
                continue
            }

            if (meta.title === post.meta.title) {
                continue
            }

            if(posts.length >= 3) {
                break
            }

           posts.push(post)
        }
    }
    
    return posts
}
