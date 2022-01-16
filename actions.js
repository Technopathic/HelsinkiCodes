import {
    SET_COOKIE_CONSENT,
    GET_POSTS
} from './constants'
import axios from 'axios'

export const getPosts = (page = 0, count) => async (dispatch) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    }))
        .sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))

    const posts = res.slice(page * count, (page * count) + count)

    dispatch({ type: GET_POSTS, posts, count: res.length })
}

export const searchPosts = async (query) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    }))
        .sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))

    const posts = res.filter(post => post.module.meta.title.toLowerCase().includes(query) || post.module.meta.tags.includes(query))

    return posts
}

export const showCategory = (query) => async (dispatch) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    }))
        .sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))

    const posts = res.filter(post => post.module.meta.category === query)

    dispatch({ type: SHOW_CATEGORY, posts })
}

export const getRelated = (meta) => {
    const r = require.context("./pages/articles/", true, /\index.mdx$/)

    const res = r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    }))
        .sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))

    const posts = []

    for (const query of meta.tags) {
        if (posts.length < 6) {
            posts.push(...res.filter(post => {

                if (!post.module.meta.tags.includes(query)) {
                    return false
                }

                if (post.module.meta.title === meta.title) {
                    return false
                }

                if (posts.some(checkPost => (checkPost.module.meta.title === post.module.meta.title))) {
                    return false
                }

                return true
            }))
        }
    }

    if (posts.length < 6) {
        posts.push(...res.filter(post => {
            if (posts.length >= 6) {
                return false
            }

            if (post.module.meta.category !== meta.category) {
                return false
            }

            if (post.module.meta.title === meta.title) {
                return false
            }

            if (posts.some(checkPost => (checkPost.module.meta.title === post.module.meta.title))) {
                return false
            }

            return true
        }))
    }

    return posts
}
