import * as actions from 'redux/actions/loginActions'
import { Action } from 'redux/interfaces'

interface LoginState{
    isSignout: boolean
    isLoading: boolean
    userToken: actions.UserToken
}

const initialState: LoginState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
}
const loginReducer = (state = initialState, action: Action): LoginState => {
    switch (action.type){
        case actions.RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.userToken,
                isLoading: false,
            }
        case actions.SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.userToken,
            }
        case actions.SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            }
        default:
            return state
    }
}

export default loginReducer