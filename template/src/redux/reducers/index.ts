import { combineReducers } from 'redux'
import { DESTROY_SESSION } from '../actions/destroySessionActions'
import loginReducer from './loginReducer'

const appReducer = combineReducers({
    login:loginReducer
})

const rootReducer = (state: any, action: any) => {
    if (action.type === DESTROY_SESSION) {
        state = undefined 
    }

    return appReducer(state, action)
}

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer