import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {};

const queryClient = new QueryClient();

const Layout = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Login", headerShown: false }}
        />
      </Stack>
    </QueryClientProvider>
  );
};

export default Layout;
