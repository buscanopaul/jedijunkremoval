import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const LayoutFirst = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "First",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default LayoutFirst;
