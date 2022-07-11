import useTheme from "hooks/useTheme";
import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { Themes } from "theme/themes";

const Home = () => {
  const { theme, themeName, setTheme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.primary,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme.secondary }}>Home</Text>
      <Pressable
        onPress={async () => {
          if (themeName == Themes.purple) {
            setTheme(Themes.visiotTheme);
          } else {
            setTheme(Themes.purple);
          }
        }}
      >
        <Text>Change theme</Text>
      </Pressable>
    </View>
  );
};

export default Home;
