import { Text } from 'components'
import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    useEffect(()=>{
        SplashScreen.hide()
    }, [])
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:40 }}>
            <Text style={localStyles.text}>Starter project</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    text:{
        textAlign:'center'
    }
})
export default App
