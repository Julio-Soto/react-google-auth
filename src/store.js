import {createStore} from 'redux'
import userProfileReducer from './reducer.js'

export const store = createStore(userProfileReducer)