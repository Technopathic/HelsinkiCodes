import {
    SET_COOKIE_CONSENT,
    GET_POSTS
} from './constants'

const initialState = {
    cookieConsent: false,
    posts: [],
    postsCount: 0,
    postsPage: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COOKIE_CONSENT: {
            return {
                ...state,
                cookieConsent: true
            }
        }

        case GET_POSTS: {
            const posts = state.posts
            const postsPage = state.postsPage + 1
            posts.push(action.posts)


            return {
                ...state,
                posts,
                postsCount: action.count,
                postsPage
            }
        }

        default: {
            return state
        }
    }
}

export default rootReducer