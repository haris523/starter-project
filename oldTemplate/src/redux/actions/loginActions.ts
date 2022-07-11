export const RESTORE_TOKEN = 'RESTORE_TOKEN'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export type UserToken = string | null
export interface RestoreToken{
    type: typeof RESTORE_TOKEN
    userToken: UserToken
}

export interface SignIn{
    type: typeof SIGN_IN
    userToken: UserToken
}

export interface SignOut{
    type: typeof SIGN_OUT
}

export const restoreToken = (userToken: UserToken): RestoreToken=>({
    type:RESTORE_TOKEN,
    userToken
})

export const signIn = (userToken: UserToken): SignIn=>({
    type:SIGN_IN,
    userToken,
})

export const signOut = (): SignOut=>({
    type:SIGN_OUT,
})