import { Text } from "components";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { enableFreeze } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";

// This is for optimization, every screen that's not focused has a never ending promise
// that stalls it, which means that whatever the app would like to rerender in the background
// would now be unable to be rerendered. Comment it if it causes any issues.
enableFreeze(true);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 40,
      }}
    >
      <Text style={localStyles.text}>Starter project</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
export default App;
