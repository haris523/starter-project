import axios, { AxiosRequestConfig } from 'axios'
// import Config from 'react-native-dotenv'
import { Platform } from 'react-native'

export default async (request: AxiosRequestConfig) => {
    request.method = request.method || 'get'
    const URL = '' //TODO: Replace with url
    request.url = `${URL}/${request.url}`
    if (Platform.OS === 'android') {
        request.data = request.data || {}
    }
    if (request.data && request.method === 'get') {
        // If data is set the get request won't be made
        request.data = null
    }
    // request.headers = {
    //   ...request.headers,
    //   'X-Device': 'mobile',
    //   Authorization: `Bearer ${accessToken}`,
    // };
    return axios(request)
}
