import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { enableFreeze } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";
import Home from "screens/Home";
import ThemeProvider from "theme/ThemeContext";
// This is for optimization, every screen that's not focused has a never ending promise
// that stalls it, which means that whatever the app would like to rerender in the background
// would now be unable to be rerendered. Comment it if it causes any issues.
enableFreeze(true);

const App = () => {
  const [initialTheme, setInitialTheme] = useState<string | null>(null);
  //good function to persist theme

  // const getTheme = async () => {
  //   const savedTheme = await AsyncStorage.getItem("theme");
  //   if (savedTheme) setInitialTheme(savedTheme);
  // };
  useEffect(() => {
    SplashScreen.hide();
    // getTheme();
  }, []);
  return (
    <ThemeProvider initialTheme={initialTheme || undefined}>
      <Home />
    </ThemeProvider>
  );
};

const localStyles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default App;
