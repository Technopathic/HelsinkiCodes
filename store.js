import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

import reducer from './reducer'

const configureStore = () => {
    const persistConfig = {
        key: 'root',
        storage: storage,
        blacklist: ['posts', 'postsPage']
    }

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, applyMiddleware(thunk))

    return store
}

export default configureStore