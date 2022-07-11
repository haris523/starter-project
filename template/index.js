import { AppRegistry, StyleSheet } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const MainApp = () => (
    <Provider store={store}>
        <GestureHandlerRootView style={localStyles.flexOne}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </GestureHandlerRootView>
    </Provider>
)

const localStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
})
AppRegistry.registerComponent(appName, () => MainApp)
