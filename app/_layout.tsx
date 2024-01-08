import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Login", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
