import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import React from "react";

const MainApp = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
