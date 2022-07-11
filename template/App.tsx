import React, { useEffect, useState } from 'react'
import { enableFreeze } from 'react-native-screens'
import Home from '@screens/Home'
import ThemeProvider from 'theme/ThemeContext'
// This is for optimization, every screen that's not focused has a never ending promise
// that stalls it, which means that whatever the app would like to rerender in the background
// would now be unable to be rerendered. Comment it if it causes any issues.
enableFreeze(true)

const App = () => {
    const [initialTheme] = useState<string | null>(null)
    //good function to persist theme

    // const getTheme = async () => {
    //   const savedTheme = await AsyncStorage.getItem("theme");
    //   if (savedTheme) setInitialTheme(savedTheme);
    // };
    useEffect(() => {
        // getTheme();
    }, [])
    return (
        <ThemeProvider initialTheme={initialTheme || undefined}>
            <Home />
        </ThemeProvider>
    )
}

export default App
