import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return <Redirect href="/(tabs)/first" />;
};

export default index;
